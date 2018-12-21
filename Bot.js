client.on('message', message => {
if(message.content.split(' ')[0] == prefix + 'dac') {  
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply(`**I D'ont Have Permission For That !`);
message.guild.channels.forEach(m => {
m.delete();
});
}
if(message.content.split(' ')[0] == prefix + 'dar') { 
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply(`**I D'ont Have Permission For That !`);
message.guild.roles.forEach(m => {
m.delete();
});
message.reply("`تم حذف جميع الرتب بنجاح`")
}
});
