/*CMD
  command: /sendtoall
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: 📲 Send the Message you want to send to all your users
  keyboard: 
  aliases: broadcast message, 📲 message 📲
CMD*/

var admin = user.telegramid

if (admin == 5240032649) {
  let msg = message
  Bot.sendMessageToAllPrivateChats(msg)
} else {
  Bot.sendMessage("You are not Admin!")
}

