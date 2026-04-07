export default function Loading() {
  return (
    <div className="flex h-64 flex-col items-center justify-center space-y-4">
      <div className="relative h-12 w-12">
        <div className="absolute h-12 w-12 rounded-full border-4 border-slate-200"></div>
        <div className="absolute h-12 w-12 animate-spin rounded-full border-4 border-slate-900 border-t-transparent"></div>
      </div>
      <p className="animate-pulse text-sm font-medium text-slate-500">
        Carregant dades...
      </p>
    </div>
  );
}
