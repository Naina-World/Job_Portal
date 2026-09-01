import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.resolve(process.cwd(), 'uploads', 'resumes');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();
    const safeBaseName = path
      .basename(file.originalname, extension)
      .replace(/[^a-zA-Z0-9-_]/g, '-')
      .slice(0, 60);

    cb(null, `${Date.now()}-${safeBaseName}${extension}`);
  }
});

const fileFilter = (_req, file, cb) => {
  const allowedExtensions = ['.pdf', '.doc', '.docx'];
  const extension = path.extname(file.originalname).toLowerCase();

  if (allowedExtensions.includes(extension)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF, DOC and DOCX files are allowed.'));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

export default upload;
