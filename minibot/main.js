const Discord = require('discord.js');
const client = new Discord.Client();
const işaret = require("./işaret.json")

var prefix = işaret.prefix

client.on('ready', () => {
  console.log(`hello world!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'hello') {
    msg.reply('Hello!');
  }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'fuck') {
        msg.delete()
      msg.author.send('bye');
    }
  });
  
  client.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'davet') {
      msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=833033589067218975&permissions=8&scope=bot');
    }
  });

  client.on('message', msg => {
    if (msg.content.toLowerCase() === prefix + 'davet') {
      msg.author.send('https://discord.com/api/oauth2/authorize?client_id=833033589067218975&permissions=8&scope=bot');
    }
  });


client.login('ODMzMDMzNTg5MDY3MjE4OTc1.YHsc_A.HnoVCwX6eiUIPTxFNG2E69E1aEc');