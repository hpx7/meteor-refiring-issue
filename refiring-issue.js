if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    myObject: function () {
      console.log('Counter: ', Session.get('counter'));
      return {foo: 'bar'};
    }
  });

  Template.hello.helpers({
    greeting: function () {
      console.log('helper fired');
      return 'Hello';
    }
  });

  Template.hello.events({
    'click button': function () {
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
