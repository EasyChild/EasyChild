const sprintf = require('sprintf-js').sprintf
const dateNtime = require('date-and-time')
const data = require('./data.js')

function getSignByDate(date) {
    return data.signs.find(function(sign) {
        let sDate = sign.startDate
        let eDate = sign.endDate
        checkDate = new Date(2017, date.getMonth(), date.getDate())  
        return checkDate >= sDate && checkDate <= eDate
    })
}

function getSignByName(name) {
    return data.signs.find(function(sign) {
        if(sign.en.name !== undefined) {
            return new RegExp(`^${sign.en.name.toUpperCase()}|^${sign.ru.name.toUpperCase()}`).test(name) /*|| sign.en.text.toUpperCase() === upName*/
        } else {
            return false
        }
    })
}

function getKbByElement(name) {
    let kb = data.signs.filter(function (sign) {
        if (sign.element !== undefined) {
            return new RegExp(`^${sign.element.en.name.toUpperCase()}|^${sign.element.ru.name.toUpperCase()}`).test(name) /*|| sign.element.en.text.toUpperCase() === upName*/
        } else {
            return false
        }
    })
    .map(function (sign) {
        return sign.en.text
    })
    if (kb.length > 0) {
        kb.push(data.en.BACK_BTN.text)
        return [[kb[0], kb[1]], [kb[2], kb[3]]]
    } else {
        return undefined
    }
}

function getSignStr(sign) {
    if (sign.element !== undefined) {
        return sprintf(data.en.SINGLE_SIGN_MESS, sign.en.text, sign.element.en.text)
    } else {
        return sprintf(data.en.DOUBLE_SIGN_MESS, sign.en.text)
    }
}

function getSignDatesStr(sign) {
    return sprintf(data.en.SIGN_DATES_MESS, sign.en.text, dateNtime.format(sign.startDate, 'MMMM DD'), dateNtime.format(sign.endDate, 'MMMM DD'))
}

module.exports = {
    getSignByDate,
    getSignByName,
    getSignStr,
    getSignDatesStr,
    getKbByElement
}