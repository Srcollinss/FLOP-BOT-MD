const cmd_termux = (prefix) => {
return `
BAIXE O TERMUX V0.118.0 
ð
https://www.mediafire.com/file/mb15jauwabgn9rt/com.termux_118.apk/file

COMANDOS BÃSICOS DO TERMUX PARA INSTALAR O BOTð»


ââââ®
â âââââââââââââââââââââââ
ââââ¯        _1 COMANDO :

termux-change-repo

APERTA OK...

MARCA A TERCEIRA CAIXINHA E APERTA OK....

ââââ®
â âââââââââââââââââââââââ
ââââ¯      _2 COMANDO:


pkg upgrade -y 

QUANDO PAUSAR Ã NESCESSARIO DA ENTER, VAI PAUSAR A AÃÃO E VAI APARECER [default=N] ?


ââââ®
â âââââââââââââââââââââââ
ââââ¯      _3 COMANDO :


pkg update -y


ââââ®
â âââââââââââââââââââââââ
ââââ¯      _4 COMANDO:


termux-setup-storage


ââââ®
â âââââââââââââââââââââââ
ââââ¯      _5 COMANDO :


pkg install nodejs -y


ââââ®
â âââââââââââââââââââââââ
ââââ¯      _6 COMANDO :


pkg install nodejs-lts -y


ââââ®
â âââââââââââââââââââââââ
ââââ¯      _7 COMANDO :


pkg install git -y


ââââ®
â âââââââââââââââââââââââ
ââââ¯      _8 COMANDO :


pkg install ffmpeg -y


ââââ®
â âââââââââââââââââââââââ
ââââ¯      _9 COMANDO PARA O HEROKU:


npm i -g npm@6 && npm i heroku -g


ââââ®
â âââââââââââââââââââââââ
ââââ¯    10_COMANDO


cd /sdcard && git clone https://github.com/Srcollinss/FLOP-BOT-MD.git && cd /FLOP-BOT-MD


ââââ®
â âââââââââââââââââââââââ
ââââ¯    11-COMANDO


sh start.sh

ðð
`
}

exports.cmd_termux = cmd_termux
