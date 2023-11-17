const express = require("express");
const productsRouter = require("./routers/products.router.js");
const usersRouter = require("./routers/users.router.js");
const authRouter = require("./routers/auth.router.js");
const app = express();

app.use(express.json()); //body parser
app.use(express.urlencoded({ extended: false })); //FORM 처리

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`서버가 요청을 받을 준비가 됐어요. 포트: ${PORT}`);
});
