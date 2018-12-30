const Discord = require('discord.js');
const client1 = new Discord.Client();
const client2= new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();

client1.on('ready', () => {var x = client1.channels.get(process.env.ROOM_ID1);if (x) x.join();});

client2.on('ready', () => {var x = client2.channels.get(process.env.ROOM_ID2);if (x) x.join();});

client3.on('ready', () => {var x = client3.channels.get(process.env.ROOM_ID3);if (x) x.join();});

client4.on('ready', () => {var x = client4.channels.get(process.env.ROOM_ID4);if (x) x.join();});

client5.on('ready', () => {var x = client5.channels.get(process.env.ROOM_ID5);if (x) x.join();});

client1.login(process.env.BOT_TOKEN1);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
client5.login(process.env.BOT_TOKEN5);
