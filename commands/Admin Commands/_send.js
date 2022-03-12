/*CMD
  command: /send
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: Send The message you want to send to your channel 📡
  keyboard: 
  aliases: send message in channel, 📡 channel 📡
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

