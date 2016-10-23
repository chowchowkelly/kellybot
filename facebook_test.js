var Botkit = require('botkit');
var controller = Botkit.facebookbot({
        access_token: "EAAQAONQj7nYBACvZB85AZAk0RlKkwglTSZBOfaKK58i3ppRKiVwttdNq2y89s6RqmNZA6WWe1ZCConstsS8Ab7PkgEimlb0FRZA9OCjloyI8BaOctXSnQEy8XEAP6n6x6syLLE8U1vtbY5afPfZBOtNeI7dFe5uO1F3e7iEFi8hcgZDZD",
        verify_token: "justtryingoverherehopeitworks",
});

var bot = controller.spawn({
});

// if you are already using Express, you can use your own server instance...
// see "Use BotKit with an Express web server"
controller.setupWebserver(process.env.PORT,function(err,webserver) {
  controller.createWebhookEndpoints(controller.webserver, bot, function() {
      console.log('This bot is online!!!');
  });
});

// this is triggered when a user clicks the send-to-messenger plugin
controller.on('facebook_optin', function(bot, message) {

    bot.reply(message, 'Welcome to my app!');

});

// user said hello
controller.hears(['hello'], 'message_received', function(bot, message) {

    bot.reply(message, 'Hey there.');

});

// user said hi

controller.hears(['hi'], 'message_received', function(bot, message) {

    bot.reply(message, 'hi <3 you look amazing today.');

});
// alberto
controller.hears(['Alberto'], 'message_received', function(bot, message) {

    bot.reply(message, 'Alberto is a cool dude.');

});

// jessica
controller.hears(['Jessica'], 'message_received', function(bot, message) {

    bot.reply(message, 'Nice hair, Jessica.');

});

controller.hears(['cookies'], 'message_received', function(bot, message) {

    bot.startConversation(message, function(err, convo) {

        convo.say('Did someone say cookies!?!!');
        convo.ask('What is your favorite type of cookie?', function(response, convo) {
            convo.say('Golly, I love ' + response.text + ' too!!!');
            convo.next();
        });
    });
});