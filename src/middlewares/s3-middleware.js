import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
import multerS3 from "multer-s3";

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  region: process.env.REGION,
});

// Multer 및 Multer-S3 설정
export const s3Middleware = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    metadata: function (req, file, cb) {
      console.log("metadata", { req, file });
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const imagePath = "uploads/" + Date.now() + "-" + file.originalname;
      cb(null, imagePath);
    },
  }),
});
