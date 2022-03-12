/*CMD
  command: J
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin panel
  answer: Send the amount 
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(message)
let tgid = User.getProperty("id")
let reinvest = Libs.ResourcesLib.anotherUserRes("reinvest", tgid)
reinvest.add(parseFloat(amount))
Bot.sendMessage(
  "*Balance changed* \n👤 User: " + tgid + "\n💰 Amount:" + amount
)

