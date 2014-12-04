/**
 * Created by Iulian.Pelin on 11/28/2014.
 */

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var port = process.env.PORT || 8080;
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/mydb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var Produs     = require('./models/produs');
router.route('/produse')

    .post(function(req, res) {

        var produs = new Produs();
        produs.name = req.body.name;
        produs.description = req.body.description;
        produs.status=1;
        produs.varEdit=true;
        produs.strike=0;


        produs.save(function(err) {
            if (err)
                res.send(err);

            Produs.find(function(err, produse) {
                if (err)
                    res.send(err);

                res.json(produse);
            })
        });

    })
    .get(function(req, res) {
        Produs.find(function(err, produse) {
            if (err)
                res.send(err);

            res.json(produse);
        });
    });

router.route('/produs/:produs_id')

    .get(function(req, res) {
        Produs.findById(req.params.produs_id, function(err, produs) {
            if (err)
                res.send(err);
            res.json(produs);
        });
    })
    .put(function(req, res) {


        Produs.findById(req.params.produs_id, function(err, produs) {

            if (err)
                res.send(err);

            produs.name = req.body.name;
            produs.description = req.body.description;

            produs.save(function(err) {
                if (err)
                    res.send(err);

                Produs.find(function(err, produse) {
                    if (err)
                        res.send(err);

                    res.json(produse);
                });
            });

        });
    })
    .delete(function(req, res) {
        Produs.remove({
            _id: req.params.produs_id
        }, function(err) {
            if (err)
                res.send(err);

            Produs.find(function(err, produse) {
                if (err)
                    res.send(err);

                res.json(produse);
            });
        });
    });
app.use('/api', router);

app.listen(port);
console.log("Server On!")




