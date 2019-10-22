const router = require('express').Router();
const ressourceProvider = require('./frontendprovider.js');
const publicProvider = require('./publicprovider.js');

router.get('/:html',ressourceProvider.sendHtml);
router.get('/',ressourceProvider.getindex);
router.get('/image/:image',publicProvider.sendpicture);
router.get('/css/:css',publicProvider.sendcss);
router.get('/fonts/:fonts',publicProvider.sendfont);
router.get('/js/:js',publicProvider.sendjs);

module.exports = router;