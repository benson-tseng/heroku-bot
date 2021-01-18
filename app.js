var linebot = require("linebot");

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: "1655587693",
  channelSecret: "aed272633b18102da0f290de4068b562",
  channelAccessToken: "qu3XJO7TA4EBU7897kZPfiKOiBROLVyOVorhHZSuBylV0bhUp3HZuYMOqaKGAIWlG5vSuMkMcv82APIhzn+5U62jQCG/j65Q7taM1cftWLQe665PYilXxjU9W0jwZkxIhCPqQgCq89J6TGqNuyo3jAdB04t89/1O/w1cDnyilFU=",
});

// 當有人傳送訊息給Bot時
bot.on("message", function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 準備要回傳的內容
  var replyMsg = `Hello你剛才說的是:${event.message.text}`;
  // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
  event
    .reply(replyMsg)
    .then(function (data) {
      // 當訊息成功回傳後的處理
    })
    .catch(function (error) {
      // 當訊息回傳失敗後的處理
    });
});

// Bot所監聽的webhook路徑與port
bot.listen("/linewebhook", 3000, function () {
  console.log("[BOT已準備就緒]");
});
