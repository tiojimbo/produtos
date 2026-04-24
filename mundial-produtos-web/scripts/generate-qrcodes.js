/**
 * Gera QR Codes fixos para as 6 páginas de produto.
 * Execute a partir de mundial-produtos-web/:
 *   BASE_URL=https://seu-projeto.vercel.app node scripts/generate-qrcodes.js
 *   npm run qrcodes   (defina BASE_URL no ambiente)
 * Saída: mundial-produtos-web/qrcodes/{slug}/qrcode.{png,svg}
 */

const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// URLs fixas: base + /produtos/[slug] (sem .html — cleanUrls no Vercel)
const BASE_URL = process.env.BASE_URL || 'https://produtos-orpin.vercel.app';
const PRODUCTS = [
  { name: 'Telha Semi-Sanduíche', slug: 'telha-semi-sanduiche' },
  { name: 'Painel Térmico', slug: 'painel-termico' },
  { name: 'Telha Bandeja', slug: 'telha-bandeja' },
  { name: 'Telha Forro', slug: 'telha-forro' },
  { name: 'Telha Filme', slug: 'telha-filme' },
  { name: 'Telha Sanduíche', slug: 'telha-sanduiche' },
];

// PNG: 300 DPI — 2,5 cm ≈ 295 px; usar 300 px para margem de segurança
const PNG_WIDTH_PX = 300;
// Nível de correção de erro: M (15%) ou H (30%) para impressão/uso externo
const ERROR_CORRECTION_LEVEL = 'M';
const OUTPUT_DIR = path.join(__dirname, '..', 'qrcodes');

const optionsPng = {
  width: PNG_WIDTH_PX,
  margin: 2,
  errorCorrectionLevel: ERROR_CORRECTION_LEVEL,
  color: { dark: '#000000', light: '#ffffff' },
};

const optionsSvg = {
  margin: 2,
  errorCorrectionLevel: ERROR_CORRECTION_LEVEL,
  color: { dark: '#000000', light: '#ffffff' },
};

async function generate() {
  if (BASE_URL.includes('seu-projeto')) {
    console.warn('⚠️  Defina BASE_URL com a URL real do seu site no Vercel.');
    console.warn('   Ex.: BASE_URL=https://produtos.vercel.app node scripts/generate-qrcodes.js\n');
  }

  console.log('Base URL:', BASE_URL);
  console.log('Saída:   ', OUTPUT_DIR);
  console.log('');

  for (const product of PRODUCTS) {
    const url = `${BASE_URL}/produtos/${product.slug}`;
    const dir = path.join(OUTPUT_DIR, product.slug);

    fs.mkdirSync(dir, { recursive: true });

    try {
      const pngPath = path.join(dir, 'qrcode.png');
      const svgPath = path.join(dir, 'qrcode.svg');

      await QRCode.toFile(pngPath, url, optionsPng);
      const svgString = await QRCode.toString(url, { type: 'svg', ...optionsSvg });
      fs.writeFileSync(svgPath, svgString, 'utf8');

      console.log(`  ✓ ${product.name} (${product.slug})`);
      console.log(`    ${url}`);
      console.log(`    → ${path.relative(process.cwd(), pngPath)}`);
      console.log(`    → ${path.relative(process.cwd(), svgPath)}`);
    } catch (err) {
      console.error(`  ✗ ${product.name}:`, err.message);
    }
  }

  console.log('\nConcluído.');
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
