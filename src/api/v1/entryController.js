const List = require('../../schemas/listModel.js');

exports.patch = function (req, res) {
    //TODO: Diesen Scheiﬂ schreiben
    res.status(501);
    res.json({
        message: "Not implemented yet"
    });
};


///lists/:list_id/entries/:entry_id/
exports.delete = async function (req, res) {
    await List.findOneAndUpdate(
        {_id: req.params.list_id},
        {$pull: {entries: {_id: req.params.entry_id}}},
        {new: true},
        function (err) {
            if (err) {
                console.log(err)
            }
        }
    ).exec();

    res.status(200);
    res.json({
        message: "Try to Delete Entity"
    });
};

exports.post = function (req, res) {
    List.findById(req.params.list_id, function (error, lists) {
        if (error) {
            res.status(404);
            res.json(error);
        } else {
            if (req.body.entities) {
                if (!Array.isArray(req.body.entities)) {
                    req.body.entities = [req.body.entities];
                }

                req.body.entities.forEach(function (entity) {
                    entity.creationDate = Date.now();
                    lists.entries.push(entity);
                });

                lists.save(function (error) {
                    if (error) {
                        res.json(error);
                        res.status(500);
                    } else {
                        res.json({

                            message: "Added Entities",
                            data: lists
                        });
                    }
                });
            } else {
                res.status('400');
                res.json({
                    message: "Error"
                })
            }
        }
    });
};

exports.get = function (req, res) {
    List.findById(req.params.list_id, function (error, lists) {
        if (error) {
            res.status(404);
            res.json(error);
        } else {
            res.json({
                message: "send all requested entries back",
                data: lists.entries
            });
        }
    });
};