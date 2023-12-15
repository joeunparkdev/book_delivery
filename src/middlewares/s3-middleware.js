import multer from "multer";
import aws from "aws-sdk";
import multerS3 from "multer-s3";

const s3MiddleWare = (req, res, next) => {
  const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: process.env.REGION,
  });

  // Multer 및 Multer-S3 설정
  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: process.env.BUCKET,
      acl: "public-read",
      key: function (req, file, cb) {
        cb(null, "uploads/" + Date.now() + "-" + file.originalname);
      },
    }),
  }).single("image");

  upload(req, res, (err) => {
    if (err) {
      throw new Error("이미지 업로드 실패");
    }

    next(); // 다음 미들웨어로 이동
  });
};

export default s3MiddleWare;
