
## Blog de Tecnologia

Aplicação front-end desenvolvida com Next.js.

### Site publicado

https://blog-tecnologia-qq5n.vercel.app

### Como executar

1. Instale as dependências:
   npm ci

2. Inicie o projeto:
   npm run dev

3. Acesse:
   http://localhost:3000

### Testes e validações

npm run lint
npm run test
npm run build

### Pipeline CI/CD

O projeto utiliza GitHub Actions para automatizar:

- Instalação de dependências
- Verificação de código com ESLint
- Execução de testes automatizados
- Build de produção
- Deploy automático na Vercel

A validação ocorre em pushes e pull requests
para a branch main.

O deploy ocorre após a validação bem-sucedida
de um push na branch main.
