import express from 'express';
import  React  from 'react';
import App from '../components/index.js';
import ReactDOMServer from 'react-dom/server';
const  router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    const html=ReactDOMServer.renderToStaticMarkup(<App />);
    res.render('index', { title:"服务端渲染",content: html });
});

router.get('/api/getLeftContent', function(req, res, next) {
	res.send("左边tab内容");
});
router.get('/api/getRightContent', function(req, res, next) {
	res.send("右边tab内容----");
});
module.exports = router;