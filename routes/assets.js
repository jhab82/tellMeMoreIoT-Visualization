var express = require('express');
var router = express.Router();

var Assets = require("../models/Assets.js");
const {BigQuery} = require('@google-cloud/bigquery');
const projectId = 'siemens-internet-of-things';

const bigquery = new BigQuery({
    projectId: projectId,
  });

//const sqlQuery ="SELECT id, time, pm2p5 FROM `siemens-internet-of-things.tmmiot_dataset.tmmiot_table_v4` WHERE time > 1544094748073 AND id=\"tmmiot-device-1\" ORDER BY time ASC LIMIT 10"
var sqlQuery = "SELECT id, time, pm2p5 FROM `siemens-internet-of-things.tmmiot_dataset.tmmiot_table_v4` WHERE  id=\"tmmiot-device-1\" ORDER BY time DESC LIMIT 1"

/* GET users listing. */
router.get('/:number', function(req, res, next) {
console.log(req.params.number + " - " + isNaN(req.params.number));
if (req.params.number >= 1 && isNaN(req.params.number) === false)
 {
  sqlQuery ="SELECT id, time, pm2p5 FROM `siemens-internet-of-things.tmmiot_dataset.tmmiot_table_v4` WHERE  id=\"tmmiot-device-1\" ORDER BY time DESC LIMIT " + req.params.number;

}

const options = {
query: sqlQuery,
useLegasySql: false,
};

bigquery
    .query(options)
    .then(results => {
      const rows = results[0];
//console.log(rows);
      res.json(rows);
    })
    .catch(err => {
      console.error('ERROR:', err);
    });

});

router.post("/", function(req, res, next) {

});


module.exports = router;
