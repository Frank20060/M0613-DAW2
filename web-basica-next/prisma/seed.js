import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Iniciant el procés de seed...");

  // 1. Crear Usuaris
  const passwordHash = bcrypt.hashSync("demo1234", 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@demo.local' },
    update: {},
    create: {
      email: 'admin@demo.local',
      passwordHash: passwordHash, // Reemplaçar per hash real si cal
      role: 'ADMIN',
    },
  });

  const editor = await prisma.user.upsert({
    where: { email: 'editor@demo.local' },
    update: {},
    create: {
      email: 'editor@demo.local',
      passwordHash: passwordHash,
      role: 'EDITOR',
    },
  });

  console.log(`Usuaris creats: ${admin.email}, ${editor.email}`);

  // 2. Crear Posts
  const posts = [
    {
      slug: "benvinguts-al-blog",
      title: "Benvinguts al Blog",
      excerpt: "Una breu introducció al nostre nou espai.",
      content: "Estem molt contents de llançar aquest blog on compartirem notícies, tutorials i actualitzacions sobre el món del desenvolupament web. Esperem que gaudiu del contingut!",
      authorId: admin.id,
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000",
    },
    {
      slug: "nextjs-app-router-guia",
      title: "Guia de Next.js App Router",
      excerpt: "Tot el que necessites saber sobre les rutes i layouts.",
      content: "L'App Router de Next.js ha canviat la forma en què construïm aplicacions React. En aquest article explorem els conceptes de Server Components, Client Components i el sistema de rutes basat en fitxers.",
      authorId: editor.id,
      imageUrl: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1000",
    },
    {
      slug: "prisma-i-postgresql",
      title: "Prisma i PostgreSQL: La combinació perfecta",
      excerpt: "Com gestionar el teu esquema de base de dades de manera eficient.",
      content: "Prisma és un ORM de nova generació que facilita enormement la interacció amb bases de dades SQL. Amb el seu esquema declaratiu i el client amb tipat fort, reduïm errors i millorem la productivitat.",
      authorId: editor.id,
      imageUrl: "https://images.unsplash.com/photo-1544383335-c533c445326d?q=80&w=1000",
    },
    {
      slug: "el-futur-del-frontend",
      title: "El futur del Desenvolupament Frontend",
      excerpt: "Tendències per al 2024 i més enllà.",
      content: "El panorama del frontend canvia ràpidament. Des de micro-frontends fins a noves eines de build, analitzem què ens espera en els propers mesos.",
      authorId: admin.id,
    },
  ];

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  console.log("Seed completat amb èxit!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
