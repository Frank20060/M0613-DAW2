import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireEditor } from "@/src/lib/api-auth";

export async function GET() {
  // 1) Comprovacio de sessio+rol
  const sessionAuth = await requireEditor();
  if (sessionAuth.error) {
    return NextResponse.json({ error: sessionAuth.error }, { status: sessionAuth.status });
  }
  // 2) Consulta protegida
  const posts = await prisma.post.findMany({
    orderBy: { updatedAt: "desc" },
  });
  return NextResponse.json(posts);
}

export async function POST(request) {
  // 1) Comprovacio de sessio+rol
  const sessionAuth = await requireEditor();
  if (sessionAuth.error) {
    return NextResponse.json({ error: sessionAuth.error }, { status: sessionAuth.status });
  }

  // 2) Validacio de camps basics
  const body = await request.json();
  const { slug, title, excerpt, content, imageUrl } = body;

  if (!slug || !title || !content) {
    return NextResponse.json(
      { error: "slug, title i content són obligatoris" },
      { status: 400 }
    );
  }

  // 3) Insercio a BD
  const post = await prisma.post.create({
    data: {
      slug,
      title,
      excerpt: excerpt || null,
      content,
      imageUrl: imageUrl || null,
      authorId: sessionAuth.user.id,
    },
  });
  return NextResponse.json(post, { status: 201 });
}