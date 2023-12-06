import express from "express";
import cookieParser from "cookie-parser";
import errorHandlerMiddleware from './middlewares/error-handler.middleware.js'; 
import productsRouter from "./routers/products.router.js";
import usersRouter from "./routers/users.router.js";
import authRouter from "./routers/auth.router.js";

//TODO: HTTP를 HTTPS로 업그레이드 하기
const app = express();

app.use(express.json()); // body parser
app.use(express.urlencoded({ extended: false })); // FORM 처리
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`서버가 요청을 받을 준비가 됐어요. 포트: ${PORT}`);
});

export { app };
