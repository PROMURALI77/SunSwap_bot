/*CMD
  command: ree
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Commands
  answer: amount
  keyboard: 
  aliases: 
CMD*/

let amount = parseFloat(message)
let tgid = User.getProperty("id")
let reinvest = Libs.ResourcesLib.anotherUserRes("reinvest", tgid)
reinvest.add(parseFloat(amount))
Bot.sendMessage(
  "*Balance added* \n👤 User: " + tgid + "\n💰 Amount:" + amount
)

