/*CMD
  command: /itsmypasssssssbsjdjdvsjsjsvdhiddjlabacs
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: š Stop, this menu is only for administration, enter your password :
  keyboard: 
  aliases: 
CMD*/

if (message == "Iphone12+") {
  Bot.sendKeyboard(
    "š Balance š,š” Channel š”,\nš² Message š²,ā­ Verificar ā­,\nLogin\nBack To Menu",
    "Welcome š"
  )
} else {
  Bot.sendMessage("š incorrect password")
}

