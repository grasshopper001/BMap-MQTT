var express = require('express');
var router = express.Router();
var request=require("request");

//get destination from mqtt
var msg="上海人民广场";
var mqtt=require("mqtt");
var client=mqtt.connect("mqtt://47.96.26.134",{
     username:"admin",
     password:"admin"
});

client.on('connect', function () {
  client.subscribe("traffic", function (err) {
    if (!err) {
      console.log("mqtt connected");
      //client.publish("traffic", 'Hello mqtt');
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  //console.log(message.toString());
  msg=message.toString();
  //client.end()
})
//end of MQTT





/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(msg);
  res.render('index', { username: "admin",destination: msg });
});

module.exports = router;
