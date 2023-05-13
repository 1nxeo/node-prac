const express = require("express");
const app = express();
const port = 3000;
const goodsRouter = require("./routes/goods");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// localhost:3000/api -> goodsRouter
app.use("/api", [goodsRouter]);

// app.use는 app.listen 위에 있어야 합니당.

// request log middleware
app.use((req, res, next) => {
  console.log("Request URL:", req.originalUrl, " - ", new Date());
  next();
});

// app.use(Middleware) => 모든 요청에서 미들웨어 실행
// app.use('/api', Middleware) => /api로 시작하는 요청에서 미들웨어 실행
// app.post('/api', Middleware) => /api로 시작하는 POST요청에서 미들웨어 실행

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
