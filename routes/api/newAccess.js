var express = require('express');
var router = express.Router();
require('dotenv').config();

let fs = require('fs');

function checkArgv(formData) {
  // 如果傳來的參數數量不對且沒有 id 這個 key
  if (!(0 < Object.keys(formData).length < 2 && "id" in formData)) {
    return false;
  } else {
    // // 正規表示檢查是否符合 id 格式
    let check = new RegExp(/^[0-9]{10}$/);
    return check.test(formData.id);
  }
}

router.get('/', function(req, res, next) {
  let memberList = JSON.parse(fs.readFileSync('memberList.json'));
  let channel_ID = process.env.CHANNEL_ID;
  let formData = req.query;
  console.log(formData);
  if(!checkArgv(formData)) {
    console.log('check failed');
    res.send(400);
    return;
  } else {
    formData = formData['id'];
    console.log(formData);
    let message;
    // 檢查該使用者是否有加入資料表
    if(!(formData in memberList)) {
      message = `未登記卡號 ${formData} 進入 MOLi`;
      req.app.get('bot').sendMessage(channel_ID, message);
      res.send(200);
    } else {
      message = `${memberList[formData].name} 進入 MOLi`;
      req.app.get('bot').sendMessage(channel_ID, message);
      res.send(200);

    }
  }
});

module.exports = router;
