const router = require('express').Router();
const listController = require('./listController');
const entryController = require('./entryController');

router.get('/', function (request, response) {
    response.json({
        status: "API is working",
        message: "Welcome!",
    })
});

router.route('/lists')
    .get(listController.index)
    .post(listController.new)

router.route('/lists/:list_id')
    .get(listController.get)
    .patch(listController.update)
    .post(listController.new)
    .delete(listController.delete);

router.route('/lists/:list_id/entrys/:entry_id/')
    .patch(entryController.patch)
    .delete(entryController.delete);

//alle entries & neues entry erstellen
router.route('/lists/:list_id/entrys')
    .post(entryController.post)
    .get(entryController.get);

module.exports = router;