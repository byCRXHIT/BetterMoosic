module.exports = [{
    name: 'play',
    code: `
$if[$getServerVar[isBeingPlayed]==0]
    $setServerVar[isBeingPlayed;1]
    $playSong[$message;:x: Songe konnte nicht abgespielt werden.]
    $argsCheck[>1;Benutze: !play <song name>]
$else
    $playSong[$message;Sorry! I was not able not play this song!]
    $title[Added Song to Queue]
    $description[Playing now: **$songInfo[title]**
    Lenght: **$songInfo[duration] Minuten**
    Publisher: **$songInfo[publisher]**]
    $footer[Bot made by: byCRXHIT & ItzN3on & ItzN3on]
    $color[GREEN]
    $thumbnail[$songInfo[thumbnail]]
    $argsCheck[>1;Usage: *play <song name>]
$endIf`
  }, {
    name: 'p',
    code: `$if[$getServerVar[isBeingPlayed]==0]
      $setServerVar[isBeingPlayed;1]
      $playSong[$message;:x: Songe konnte nicht abgespielt werden.]
	    $argsCheck[>1;Benutze: !play <song name>]
  $else
      $playSong[$message;Sorry! I was not able not play this song!]
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