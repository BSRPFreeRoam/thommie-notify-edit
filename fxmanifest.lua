fx_version 'cerulean'
game 'gta5'
lua54 'yes'
author 'Thommie / BSRP'
description 'Standalone notification system + txAdmin bridge'

ui_page 'html/ui.html'

client_script 'client.lua'

server_scripts {
	'server/txadmin.lua',
}

files {
	'html/ui.html',
	'html/css/main.css',
	'html/js/app.js',
}