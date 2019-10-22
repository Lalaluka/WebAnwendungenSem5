const ressourceProvider = require('./publicprovider');

function sendpicture(req,res){
    var sub = req.params.image;
    const file = `./src/public/img/${sub}`;
    res.download(file);
    res.status(200);
}

function sendcss(req,res){
    var sub = req.params.css;
    res.sendFile(`./src/public/css/${sub}`, { root: '.' });
    res.status(200);
}

function sendfont(req,res){
    var sub = req.params.fonts;
    res.sendFile(`./src/public/fonts/${sub}`, { root: '.' });
    res.status(200);
}

function sendjs(req,res){
    var sub = req.params.js;
    res.sendFile(`./src/public/js/${sub}`, { root: '.' });
    res.status(200);
}

module.exports ={
    sendpicture,
    sendcss,
    sendfont,
    sendjs
};
