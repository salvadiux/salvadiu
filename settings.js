const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const {
    en,
    es,
    ar,
    id,
    pt,
    rs
} = require('./libs/idiomas/total-idiomas.js')
const axios = require('axios')

//---------[ PROPIETARIO/OWNER ]---------
global.owner = [
    ["50582340051", "Owner", true],
    ["595984838201"],
    ["51918534156"],
    ["123456789"]
]
global.mods = []
global.premium = []
global.blockList = []

//---------[ NOMBRE/INFO ]---------
global.pagina = "   "
global.botname = "✨ scarll-𝐁𝐎𝐓 ✨"
global.wm = '✨ Scarll-𝐁𝐎𝐓 ✨'
global.vs = '𝟮.𝟭'
global.creador = 'Salvadiux'
global.creador2 = 'Salvadiux'
global.nunber = Math.floor(Math.random() * (27 - 18 + 1)) + 18;

function pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}



//Función beta : escribe el número que quiere que sea bot para que mande el Código de 8 digitos
global.botNumberCode = "" //Ejemplo: +59309090909
global.phoneNumber = ""

//---------[ FECHA/IDIOMAS ]---------
global.place = 'America/Managua' // Aquí puedes encontrar tu ubicación https://momentjs.com/timezone/
global.lenguaje = es //Predeterminado en idioma Español 
global.prefix = [` `]

//---------[ APIS GLOBAL ]---------
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({...query, ...(apikeyqueryname ? {[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]} : {})})) : '');
global.apis = 'https://deliriussapi-oficial.vercel.app'
global.eliasarapi = 'EliasarYT'
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['GataDios']; // ['BrunoSobrino_2'] 
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query,
    ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
    } : {})
})) : '');

global.APIs = {
        //ApiEmpire: 'https://',
        CFROSAPI: 'https://api.cafirexos.com',
        nrtm: 'https://fg-nrtm.ddns.net',
        fgmods: 'https://api.fgmods.xyz',
        xteam: 'https://api.xteam.xyz',
        dzx: 'https://api.dhamzxploit.my.id',
        lol: 'https://api.lolhuman.xyz',
        neoxr: 'https://api.neoxr.my.id',
        zenzapis: 'https://api.zahwazein.xyz',
        akuari: 'https://api.akuari.my.id',
        akuari2: 'https://apimu.my.id',
        botcahx: 'https://api.botcahx.biz.id',
        ibeng: 'https://api.ibeng.tech/docs',
        rose: 'https://api.itsrose.site',
        popcat: 'https://api.popcat.xyz',
        xcoders: 'https://api-xcoders.site',
        vihangayt: 'https://vihangayt.me',
        erdwpe: 'https://api.erdwpe.com',
        xyroinee: 'https://api.xyroinee.xyz',
        nekobot: 'https://nekobot.xyz'
    },
    global.APIKeys = {
        'https://api.xteam.xyz': `${keysxteam}`,
        'https://api.lolhuman.xyz': 'GataDios',
        'https://api.neoxr.my.id': `${keysneoxr}`,
        'https://api.zahwazein.xyz': `${keysxxx}`,
        'https://api.fgmods.xyz': 'DRLg5kY7',
        'https://api-fgmods.ddns.net': 'fg-dylux',
        'https://api.botcahx.biz.id': 'Admin',
        'https://api.ibeng.tech/docs': 'tamvan',
        'https://api.itsrose.site': 'Rs-Zeltoria',
        'https://api-xcoders.site': 'Frieren',
        'https://api.xyroinee.xyz': 'uwgflzFEh6'
    };

//---------[ STICKERS ]---------
global.packname = ""
global.author = `{
 "bot": "✨ scarll-𝐁𝐎𝐓 ✨"
  "autor": "Salvadiux",
  "version": "1.0",
  "creador": "Salvadiux"
}
`

