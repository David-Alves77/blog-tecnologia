
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const artigos = JSON.parse(
    readFileSync(
        new URL("../data/artigos.json", import.meta.url),
        "utf8"
    )
);

test("O blog deve possuir pelo menos um artigo", () => {
    assert.ok(Array.isArray(artigos));
    assert.ok(artigos.length > 0);
});

test("Os artigos devem possuir todos os campos obrigatórios", () => {
    const campos = [
        "slug",
        "titulo",
        "autor",
        "data",
        "descricao",
        "conteudo"
    ];

    for (const artigo of artigos) {
        for (const campo of campos) {
            assert.ok(
                typeof artigo[campo] === "string" &&
                artigo[campo].trim().length > 0,
                `Campo inválido ou vazio: ${campo}`
            );
        }
    }
});

test("Os slugs dos artigos devem ser únicos", () => {
    const slugs = artigos.map(artigo => artigo.slug);

    assert.equal(
        new Set(slugs).size,
        slugs.length,
        "Existem slugs duplicados"
    );
});

test("Os slugs devem possuir um formato válido", () => {
    for (const artigo of artigos) {
        assert.match(artigo.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
});
