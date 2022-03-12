/*CMD
  command: /getuserbalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: Check the current balance of any user in Your Bot Send me their ID :
  keyboard: 
  aliases: get balance, ⭐ verificar ⭐
CMD*/

var admin = user.telegramid

if (admin == 5240032649) {
  let msg = message
  User.setProperty("id", msg, "integer")
  var tgid = User.getProperty("id")
  var res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
  Bot.sendMessage(message + " Has `" + res.value().toFixed(8) + "`")
} else {
  Bot.sendMessage("😜 Respeta!! No eres admi XD")
}

