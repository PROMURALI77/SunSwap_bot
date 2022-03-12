/*CMD
  command: ⭐ bot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admi2
  answer: Send msg to bot users 
  keyboard: 📲 panel
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 5240032649) {
  let msg = message
  Bot.sendMessageToAllPrivateChats(msg)
} else {
  Bot.sendMessage("You are not Admin!")
}

