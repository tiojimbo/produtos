# Estrutura do Projeto — Páginas de Produto com QR Codes

Site estático (HTML + CSS + JS) para 6 produtos, publicado na Vercel com URLs limpas.

## Estrutura de pastas

```
produtos/
├── index.html              # Homepage — listagem dos 6 produtos
├── vercel.json             # Configuração Vercel (clean URLs, trailing slash)
├── ESTRUTURA.md            # Este arquivo
├── planejamento_qrcode.html # Documento de planejamento (referência)
│
├── css/
│   └── style.css           # Estilos globais (template base)
│
├── js/
│   └── main.js             # Scripts compartilhados (opcional)
│
└── produtos/               # Páginas individuais por produto
    ├── telha-semi-sanduiche.html
    ├── painel-termico.html
    ├── telha-bandeja.html
    ├── telha-forro.html
    ├── telha-filme.html
    └── telha-sanduiche.html
```

## URLs no ar (após deploy)

Com `cleanUrls: true` no Vercel, as URLs ficam sem `.html`:

| Produto              | URL |
|----------------------|-----|
| Telha Semi-Sanduíche | `https://seuprojeto.vercel.app/produtos/telha-semi-sanduiche` |
| Painel Térmico       | `https://seuprojeto.vercel.app/produtos/painel-termico` |
| Telha Bandeja        | `https://seuprojeto.vercel.app/produtos/telha-bandeja` |
| Telha Forro          | `https://seuprojeto.vercel.app/produtos/telha-forro` |
| Telha Filme          | `https://seuprojeto.vercel.app/produtos/telha-filme` |
| Telha Sanduíche      | `https://seuprojeto.vercel.app/produtos/telha-sanduiche` |

## Template base

Todas as páginas de produto seguem o mesmo layout:

1. Cabeçalho (logo + nome do produto)
2. Vídeo YouTube (iframe responsivo, youtube-nocookie.com)
3. Descrição do produto + características
4. CTA (contato / orçamento)
5. Rodapé

Os estilos e o layout vêm de `css/style.css`; o conteúdo (título, vídeo, texto) varia por arquivo em `produtos/*.html`.
