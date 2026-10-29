
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import artigos from "../../../data/artigos.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return artigos.map((artigo) => ({
    slug: artigo.slug,
  }));
}

// SEO específico de cada artigo
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const artigo = artigos.find(
    (artigo) => artigo.slug === slug
  );

  if (!artigo) {
    return {
      title: "Artigo não encontrado",
      description: "O artigo solicitado não existe.",
    };
  }

  return {
    title: `${artigo.titulo} | Blog de Tecnologia`,
    description: artigo.descricao,
  };
}

// Server Component assíncrono
export default async function PaginaArtigo({
  params,
}: Props) {
  const { slug } = await params;

  const artigo = artigos.find(
    (artigo) => artigo.slug === slug
  );

  if (!artigo) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8 text-gray-900">
      <article className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow">
        <Link
          href="/"
          className="mb-8 inline-block text-blue-600 hover:underline"
        >
          ← Voltar para o blog
        </Link>

        <h1 className="mb-4 text-4xl font-bold">
          {artigo.titulo}
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Por {artigo.autor} | Publicado em {artigo.data}
        </p>

        <p className="text-lg leading-8 text-gray-700">
          {artigo.conteudo}
        </p>
      </article>
    </main>
  );
}
