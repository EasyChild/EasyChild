process.env.NTBA_FIX_319 = 1;
process.env.NTBA_FIX_350 = 1;
const TelegramBot = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const fs = require('fs')
const dateNtime = require('date-and-time')
//const config = require('./config.js')
const data = require('./data.js')
const lib = require('./lib.js')
const web = require('./web.js')
require("dotenv").config();

let bot;
console.log(process.env.TOKEN)
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'production') {
  bot = new TelegramBot(process.env.TOKEN);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new TelegramBot(process.env.TOKEN, { polling: true });
}

bot.onText(/.+/, (msg, [source, match]) => {
    let logMess = `date: ${dateNtime.format(new Date(msg.date*1000), 'DD.MM.YYYY HH:mm:ss')}, first_name: ${msg.from.first_name}, last_name: ${msg.from.last_name}, username: ${msg.from.username}, chatId: ${msg.chat.id}, userId: ${msg.from.id}, text: '${msg.text}'\n`
    //fs.appendFileSync('easychild_bot.log', logMess)
    console.log(logMess)
    source = source.toUpperCase()
    switch(source) {
        case '/START':
            break
        case '/HELP':
            bot.sendMessage(msg.chat.id, data.en.HELP_MESS, {
                parse_mode: 'HTML'
            }) 
            break
        case '/NOW':
            let now = new Date()
            let sign = lib.getSignByDate(now)
            bot.sendMessage(msg.chat.id, lib.getSignStr(sign), {
                parse_mode: 'HTML'
            })        
            break
        case '/DATE':
            bot.sendMessage(msg.chat.id, data.en.DATE_FORMAT_MESS, {
                parse_mode: 'HTML'
            })
            break
        case '/SIGN':
        case data.en.BACK_BTN.name.toUpperCase():
        case data.en.BACK_BTN.text.toUpperCase():
        case data.ru.BACK_BTN.name.toUpperCase():
        case data.ru.BACK_BTN.text.toUpperCase():
            bot.sendMessage(msg.chat.id, data.en.ELEMENT_MESS, {
                parse_mode: 'HTML',
                reply_markup: { 
                    keyboard: data.elementsKb.en,
                    resize_keyboard: true
                }
            })
            break
        default:
            if (/^\d{2}-\d{2}$/.test(source)) {
                let date = dateNtime.parse('2017-'+source, 'YYYY-MM-DD')
                let mess
                if(!isNaN(date)) {
                    let sign = lib.getSignByDate(date)
                    mess = lib.getSignStr(sign)
                } else {
                    mess = data.en.WRONG_DATE
                }
                bot.sendMessage(msg.chat.id, mess, {
                    parse_mode: 'HTML'
                })
            } else {
                let reply_markup
                let mess
                let signsKb = lib.getKbByElement(source)
                if (signsKb !== undefined) {
                    mess = data.en.SIGN_MESS
                    reply_markup = {
                        keyboard: signsKb,
                        resize_keyboard: true
                    }
                } else {
                    let sign = lib.getSignByName(source)
                    if (sign !== undefined) {
                        mess = lib.getSignDatesStr(sign)
                        reply_markup = { 
                            remove_keyboard: true
                        }
                    } else {
                        mess = data.en.UNKNOWN_COMMAND
                    }
                }
                bot.sendMessage(msg.chat.id, mess, {
                    parse_mode: 'HTML',
                    reply_markup
                })
            }
    }
})

bot.on('polling_error', error => {
    //fs.appendFileSync('easychild_bot.log', error)
    console.err(error.code)
})

bot.on('webhook_error', error => {
    //fs.appendFileSync('easychild_bot.log', error)
    console.err(error.code)
})

web(bot)


