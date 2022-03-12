/*CMD
  command: ➕ cambiar
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: Send the ID to change the amount of the active investment
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 5240032649) {
  let msg = message
  User.setProperty("id", msg, "integer")
  {
    Bot.runCommand("JJ")
  }
} else {
  Bot.sendMessage("You are not admin!")
}

