# Páginas de Produto com QR Codes

Site estático (HTML + CSS + JS) com 6 páginas de produto, cada uma com vídeo do YouTube e descrição. Publicado na Vercel com URLs limpas para uso em QR Codes.

## Produtos

- Telha Semi-Sanduíche
- Painel Térmico
- Telha Bandeja
- Telha Forro
- Telha Filme
- Telha Sanduíche

## Estrutura

Ver [ESTRUTURA.md](ESTRUTURA.md) para a árvore de pastas e URLs.

## Deploy na Vercel

1. Conecte este repositório ao [Vercel](https://vercel.com).
2. Framework Preset: **Other** (site estático).
3. Build: deixe em branco; o deploy usa os arquivos estáticos como estão.
4. Após o deploy, as URLs ficam no formato: `https://seuprojeto.vercel.app/produtos/telha-semi-sanduiche` (sem `.html`).

## Conteúdo

Em cada arquivo em `produtos/*.html`:

- Substitua `VIDEO_ID` no iframe pelo ID do vídeo do YouTube (código após `?v=` na URL do vídeo).
- Edite a descrição e a lista de características em `.product-description` e `.product-specs`.

## Conectar ao GitHub

Se o projeto ainda não estiver versionado:

```bash
git init
git add .
git commit -m "Estrutura inicial: 6 páginas de produto + template base"
git branch -M main
git remote add origin https://github.com/tiojimbo/produtos.git
git push -u origin main
```

Se o repositório remoto já existir e tiver conteúdo:

```bash
git remote add origin https://github.com/tiojimbo/produtos.git
git fetch origin
git branch -M main
git push -u origin main
```

Depois, no painel da Vercel, importe o projeto a partir do repositório **tiojimbo/produtos**.
