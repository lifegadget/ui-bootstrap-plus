/*jshint node:true*/
var RSVP = require('rsvp');
module.exports = {
  description: 'ui-bootstrap with complementary packages included',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  normalizeEntityName: function() {

  },

  afterInstall: function() {
    var npm = this.addPackagesToProject([
      {name: 'ui-button', target: '^2.0.0-beta.8'},
      // {name: 'ui-tooltip', target: '*'},
      // {name: 'ui-dropdown', target: '*'},
      {name: 'ember-cli-flash', target: '^1.3.15'},
      {name: 'ember-modal-dialog', target: '^0.8.4'},
    ]);

    return RSVP.Promise.all([
      npm,
      this.addAddonToProject('ui-bootstrap'),
      this.addAddonToProject('ui-icon'),
      this.addAddonToProject('ember-tether'),
    ]);
	}

};
