var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  room: 'Lobby',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // $('#chats').bind('click', Friends.toggleStatus());
    // $('#rooms button').bind('click', Rooms.add());
    // $('form .submit').bind('click', Parse.create());
  },

  fetch: function(callback = () => {}){
    Parse.readAll((data) => {
      // examine the response from the server request
      console.log(data)
      let poster = function(dataObject) {
        //console.log(dataObject, 'DATAOBJECT')
        dataObject.results.forEach(function(message){
          //console.log(message, 'MESSAGE');
          MessagesView.renderMessage(message);
        })
      }
      poster(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
