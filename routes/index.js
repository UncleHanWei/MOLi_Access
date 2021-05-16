var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'MOLi Access' });
});

router.get('/addMember', function (req, res, next) {
  res.render('addMember', { title: 'MOLi Access' })
})

router.post('/addMember', function (req, res, next) {
  let formData = req.body;
  let updateFile = (formData) => {
    return new Promise((rs, rj) => {
      fs.readFile('memberList.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
          console.log(err);
        } else {
          let obj = JSON.parse(data); //now it an object
          let newData = JSON.parse(`{"${formData['cid']}": {"name": "${formData['name']}","sid": "${formData['sid']}","status": "false"}}`)
          obj = Object.assign(obj, newData)
          json = JSON.stringify(obj, null, 2); //convert it back to json
          fs.writeFile('memberList.json', json, 'utf8', (err) => {
            if (err) {
              console.log('Write error');
              rj();
              return;
            } else {
              console.log('Write success');
              rs();
            }
          });
        }
      });
    })
  }
  updateFile(formData).then((rs) => {
    res.send('OK');
  }).catch(rj => {
    res.send('Bad Request');
  })
})

module.exports = router;
