const List = require('../../schemas/listModel.js')

exports.patch = function (req,res) {

}

exports.delete = function (req,res) {

    //TODO: Diesen Scheiß schreiben

}

exports.post = function (req,res) {

}

exports.get = function (req,res) {
    List.findById(req.params.list_id, function (error, lists) {
        if (error) {
            res.json(error);
        } else {
            res.json({
                message: "send all requested entries back",
                data: lists.entries
            });
        }
    });
}