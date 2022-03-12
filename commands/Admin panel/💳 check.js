/*CMD
  command: 💳 check
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: Send id 
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 5240032649) {
  let msg = message
  User.setProperty("id", msg, "integer")
  var tgid = User.getProperty("id")
  var reinvest = Libs.ResourcesLib.anotherUserRes("reinvest", tgid)
  Bot.sendMessage(message + " Has `" + reinvest.value().toFixed(8) + "`")
} else {
  Bot.sendMessage("😜 Respect!!  You are not an admin XD")
}

