const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
    token: "TOKEN", 
    prefix: "*"
})

bot.status({
    text: "*play <song>",
    type: "LISTENING"
  })

bot.musicEndCommand({
    channel: "$channelID",
    code: `$title[Stoppe Song]
$description[Nothing to play in queue more. Leaving Channel.]
$color[RED]`
})

bot.musicStartCommand({
    channel: "$channelID",
    code: `$title[Spiele Song]
    $description[Playing now: **$songInfo[title]**
Lenght: **$songInfo[duration] Minuten**
Publisher: **$songInfo[publisher]**]
$footer[Bot made by: byCRXHIT]
    $color[GREEN]
    $thumbnail[$songInfo[thumbnail]]
    $clear[1]`
})

bot.onMessage()
bot.loadCommands(`./commands/`)
