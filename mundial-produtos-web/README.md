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

O repositório já está inicializado com o remote **origin** apontando para `https://github.com/tiojimbo/produtos.git`.

Para enviar o código ao GitHub (na pasta do projeto):

```bash
git push -u origin main
```

Se o repositório no GitHub já existir e estiver vazio, o push funciona direto. Se já houver commits no GitHub (por exemplo, um README criado na interface), faça antes:

```bash
git pull origin main --allow-unrelated-histories
# Resolva conflitos, se houver, depois:
git push -u origin main
```

**Configurar identidade do Git** (se ainda não tiver feito):  
Para que novos commits tenham seu nome e e-mail, configure uma vez:

```bash
git config --global user.email "seu@email.com"
git config --global user.name "Seu Nome"
```

Depois, no painel da [Vercel](https://vercel.com), importe o projeto a partir do repositório **tiojimbo/produtos**.
