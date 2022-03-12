/*CMD
  command: /itsmypasssssssbsjdjdvsjsjsvdhiddjlabacs
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: 📛 Stop, this menu is only for administration, enter your password :
  keyboard: 
  aliases: 
CMD*/

if (message == "Iphone12+") {
  Bot.sendKeyboard(
    "🎉 Balance 🎉,📡 Channel 📡,\n📲 Message 📲,⭐ Verificar ⭐,\nLogin\nBack To Menu",
    "Welcome 🎉"
  )
} else {
  Bot.sendMessage("🙄 incorrect password")
}

