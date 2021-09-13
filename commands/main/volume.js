module.exports = [{
    name: 'volume',
    code: `$if[$message>100]
	Volume can't be over 100%!
	$elseIf[$message<1]
	Volume can't be below 0%!
	$endelseIf
	$else
	Set volume to $message[1]%.
	$volume[$message]
	$endif
	$argsCheck[1;Usage: m!volume <number>]`
}]