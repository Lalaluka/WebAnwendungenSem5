const frontendProvider = require('./frontendprovider');

function sendHtml(req,res){
    var sub = req.params.html;
    if (sub===""){
        res.sendFile('./src/public/html/index.html' , { root: '.' })
    }
    res.sendFile('./src/public/html/'+sub+'.html' , { root: '.' });

}

function getindex(req,res){
    res.sendFile('./src/public/html/index.html' , { root: '.' });
}

module.exports ={
    sendHtml,
    getindex
};