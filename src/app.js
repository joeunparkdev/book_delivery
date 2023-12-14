import dotenv from "dotenv";
dotenv.config();

import { configurePassport } from "../src/passport/index.js";
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
import searchRouter from "./routers/search.router.js";

const app = express();
configurePassport(app);

// CORS 설정
const corsOptions = {
  origin: "http://localhost:8080",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/review", reviewRouter);
app.use("/api/stores", bookstoresRouter);
app.use("/api/search", searchRouter);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3001;
const HTTPS_PORT = process.env.HTTPS_PORT || 3002;

const httpsOptions = {
  key: fs.readFileSync(process.env.HTTPS_KEY),
  cert: fs.readFileSync(process.env.HTTPS_CERT),
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

httpServer.listen(PORT, () => {
  console.log(`HTTP Server is running on port ${PORT}`);
});

httpsServer.listen(HTTPS_PORT, () => {
  console.log(`HTTPS Server is running on port ${HTTPS_PORT}`);
});

export { app };
