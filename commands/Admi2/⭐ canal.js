/*CMD
  command: ⭐ canal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admi2
  answer: send msg to channel.. 
  keyboard: 
  aliases: 
CMD*/

var admin = user.telegramid

if (admin == 5240032649) {
  let msg = message
  Api.sendMessage({
    chat_id: "@sunswappay",
    text: msg,
    parse_mode: "Markdown",
    disable_web_page_preview: true
  })
} else {
  Bot.sendMessage("You are not Admin!")
}

