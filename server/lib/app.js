const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const Router = require('koa-router');
const router = new Router();
const superagent = require('superagent');
const cors = require('kcors');

router
  .get('/quotes', async (ctx, next) => {
    ctx.body = await superagent
      .get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
      .accept('json')
      .then(res => {
        return res.body;
      })
      .catch(err => {
        console.log('catchin');
        const fixedJSON = JSON.parse(err.rawResponse.replace(/\\/g, ''));
        return fixedJSON;
      });
  });

app.use(logger());
app.use(cors());
app.use(router.routes());

module.exports = app;
