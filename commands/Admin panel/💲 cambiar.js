/*CMD
  command: 💲 change
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: ID del usuario 
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 5240032649) {
  let msg = message
  User.setProperty("id", msg, "integer")
  {
    Bot.runCommand("adder")
  }
} else {
  Bot.sendMessage("You are not admin!")
}

