const List = require('../../schemas/listModel.js')

exports.patch = function (req, res) {
    //TODO: Diesen Scheiß schreiben
}

exports.delete = function (req, res) {
    //TODO: Diesen Scheiß schreiben
}

exports.post = function (req, res) {
    List.findById(req.params.list_id, function (error, lists) {
        if (error) {
            res.json(error);
        } else {

            if (!Array.isArray(req.body.entities)) {
                req.body.entities = [req.body.entities];
            }

            req.body.entities.forEach(function (entity) {

                let ent = JSON.parse(entity);

                ent.creationDate = Date.now();
                lists.entries.push(ent);
            });

            lists.save(function (error) {
                if (error) {
                    res.json(error);
                } else {
                    res.json({

                        message: "Added Entities",
                        data: lists
                    });
                }
            });
        }
    });
}

exports.get = function (req, res) {
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