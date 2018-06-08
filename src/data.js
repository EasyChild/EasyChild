const elements = {
    WATER: {
        en: {
            name: 'Water',
            text: 'Water 💧'
        },
        ru: {
            name: 'Вода',
            text: 'Вода 💧'
        }
    },
    FIRE: {
        en: {
            name: 'Fire',
            text: 'Fire 🔥'
        },
        ru: {
            name: 'Огонь',
            text: 'Огонь 🔥'
        }
    },
    EARTH: {
        en: {
            name: 'Earth',
            text: 'Earth ⛰'
        },
        ru: {
            name: 'Земля',
            text: 'Земля ⛰'
        }
    },
    AIR: {
        en: {
            name: 'Air',
            text: 'Air 💨'
        },
        ru: {
            name: 'Воздух',
            text: 'Воздух 💨'
        }
    }
}

const en = {
    SINGLE_SIGN_MESS: 'The Child will be born under the sign of %s\nElement – %s',
    DOUBLE_SIGN_MESS: '⚠️ Term of birth is possible at the junction of the signs %s',
    SIGN_DATES_MESS: 'For the birth of a person under the sign of %s, it should be conceived in the period\n<b>%s – %s</b>',
    UNKNOWN_COMMAND: 'Unknown command /help',
    DATE_FORMAT_MESS: 'Enter the date of conception\nin <b>MM-DD</b> format\nFor example: <b>07-17</b>',
    ELEMENT_MESS: 'Select the element of the astrological sign or tell its name immediately', 
    SIGN_MESS: 'Select the astrological sign or tell its name immediately',
    WRONG_DATE: 'Incorrect date',
    HELP_MESS: '📌 At any time you can…\n\nEnter the command /now or enter the /date of conception in <b>MM-DD</b> format and get the astrological sign of the future child.\n\nSelect the astrological /sign (or tell its name immediately) and get the dates in which you need to conceive.\n\nThe command /language is temporarily unavailable. Но бот уже понимает русские названия знаков зодиака.',
    BACK_BTN: {
        name: 'Back',
        text: 'Back 🔙'
    }
}

const ru = {
    BACK_BTN: {
        name: 'Назад',
        text: 'Назад 🔙'
    }
}

