Blogger.ContactController = Ember.Controller.extend({
  messageSent: false,
  actions: {
    sendMessage: function() {
      var message = prompt('Type your message:');
      this.set('confirmationNumber', Math.floor(Math.random() * 10000));
      this.set('messageSent', true);
    }
  }
});
