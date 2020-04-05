var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  // render: function() {
  // },

  renderMessage: function(message){
    message.text = message.text || '';
    message.username = message.username || '';
    $('#chats').prepend(MessageView.render(message));
  }

};

//renderMessage