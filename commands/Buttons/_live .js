/*CMD
  command: /live 
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 📶 live
CMD*/

                                                                                                  

var result = JSON.parse(data.content);

var TRX = result.market_data.current_price.usd
var id = "murali32051" 
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
Api.sendPhoto({
photo:"https://t.me/sunswappay",
caption:"📈 *Live TRX price:* \n`1 TRX` = `" + TRX.toFixed(8) + "$`" + "\n\n" + "*🕓 Server Time:*" +"\n`" +time+"`" + "\n\n" + "🌐[ @"+id+"]" + "\n\n🛠 Admin: @murali32051",parse_mode : "Markdown" , disable_web_page_preview: true
});
