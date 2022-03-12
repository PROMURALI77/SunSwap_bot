/*CMD
  command: /adderever@94123
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: Enter the ID of the user to whom you want to add Balance
  keyboard: 
  aliases: add balance, 🎉 saldo 🎉
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

