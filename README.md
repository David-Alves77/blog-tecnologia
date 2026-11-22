# Blog de Tecnologia

Aplicação front-end desenvolvida com Next.js.

## Site publicado

https://blog-tecnologia-qq5n.vercel.app

## Como executar

1. Instale as dependências:
   `npm ci`
2. Inicie o projeto:
   `npm run dev`
3. Acesse:
   http://localhost:3000

## Testes e validações

Execute os seguintes comandos:

- `npm run lint` — Verifica a qualidade do código com ESLint.
- `npm run test` — Executa os testes automatizados.
- `npm run build` — Gera o build de produção.

## Pipeline CI/CD

O projeto utiliza GitHub Actions para automatizar:

- Instalação de dependências
- Verificação de código com ESLint
- Execução de testes automatizados
- Build de produção
- Deploy automático na Vercel

A validação ocorre em pushes e pull requests para a branch `main`.

O deploy ocorre automaticamente após a validação bem-sucedida de um push na branch `main`.

## Tecnologias utilizadas

- Next.js
- React
- JavaScript
- ESLint
- GitHub Actions
- Vercel

## Repositório

https://github.com/David-Alves77/blog-tecnologia
