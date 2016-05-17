var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: 'xoxb-43561113840-WQTi7tcQ1Itfa10sbc7qxT9X', // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'Entry Bot'
});

bot.on('start', function() {
    var channelCode = bot.getChannel("attendance");
    console.log(channelCode);
    bot.on("message", function(data) {
        if (data.type === "message" && data.channel && data.channel === "C0J591YCB") {
            if (data.text && data.text.indexOf("늦") > -1) {
                bot.postMessageToChannel("attendance", "흠....");
            }
        }
    });
});
