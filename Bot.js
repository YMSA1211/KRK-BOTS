const developers = [446999223183998987]//Toxic Codes
client.on('message', message => {//Toxic Codes
    var argresult = message.content.split(` `).slice(1).join(' ');//Toxic Codes
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
     if (message.content === (adminprefix + "leave")) {//Toxic Codes
    message.guild.leave();   //Toxic Codes
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Toxic Codes
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
  if (message.content.startsWith( # + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅**`)//Toxic Codes
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
  if (message.content.startsWith(adminprefix + 'setprefix')) {//Toxic Codes
  client.user.setPrefix(argresult).then
      message.channel.send(`Changing Prefix ..**${argresult}** `)//Toxic Codes
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {//Toxic Codes
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);//Toxic Codes
}
});//Toxic Codes