//-----------------IMAGENES---------
global.menuimg = "https://i.imgur.com/3iopWu0.png"
global.img = "https://i.imgur.com/3iopWu0.png";
global.img1 = "https://i.imgur.com/3iopWu0.png";
global.img2 = 'https://i.imgur.com/3iopWu0.png';
global.img3 = 'https://i.imgur.com/3iopWu0.png';
global.img4 = 'https://i.imgur.com/3iopWu0.png';
global.img5 = 'https://i.imgur.com/3iopWu0.png';
global.img6 = 'https://i.imgur.com/3iopWu0.png';
global.img7 = 'https://i.imgur.com/3iopWu0.png';
global.img8 = 'https://i.imgur.com/3iopWu0.png';
global.img9 = 'https://i.imgur.com/3iopWu0.png';
global.img10 = 'https://i.imgur.com/3iopWu0.png';
global.subbot = 'https://i.imgur.com/3iopWu0.png'
global.randomImage = pickRandom([img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]);




global.imagen1 = fs.readFileSync('./media/menu.jpg')
global.imagen2 = 'https://i.imgur.com/3iopWu0.png'
global.imagen3 = fs.readFileSync('./media/menu3.jpg')
global.noperfil = fs.readFileSync('./media/sinfoto.jpg')
global.verificar = fs.readFileSync('./media/menu2.jpg')

//---------[ ENLACES ]---------
global.md = 'https://github.com'
global.yt = 'https://www.youtube.com/@Salvadiux'
global.tiktok = 'https://www.tiktok.com/'
global.fb = 'https://www.facebook.com'
global.faceb = 'https://www.facebook.com'
global.paypal = 'https://www.paypal.me/salvadiux'

global.host = 'https://www.youtube.com/@Salvadiux';
global.nna = 'https://whatsapp.com/channel/0029VadxAUkKLaHjPfS1vP36';
global.nn = 'https://www.youtube.com/@Salvadiux'
global.nn2 = 'https://www.youtube.com/@Salvadiux'
global.nn3 = 'https://www.youtube.com/@Salvadiux'
global.nn4 = 'https://www.youtube.com/@Salvadiux'
global.nn5 = 'https://www.youtube.com/@Salvadiux'
global.nn6 = 'https://www.youtube.com/@Salvadiux'
global.nn7 = 'https://www.youtube.com/@Salvadiux'
global.nn8 = 'https://www.youtube.com/@Salvadiux'
global.multi = 'https://www.youtube.com/@Salvadiux'
global.nna2 = 'https://www.youtube.com/@Salvadiux'
global.n2 = 'https://www.youtube.com/@Salvadiux'
//---------[ INFO ]--------- 
global.info = {
    wait: '*_■■□□□40%_*',
    waitt: '*_■■■□□60%_*',
    waittt: '*_■■■■□80%_*',
    waitttt: '*_■■■■□90%_*',
    waittttt: '*_■■■■■100%_*',
    result: `${lenguaje['exito']()}`,
    admin: `${lenguaje['admin']()}`,
    botAdmin: `${lenguaje['botAdmin']()}`,
    owner: `${lenguaje['propietario']()}`,
    premium: `${lenguaje['prem']()}`,
    group: `${lenguaje['group']()}`,
    private: `${lenguaje['private']()}`,
    bot: `${lenguaje['bot']()}`,
    error: `${lenguaje['error']()}`,
    advertencia: `${lenguaje['advertencia']()}`,
    registra: `${lenguaje['registra']()}`,
    limit: `${lenguaje['limit']()}`,
    AntiNsfw: `${lenguaje['AntiNsfw']()}`,
    endLimit: `${lenguaje['endLimit']()}`,
}
global.rwait = '⏳'
global.dmoji = '😅'
global.done = '✔️'
global.error = '⚠️'
global.xmoji = '😈'

//---------------[ NIVELES, ADVERTENCIA ]----------------
global.multiplier = 30 // Cuanto más alto, más difícil subir de nivel 
global.maxwarn = '4' // máxima advertencias 

//----------------------------------------------------

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    const fileName = path.basename(file)
    console.log(chalk.greenBright.bold(`Update '${fileName}'.`))
    delete require.cache[file]
    require(file)
})
