const aoijs = require("aoi.js")
const config = require(`./config.json`)

const bot = new aoijs.Bot({
    token: config.token, 
    prefix: config.prefix
})

bot.variables({
    isBeingPlayed: "0"
})

bot.musicEndCommand({
    channel: "$channelID",
    code: `$title[Stopping Song & Leaving Channel]
    $description[No song in queue left.]
    $color[RED]
    $setServerVar[isBeingPlayed;0]`
})

bot.musicStartCommand({
    channel: "$channelID",
    code: `$title[Playing Song]
    $description[Playing now: **$songInfo[title]**
    Lenght: **$songInfo[duration] Minuten**
    Publisher: **$songInfo[publisher]**]
    $footer[Bot made by: byCRXHIT & ItzN3on]
    $color[GREEN]
    $thumbnail[$songInfo[thumbnail]]`
})

bot.onMessage()
bot.loadCommands(`./commands/`)
