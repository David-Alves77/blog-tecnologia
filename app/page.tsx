
import Link from "next/link";
import Image from "next/image";
import artigos from "../data/artigos.json";

const imagens: Record<string, string> = {
  "aprendendo-python": "/imagens/python.webp",
  "introducao-react": "/imagens/react.webp",
  "nextjs-app-router": "/imagens/nextjs.webp",
};

export default function Home() {
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
          {artigos.map((artigo, index) => (
            <article
              key={artigo.slug}
              className="rounded-lg bg-white p-6 shadow"
            >
              {imagens[artigo.slug] && (
                <Image
                  src={imagens[artigo.slug]}
                  alt={`Capa de ${artigo.titulo}`}
                  width={640}
                  height={320}
                  sizes="(max-width: 768px) 100vw, 640px"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="mb-4 h-auto w-full max-w-[640px] rounded-lg"
                />
              )}

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
                prefetch={false}
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
