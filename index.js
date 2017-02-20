const phrik = 'phrik'
const name = 'phrikpipe'
const whitelist = [
	'alyptik',
	'DarkPsydeLord',
	'dmc',
	'javaisnom',
	'minimalism',
	'mpan',
	'omp',
	'paulguy',
	'pcspkr',
	'sangy',
	'sr',
	'chee',
	'mnmrnaugh'
]
const blacks = [
	'later',
	'identify',
	'register'
]

const irc = require('irc')
const client = new irc.Client('chat.freenode.net', name, {
	userName: name,
	realName: name,
	port: 6697,
	secure: true,
	channels: ['#chee-fanclub']
})

client.addListener('message', (from, to, message) => {
	if (from == phrik) return
	if (!whitelist.includes(from)) return
	const words = message.split(/\s+/)
	if (words[0] != `@${phrik}`) return
	if (blacks.includes(words[1])) return
	const command = words.slice(1).join(' ')
	client.say(phrik, command)
})

client.addListener('pm', (from, message) => {
	if (from != phrik) return
	const words = message.split(/\s+/)
	const response = words[0] == `${name}:` ? words.slice(1).join(' ') : words.join(' ')
	client.say('#chee-fanclub', response)
})
