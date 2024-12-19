//NADEEN-MD
const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


cmd({
    pattern: "sinhalasub",
    alias: ["movi","mov"],
    use: '.movie <query>',
    react: "🎬",
    desc: "Moive downloader",
    category: "download",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let sadas = await fetchJson(`https://darksadas-yt-sinhalasub-search.vercel.app/?q=${q}`)
const msg = *🎥 NADEEN-MD MOVIE SEARCH 🎥*

if (sadas.data.length < 1) return await conn.sendMessage(from, { text: "🚩 I couldn't find anything :(" }, { quoted: mek } )

  var rows = [];  
  sadas.data.map((v) => {
	rows.push({
        buttonId: .infodl ${v.Link},
        buttonText: { displayText: ${v.Title} },
        type: 1
          });
        })

const buttonMessage = {

image: {url: config.LOGO},	
  caption: msg,
  footer: config.FOOTER,
  buttons: rows,
  headerType: 4
}
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 Error !!' }, { quoted: mek } )
}
})


cmd({
    pattern: "infodl",
    alias: ["mdv"],
    use: '.moviedl <url>',
    react: "🎥",
    desc: "download movies from sinhalasub.lk",
    category: "search",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, prefix, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if (!q) return reply('🚩 Please give me a url')

let sadas = await fetchJson(`https://darksadas-yt-sinhalasub-info-dl.vercel.app/?url=${q}`)



if (sadas.length < 1) return await conn.sendMessage(from, { text: "🚩 I couldn't find anything :(" }, { quoted: mek } )

 var rows = [];  	

	rows.push({
      buttonId: prefix + 'daqt ' + q, buttonText: {displayText: 'Details send'}, type: 1}



);

  sadas.downloadLinks.map((v) => {
	rows.push({
        buttonId: prefix + mn ${v.link}±${sadas.title} - ${v.quality} - ${v.size},
        buttonText: { displayText: ${v.size} - ${v.quality} },
        type: 1
          },

	//{buttonId: prefix + 'detailss ' + q, buttonText: {displayText: 'Details send'}, type: 1}	 




		 );
        })
 const msg = `   🎥 NADEEN-MD MOVIE DOWNLODER 🎥
 
* Tιтle   : ${sadas.title}*
* Rᴇʟᴇᴀꜱᴇ ➜* ${sadas.date}
* Rᴀᴛɪɴɢ ➜* ${sadas.rating}
* Rᴜɴᴛɪᴍᴇ ➜* ${sadas.duration}
* Dɪʀᴇᴄᴛᴏʀ ➜* ${sadas.author}
* Cᴏᴜɴᴛʀʏ ➜* ${sadas.country} 
`
const buttonMessage = {

image: {url: sadas.images[0] || images},	
  caption: msg,
  footer: config.FOOTER,
  buttons: rows,
  headerType: 4
}
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 Error !!' }, { quoted: mek } )
}
})


cmd({
    pattern: "sinhalasub",
    react: "🎥",
    alias: ["online", "test", "bot"],
    desc: "Check bot online or no.",
    category: "download",
    use: '.alive',
    filename: __filename
},
async (conn, mek, m, {
    from,
    prefix,
    q,
    pushname,
    reply
}) => {
    try {

        if(!q) return await reply('please give me text !..')


const datae = q.split("±")[0]
const datas = q.split("±")[1]

      let sadas = await fetchJson(`https://darksadas-yt-sinhalasub-dl.vercel.app/?url=${datae}`)    

	    const da = sadas.downloadLink.split("https://pixeldrain.com/u/")[1]
const fhd = 'https://pixeldrain.com/api/file/${da}'

let mfg = `*DOWNLOAD MOVIE*
`
 const buttons = [
        {buttonId:${prefix}fit ${fhd}±${datas} , buttonText: {displayText: Download Now}, type: 1}

      ]
        const buttonMessage = {
		image: {url: 'https://files.catbox.moe/2elpxs.png'},	
            caption: mfg,
            footer: config.FOOTER,
            buttons: buttons,
            headerType: 1
        }
       await conn.buttonMessage(from, buttonMessage, mek)
       } catch (e) {
            console.log(e)
            reply('Error !!')
        }
    })






cmd({
    pattern: "fit",
    react: "📥",
    dontAddCommandList: true,
    filename: __filename
}, async (conn, mek, m, { from, q, isMe, reply }) => {

    if (!q) {
        return await reply('Please provide a direct URL!');
    }
  const data = q.split("±")[0]
        const datas = q.split("±")[1]



    try {





        const mediaUrl = data.trim();

        const response = await axios.get(mediaUrl, { responseType: 'arraybuffer' });
        const mediaBuffer = Buffer.from(response.data, 'binary');




        const message = {
            document: mediaBuffer,
	    caption: `${datas}
     
 > *🎬POWERED BY NADEEN POORNA🎬*`,
            mimetype: "video/mp4",
            fileName: ${datas}🎬NADEEN-MD🎬.mp4,
        };

        await conn.sendMessage(config.JID, message);

        await conn.sendMessage(from, { react: { text: '✔', key: mek.key } });
    } catch (error) {
        console.error('Error fetching or sending', error);
        await conn.sendMessage(from, '*Error fetching or sending *', { quoted: mek });
    }
});
