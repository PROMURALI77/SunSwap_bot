/*CMD
  command: Task-On-Joining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var join = [[{ title: "Joined", command: "/joined" }]]
Bot.sendKeyboard("✅ i have joined", "💡 To use this bot you must join")
Bot.sendInlineKeyboard(
  join,
  "To Our payment proof channel: @sunswappay\n\n@murali32051",
  {
    disable_web_page_preview: true
  }
)

