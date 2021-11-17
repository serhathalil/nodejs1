require("@babel/register");


const Koa = require('koa');
var Router = require('koa-router');
const app = new Koa();
var router = new Router();


router.get("/", async (ctx, next) => {
  console.log("match /");
  await next();
  ctx.body = "<h1>INDEX SAYFASINA HOSGELDINIZ!</h1>";
});
router.get("/about", async (ctx, next) => {
  console.log("match about");
  await next();
  ctx.body = "<h1>HAKKIMIZDA SAYFASINA HOSGELDINIZ!</h1>";
});
router.get("/contact", async (ctx, next) => {
  console.log("match contact");
  await next();
  ctx.body = "<h1>ILETISIM SAYFASINA HOSGELDINIZ!</h1>";
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000)