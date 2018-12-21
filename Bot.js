client.on('message', message => {
    var argresult = message.content.split(`).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith('$' + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(white_check_mark   ${argresult})
  } else 
  if (message.content.startsWith('$' + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(white_check_mark   ${argresult})
  } else 
  if (message.content.startsWith('$' + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(white_check_mark   ${argresult}) ////Mal_Team
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/حب بلا حدود");
      message.channel.sendMessage(white_check_mark   ${argresult}`)////Mal_Team
  }
