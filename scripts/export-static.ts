// Script kiểm tra danh sách tài nguyên tĩnh trong thư mục public/ của dự án
import fs from "fs";
import path from "path";

const REQUIRED_ASSETS = [
  "public/documents/CEFR_Vietnamese_6_Levels.pdf",
  "public/documents/LMS_Vietnamese_Learning_Guide_EN.docx",
  "public/images/teacher/thu-huyen-portrait.jpg",
  "public/images/teacher/huyen-cultural-photo.jpg",
  "public/images/teacher/huyen-hannah-share-preview.png",
  "public/images/students/students-at-dinner-web.jpg",
  "public/images/students/students-group-photo-web.jpg",
  "public/images/students/students-cafe-study-web.jpg",
  "public/images/students/students-cafe-community-web.jpg",
  "public/images/students/students-cafe-pair-web.jpg",
  "public/images/students/students-cafe-group-web.jpg",
];

function verifyPublicAssets() {
  const rootDir = process.cwd();
  const missing: string[] = [];

  for (const relPath of REQUIRED_ASSETS) {
    const fullPath = path.join(rootDir, relPath);
    if (!fs.existsSync(fullPath)) {
      missing.push(relPath);
    }
  }

  if (missing.length > 0) {
    console.error("Missing required public assets:", missing);
    process.exit(1);
  }

  console.log("All required public assets are present.");
}

verifyPublicAssets();

