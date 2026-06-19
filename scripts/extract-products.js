const fs = require("fs");
const path = require("path");

const INPUT = path.resolve(__dirname, "../out/catalog.txt");
const OUTPUT = path.resolve(
  __dirname,
  "../src/entities/product/model/products.data.json"
);

const raw = fs.readFileSync(INPUT, "utf-8");

const marker = '"products":';
const startIdx = raw.indexOf(marker);
if (startIdx === -1) {
  console.error("Could not find 'products' marker in RSC payload.");
  process.exit(1);
}

let arrStart = startIdx + marker.length;
while (arrStart < raw.length && raw[arrStart] !== "[") arrStart++;
if (arrStart >= raw.length) {
  console.error("Could not find opening bracket of products array.");
  process.exit(1);
}

let depth = 0;
let inString = false;
let escape = false;
let arrEnd = -1;
for (let i = arrStart; i < raw.length; i++) {
  const ch = raw[i];
  if (escape) {
    escape = false;
    continue;
  }
  if (ch === "\\") {
    escape = true;
    continue;
  }
  if (ch === '"') {
    inString = !inString;
    continue;
  }
  if (inString) continue;
  if (ch === "[") depth++;
  if (ch === "]") {
    depth--;
    if (depth === 0) {
      arrEnd = i;
      break;
    }
  }
}

if (arrEnd === -1) {
  console.error("Could not find closing bracket of products array.");
  process.exit(1);
}

let arrStr = raw.substring(arrStart, arrEnd + 1);

arrStr = arrStr.replace(/"(\$D[^"]*?)"/g, (_, dateStr) => {
  const iso = dateStr.replace(/^\$D/, "");
  return `"${iso}"`;
});

let products;
try {
  products = JSON.parse(arrStr);
} catch (e) {
  console.error("Failed to parse products JSON:", e.message);
  process.exit(1);
}

const cleaned = products.map((p) => ({
  id: String(p.id),
  category: String(p.category),
  brand: String(p.brand),
  series: String(p.series),
  model: String(p.model),
  power: String(p.power),
  energyClass: String(p.energyClass),
  price: Number(p.price),
  features: Array.isArray(p.features) ? p.features.map(String) : [],
  imageUrl: p.imageUrl ?? null,
  description: p.description ?? null,
  createdAt: typeof p.createdAt === "string" ? p.createdAt : String(p.createdAt),
  name: String(p.name),
  area: String(p.area),
}));

fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
fs.writeFileSync(OUTPUT, JSON.stringify(cleaned, null, 2) + "\n", "utf-8");

console.log(`Extracted ${cleaned.length} products → ${OUTPUT}`);
console.log("\nFirst 2 products:");
console.log(JSON.stringify(cleaned.slice(0, 2), null, 2));
