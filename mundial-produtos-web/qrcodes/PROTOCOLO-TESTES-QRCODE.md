# Protocolo de testes — QR Codes para impressão

Siga este checklist antes de entregar os QR Codes para impressão.

---

## 1. Tamanho mínimo de impressão

| Recomendação | Valor |
|--------------|--------|
| **Tamanho mínimo** | **2,5 cm × 2,5 cm** (módulo de leitura confiável na maioria dos smartphones) |
| Uso em catálogos/etiquetas | 2,5 cm a 3 cm |
| Uso em outdoors ou distância maior | 4 cm × 4 cm ou mais |

Os arquivos gerados pelo script:
- **PNG**: 300 px de largura — ao imprimir em **300 DPI**, o tamanho final é ~2,5 cm. Ajuste a escala na impressora para não reduzir.
- **SVG**: vetorial — use em arte final para imprimir em qualquer tamanho sem perda de qualidade.

---

## 2. Nível de correção de erro (Error Correction Level)

O script usa **M (Medium, ~15%)** por padrão. Escolha conforme o uso:

| Nível | Correção | Quando usar |
|-------|----------|-------------|
| **L** (Low) | ~7% | Ambiente controlado, QR sempre limpo e íntegro |
| **M** (Medium) | ~15% | **Recomendado para impressão** — catálogos, etiquetas, uso interno |
| **Q** (Quartile) | ~25% | Impressão em ambientes com risco de sujeira ou desgaste |
| **H** (High) | ~30% | Exposição ao tempo, adesivos em máquinas, uso industrial |

Para alterar no script, edite `ERROR_CORRECTION_LEVEL` em `scripts/generate-qrcodes.js` (`'L'`, `'M'`, `'Q'` ou `'H'`).

---

## 3. Checklist antes de imprimir

- [ ] **URLs fixas**: Cada QR aponta para uma URL definitiva (ex.: `https://seu-site.vercel.app/produtos/telha-semi-sanduiche`). Não use URLs que mudam.
- [ ] **Teste em dispositivo real**: Escanear cada QR com a câmera nativa (iOS e Android) e com pelo menos um app leitor (ex.: leitor de QR do Google).
- [ ] **Destino correto**: Após o scan, a página do produto correto abre (vídeo e descrição).
- [ ] **HTTPS**: O site está em HTTPS para não ser bloqueado pelo navegador.
- [ ] **Contraste**: Impressão em fundo claro com módulos escuros (ou fundo escuro com módulos claros), sem cores que atrapalhem a leitura.
- [ ] **Tamanho na arte**: Na arte final (catálogo, etiqueta), o QR está com no mínimo 2,5 cm × 2,5 cm.
- [ ] **SVG para gráfica**: Se a gráfica pedir arte vetorial, envie o `qrcode.svg` da pasta do produto.

---

## 4. Como gerar os QR Codes

1. Defina a URL base do site (ex.: a URL do projeto no Vercel):
   ```bash
   set BASE_URL=https://seu-projeto.vercel.app
   node scripts/generate-qrcodes.js
   ```
   No PowerShell (Windows):
   ```powershell
   $env:BASE_URL="https://seu-projeto.vercel.app"; node scripts/generate-qrcodes.js
   ```

2. Instale a dependência (uma vez):
   ```bash
   npm install
   ```

3. Execute:
   ```bash
   npm run qrcodes
   ```
   (Configure `BASE_URL` no ambiente ou altere o valor padrão no script.)

4. Arquivos gerados:
   - `qrcodes/telha-semi-sanduiche/qrcode.png` e `qrcode.svg`
   - `qrcodes/painel-termico/` … até `qrcodes/telha-sanduiche/`

---

## 5. Resumo

- **Tamanho mínimo de impressão**: 2,5 cm × 2,5 cm.
- **Nível de correção**: M para uso geral em impressão; Q ou H se houver risco de desgaste ou sujeira.
- **Testes**: Scan em iOS e Android, confirmação da página e uso de HTTPS.
