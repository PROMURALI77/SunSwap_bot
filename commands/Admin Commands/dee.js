/*CMD
  command: dee
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: 
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(message)
let tgid = User.getProperty("id")
let deposit = Libs.ResourcesLib.anotherUserRes("deposit", tgid)
deposit.add(parseFloat(amount))
Bot.sendMessage(
  "*Balance added* \n👤 User: " + tgid + "\n💰 Amount:" + amount
)

