import dotenv from "dotenv";
import express from "express";
import http from "http";
import https from "https";
import fs from "fs";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import errorHandlerMiddleware from "./middlewares/error-handler.middleware.js";
import productsRouter from "./routers/products.router.js";
import usersRouter from "./routers/users.router.js";
import authRouter from "./routers/auth.router.js";
import bookstoresRouter from "./routers/bookstore.roter.js";
import reviewRouter from "./routers/reviews.router.js";
import customerOrderRouter from "./routers/customer.order.router.js";
import searchRouter from "./routers/search.router.js";
import configurePassport from "../src/passport/index.js";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

dotenv.config();

// CORS 설정
const corsOptions = {
    origin: ["http://localhost:5500", "http://127.0.0.1:5500"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Passport 설정
configurePassport(app);

// 라우트 정의
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/review", reviewRouter);
app.use("/api/stores", bookstoresRouter);
app.use("/api/order", customerOrderRouter);
app.use("/api/search", searchRouter);

// 오류 처리 미들웨어
app.use(errorHandlerMiddleware);

// 정적 파일 제공
const staticPath = path.join(__dirname, "assets");
app.use("/assets", express.static(staticPath));
console.log(staticPath);

// 포트 정의
const PORT = process.env.PORT || 3001;
const HTTPS_PORT = process.env.HTTPS_PORT || 3002;

// HTTPS 옵션
const httpsOptions = {
    key: fs.readFileSync(process.env.HTTPS_KEY),
    cert: fs.readFileSync(process.env.HTTPS_CERT),
};

// HTTP 및 HTTPS 서버 생성
const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

// 지정된 포트에서 수신 대기
httpServer.listen(PORT, () => {
    console.log(`HTTP 서버가 포트 ${PORT}에서 실행 중입니다.`);
});

httpsServer.listen(HTTPS_PORT, () => {
    console.log(`HTTPS 서버가 포트 ${HTTPS_PORT}에서 실행 중입니다.`);
});

export { app };