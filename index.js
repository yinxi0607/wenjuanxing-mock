 const Koa = require('koa');
const Router = require('koa-router');
const mockList = require('./mock/index.js');
const app = new Koa();
const router = new Router();
const port = 3001;

async function getRes(fn){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(fn())
        },1000)
    })
}

mockList.forEach(item => {
    const {url,method,response} = item
    router[method](url,async ctx => {
        const  res = await getRes(response) //模拟网络请求的加载状态
        ctx.body = res
    })
}
);

app.use(router.routes());

app.listen(port, () => {
    console.log(`mock server is running on port111 ${port}`);
})