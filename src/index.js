require('dotenv').config();

// Require the necessary discord.js classes
const { Client, GatewayIntentBits, Presence } = require('discord.js');

let prefix = process.env.PREFIX;
// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', (message) => {
  if (message.content === `${prefix}ping`) {
    message.channel.send('Hello!');
  }
});

// client.on('interactionCreate', async (interaction) => {
//   if (!interaction.isChatInputCommand()) return;

//   const { commandName } = interaction;

//   if (commandName === 'ping') {
//     await interaction.reply('Pong!');
//   } else if (commandName === 'server') {
//     await interaction.reply('Server info.');
//   } else if (commandName === 'user') {
//     await interaction.reply('User info.');
//   }
// });

// Login to Discord with your client's token
client.login(process.env.CLIENT_TOKEN);
