const gitdobot = (prefix) => {
return`
FLOP-BOT-MD (•‿•)

BOT COM CONEXÃO "MULTI DEVICE"-md 

LEMBRADO QUE ANTES DE LIGAR O BOT VC DEVE DAR OS SEGUINTES COMANDOS NO TERMUX.....

1° termux-change-repo

APERTA OK

MARCA A TERCEIRA CAIXINHA E APERTA OK

2° pkg upgrade -y 

NESCESSARIO DA ENTER, VAI PAUSAR A AÇÃO E VAI APARECER [default=N] ? 

3° pkg update -y


4° termux-setup-storage



5° pkg install nodejs -y



6° pkg install nodejs-lts -y



7° pkg install git -y



8° pkg install ffmpeg -y



9° cd /sdcard && git clone https://github.com/Srcollinss/FLOP-BOT-MD.git && cd /FLOP-BOT-MD



10° sh start.sh

depois basta scanear o código QR utilizando outro celular

`
}

exports.gitdobot = gitdobot
