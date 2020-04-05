var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var newMessage = {
      username: App.username,
      roomname: 'lobby',
      text: FormView.$form.find('#message').val(),
    }

    Parse.create(newMessage)

    console.log(newMessage)
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};