const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "../out");

// Файлы которые должны быть в подпапках с index.html
const pathMappings = [
  { source: "catalog.html", dest: "catalog/index.html" },
  { source: "about.html", dest: "about/index.html" },
  { source: "_not-found.html", dest: "_not-found/index.html" },
];

console.log("[post-export] Исправление структуры экспорта...");

pathMappings.forEach(({ source, dest }) => {
  const sourcePath = path.join(outDir, source);
  const destPath = path.join(outDir, dest);
  const destDir = path.dirname(destPath);

  // Проверяем, существует ли исходный файл
  if (!fs.existsSync(sourcePath)) {
    console.log(`⚠️  ${source} не найден`);
    return;
  }

  // Создаём директорию если её нет
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`📁 Создана папка: ${destDir}`);
  }

  // Копируем файл и удаляем оригинал
  try {
    fs.copyFileSync(sourcePath, destPath);
    fs.unlinkSync(sourcePath);
    console.log(`✓ ${source} → ${dest}`);
  } catch (error) {
    console.error(`✗ Ошибка при копировании ${source}:`, error.message);
  }
});

const catalogDir = path.join(outDir, "catalog");

if (fs.existsSync(catalogDir)) {
  for (const entry of fs.readdirSync(catalogDir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".html") || entry.name === "index.html") {
      continue;
    }

    const sourcePath = path.join(catalogDir, entry.name);
    const destPath = path.join(
      catalogDir,
      path.basename(entry.name, ".html"),
      "index.html",
    );

    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.copyFileSync(sourcePath, destPath);
    fs.unlinkSync(sourcePath);
    console.log(`[post-export] ${entry.name} → ${path.dirname(destPath)}/index.html`);
  }
}

console.log("[post-export] Готово!");
