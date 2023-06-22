/* const commando = require('discord.js-commando');
const config = require('./config.json');
const bot = new commando.Client({
    commandPrefix : config.prefix,
    owner: '224949031514800128',
    disableEveryone : true,
    unknownCommandResponse: true
});


bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('welcome', 'Welcome');
bot.registry.registerGroup('test', 'Test');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.on('ready', () => {
    console.log('Logged in!');
    bot.user.setActivity('Dango Daikazoku');
}); */

const config = require('./config.json');
const Discord = require('discord.js');

const bot = new Discord.Client({
    disableEveryone: true
});

bot.on("ready", async() => {
    console.log(bot.user.username + " is online!");
    bot.user.setActivity("Dango Daikazoku");
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === (prefix + 'hello')){
        return message.channel.send("Hello!");
    }
    else if(cmd === (prefix + '')){
        
    }
});


bot.login(config.token);