const signs = [
    /*PISCES_ARIES:*/
    {
        en: {
            text: 'Pisces ♓️ and Aries ♈️'
        },
        startDate: new Date(2017, 5, 25),
        endDate: new Date(2017, 5, 30)
    },
    /*ARIES:*/
    {
        en: {
            name: 'Aries',
            text: 'Aries ♈️'
        },
        ru: {
            name: 'Овен',
            text: 'Овен ♈️'
        },
        element: elements.FIRE,
        startDate: new Date(2017, 6, 1),
        endDate: new Date(2017, 6, 24)
    },
    /*ARIES_TAURUS:*/
    {
        en: {
            text: 'Aries ♈️ and Taurus ♉️'
        },       
        startDate: new Date(2017, 6, 25),
        endDate: new Date(2017, 6, 30)
    },
    /*TAURUS:*/
    {
        en: {       
            name: 'Taurus',
            text: 'Taurus ♉️'
        },
        ru: {
            name: 'Телец',
            text: 'Телец ♉️'
        },
        element: elements.EARTH,  
        startDate: new Date(2017, 6, 31),
        endDate: new Date(2017, 7, 24)
    },
    /*TAURUS_GEMINI:*/
    {
        en: {
            text: 'Taurus ♉️ and Gemini ♊️'
        },
        startDate: new Date(2017, 7, 25),
        endDate: new Date(2017, 7, 30)
    },
    /*GEMINI:*/
    {
        en: {
            name: 'Gemini',        
            text: 'Gemini ♊️'
        },
        ru: {
            name: 'Близнецы',
            text: 'Близнецы ♊️'
        },       
        element: elements.AIR,
        startDate: new Date(2017, 7, 31),
        endDate: new Date(2017, 8, 24)
    },
    /*GEMINI_CANCER:*/
    {
        en: {
            text: 'Gemini ♊️ and Cancer ♋️'
        },
        startDate: new Date(2017, 8, 25),
        endDate: new Date(2017, 8, 30)
    },
    /*CANCER:*/
    {
        en:{            
            name: 'Cancer',         
            text: 'Cancer ♋️'
        },
        ru: {
            name: 'Рак',
            text: 'Рак ♋️'
        },
        element: elements.WATER,        
        startDate: new Date(2017, 9, 1),
        endDate: new Date(2017, 9, 26)
    },
    /*CANCER_LEO:*/
    {
        en: {
            text: 'Cancer ♋️ and Leo ♌️'
        },
        startDate: new Date(2017, 9, 27),
        endDate: new Date(2017, 10, 1)
    },
    /*LEO:*/
    {
        en: {
            name: 'Leo',          
            text: 'Leo ♌️'
        },
        ru: {
            name: 'Лев',
            text: 'Лев ♌️'
        },
        element: elements.FIRE,
        startDate: new Date(2017, 10, 2),
        endDate: new Date(2017, 10, 26)
    },
    /*LEO_VIRGO:*/
    {
        en: {
            text: 'Leo ♌️ and Virgo ♍️'
        },
        startDate: new Date(2017, 10, 27),
        endDate: new Date(2017, 11, 2)
    },
    /*VIRGO:*/
    {
        en: {            
            name: 'Virgo',           
            text: 'Virgo ♍️'
        },
        ru: {
            name: 'Дева',
            text: 'Дева ♍️'
        },
        element: elements.EARTH,        
        startDate: new Date(2017, 11, 3),
        endDate: new Date(2017, 11, 27)
    },
    /*VIRGO_LIBRA:*/
    {
        en: {
            text: 'Virgo ♍️ and Libra ♎️'
        },
        startDate: new Date(2017, 11, 28),
        endDate: new Date(2017, 11, 31)
    },
    /*VIRGO_LIBRA:*/
    {
        en: {
            text: 'Virgo ♍️ and Libra ♎️'
        },
        startDate: new Date(2017, 0, 1),
        endDate: new Date(2017, 0, 2)
    },
    /*LIBRA:*/
    {
        en: {
            name: 'Libra',           
            text: 'Libra ♎️'
        },
        ru: {
            name: 'Весы',
            text: 'Весы ♎️'
        },
        element: elements.AIR,
        startDate: new Date(2017, 0, 3),
        endDate: new Date(2017, 0, 26)
    },
    /*LIBRA_SCORPIO:*/
    {
        en: {
            text: 'Libra ♎️ and Scorpio ♏️'
        },
        startDate: new Date(2017, 0, 27),
        endDate: new Date(2017, 1, 1)
    },
    /*SCORPIO:*/
    {
        en: {
            name: 'Scorpio',          
            text: 'Scorpio ♏️'
        },
        ru: {
            name: 'Скорпион',
            text: 'Скорпион ♏️'
        },
        element: elements.WATER,
        startDate: new Date(2017, 1, 2),
        endDate: new Date(2017, 1, 25)
    },
    /*SCORPIO_SAGITTARIUS:*/
    {
        en: {
            text: 'Scorpio ♏️ and Sagittarius ♐️'
        },
        startDate: new Date(2017, 1, 26),
        endDate: new Date(2017, 2, 3)
    },
    /*SAGITTARIUS:*/
    {
        en: {
            name: 'Sagittarius',   
            text: 'Sagittarius ♐️'
        },
        ru: {
            name: 'Стрелец',
            text: 'Стрелец ♐️'
        },
        element: elements.FIRE,
        startDate: new Date(2017, 2, 4),
        endDate: new Date(2017, 2, 27)
    },
    /*SAGITTARIUS_CAPRICORN:*/
    {
        en: {
            text: 'Sagittarius ♐️ and Capricorn ♑️'
        },
        startDate: new Date(2017, 2, 28),
        endDate: new Date(2017, 3, 2)
    },
    /*CAPRICORN:*/
    {
        en: {           
            name: 'Capricorn',          
            text: 'Capricorn ♑️'
        },
        ru: {
            name: 'Козерог',
            text: 'Козерог ♑️'
        },
        element: elements.EARTH, 
        startDate: new Date(2017, 3, 3),
        endDate: new Date(2017, 3, 25)
    },
    /*CAPRICORN_AQUARIUS:*/
    {
        en: {
            text: 'Capricorn ♑️ and Aquarius ♒️'
        },
        startDate: new Date(2017, 3, 26),
        endDate: new Date(2017, 4, 1)
    },
    /*AQUARIUS:*/
    {
        en: {
            name: 'Aquarius',          
            text: 'Aquarius ♒️'
        },
        ru: {
            name: 'Водолей',
            text: 'Водолей ♒️'
        },
        element: elements.AIR,
        startDate: new Date(2017, 4, 2),
        endDate: new Date(2017, 4, 25)
    },
    /*AQUARIUS_PISCES:*/
    {
        en: {
            text: 'Aquarius ♒️ and Pisces ♓️'
        },
        startDate: new Date(2017, 4, 26),
        endDate: new Date(2017, 4, 31)
    },
    /*PISCES:*/
    {
        en: {
            name: 'Pisces',          
            text: 'Pisces ♓️'
        },
        ru: {
            name: 'Рыбы',
            text: 'Рыбы ♓️'
        },
        element: elements.WATER,
        startDate: new Date(2017, 5, 1),
        endDate: new Date(2017, 5, 24)
    }
]

const elementsKb = {
    en: [
        [elements.FIRE.en.text, elements.WATER.en.text], 
        [elements.AIR.en.text, elements.EARTH.en.text]
    ]
}

module.exports = {
    elementsKb,
    signs,
    en,
    ru
}