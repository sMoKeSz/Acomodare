/**
 * Created by Iulian.Pelin on 11/28/2014.
 */

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();
router.use(function(req, res, next) {
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'asdasddddddddddddd welcome to our api!' });
});
var Produs     = require('./models/produs');
router.route('/produse')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var produs = new Produs(); 		// create a new instance of the Bear model
        produs.name = req.body.name;  // set the bears name (comes from the request)
        produs.description = req.body.description;
        produs.status=1;
        produs.varEdit=true;
        produs.strike=0;
        // save the bear and check for errors
        produs.save(function(err) {
            if (err)
                res.send(err);

           res.json({ message: 'Bear created!' });
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

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        Produs.findById(req.params.produs_id, function(err, produs) {
            if (err)
                res.send(err);
            res.json(produs);
        });
    })
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Produs.findById(req.params.produs_id, function(err, produs) {

            if (err)
                res.send(err);

            produs.name = req.body.name; 	// update the bears info
            produs.description = req.body.description;
            // save the bear
            produs.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })
    .delete(function(req, res) {
        Produs.remove({
            _id: req.params.produs_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');


