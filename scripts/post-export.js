const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "../out");

// Файлы которые должны быть в подпапках с index.html
const pathMappings = [
  { source: "catalog.html", dest: "catalog/index.html" },
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

console.log("[post-export] Готово!");
