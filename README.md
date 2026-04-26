# Dra. Martha Nardy - Landing Page (Next.js)

Este é o novo site da Dra. Martha Nardy, migrado do HTML original para **Next.js**, **Tailwind CSS** e **Framer Motion** para animações modernas.

## 🚀 Tecnologias Utilizadas

- **Framework:** Next.js 16
- **Estilização:** Tailwind CSS (via PostCSS)
- **Animações:** Framer Motion
- **Ícones:** Lucide React

## 💻 Como Rodar o Projeto Localmente

1. Navegue até a pasta do site:
```bash
cd next-site
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🌐 Como Subir na Vercel

O Next.js é desenvolvido pela mesma equipe da Vercel, o que torna o processo de deploy extremamente simples e direto. Você tem duas opções:

### Opção 1: Usando o Vercel CLI (Direto do Terminal)

Se quiser publicar rapidamente direto dessa pasta, execute:

```bash
npx vercel
```
Siga as instruções na tela para logar e criar o projeto. Depois, para o ambiente de produção, use:
```bash
npx vercel --prod
```

### Opção 2: Integrando com o GitHub (Recomendado)

Esta é a melhor opção, pois o site será atualizado automaticamente sempre que houver novas alterações.

1. Adicione os arquivos ao Git e suba para o GitHub:
```bash
git add .
git commit -m "feat: site next.js initial commit"
git push
```
2. Acesse sua conta na [Vercel](https://vercel.com/dashboard).
3. Clique em **Add New...** e depois em **Project**.
4. Selecione o seu repositório no GitHub.
5. Clique em **Deploy** (a Vercel reconhecerá o Next.js automaticamente).

Em menos de 1 minuto, o seu site com as novas animações estará no ar!
