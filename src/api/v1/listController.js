const List = require('../../schemas/listModel.js')

exports.index = function (req, res) {
    List.get(function (error, lists) {
        if (error) {
            res.json(error);
        } else {
            res.json({
                message: "send all lists",
                data: lists
            });
        }
    })
}

exports.new = function (req, res) {
    let list = new List();
    list.entities = [];

    list.owner = req.body.owner;
    list.creationDate = Date.now();



    if(!Array.isArray(req.body.entities)){
        req.body.entities = [req.body.entities];
    }

    req.body.entities.forEach(function (entity) {
        let ent = JSON.parse(entity);

        ent.creationDate = Date.now();
        list.entries.push(ent);
        console.log(ent)
    });

    console.log(list);
    //TODO: Rest implementieren
    list.save(function (error) {
        if (error) {
            res.json(error);
        } else {
            res.json({

                message: "create new list",
                data: list
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
                message: "send all requested List back",
                data: lists
            });
        }
    });
}

exports.update = function (req, res) {
    List.findByIdAndUpdate(req.params.list_id, req.body, {new: true}, function (error, lists) {
        if (error) {
            res.json(error);
        } else {
            res.json({
                message: "send all requested List back",
                data: lists
            });
        }
    });
}

exports.delete= function (req,res) {
    //TODO: 404 zurückgeben
    List.findByIdAndDelete(req.params.list_id, req.body, function (error) {
        if (error) {
            res.json(error);
        } else {
            res.json({
                message: "Deleted List",
            });
        }
    });
}