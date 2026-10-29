
import Link from "next/link";
import artigos from "../data/artigos.json";

export default async function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">
          Blog de Tecnologia
        </h1>

        <p className="mb-8 text-gray-600">
          Aprenda sobre programação, Python, React e Next.js.
        </p>

        <div className="grid gap-6">
          {artigos.map((artigo) => (
            <article
              key={artigo.slug}
              className="rounded-lg bg-white p-6 shadow"
            >
              <h2 className="mb-2 text-2xl font-semibold">
                {artigo.titulo}
              </h2>

              <p className="mb-2 text-sm text-gray-500">
                Por {artigo.autor} | {artigo.data}
              </p>

              <p className="mb-4 text-gray-700">
                {artigo.descricao}
              </p>

              <Link
                href={`/artigos/${artigo.slug}`}
                className="font-semibold text-blue-600 hover:underline"
              >
                Ler artigo →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
