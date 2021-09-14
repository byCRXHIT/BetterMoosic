module.exports = [{
    name: 'spotify',
    code: `
$if[$getServerVar[isBeingPlayed]==0]
    $setServerVar[isBeingPlayed;1]
    $playSpotify[$message;number;yes;Sorry! I was not able to play this song. If you think this is a mistake, Contact a Developer!]
    $argsCheck[>1;Benutze: !play <song name>]
$else
    $playSpotify[$message;number;yes;Sorry! I was not able to play this song. If you think this is a mistake, Contact a Developer!]
    $title[Added Song to Queue]
    $description[Playing now: **$songInfo[title]**
    Lenght: **$songInfo[duration] Minuten**
    Publisher: **$songInfo[publisher]**]
    $footer[Bot made by: byCRXHIT & ItzN3on & ItzN3on]
    $color[GREEN]
    $thumbnail[$songInfo[thumbnail]]
    $argsCheck[>1;Usage: *play <song name>]
$endIf`
  }]