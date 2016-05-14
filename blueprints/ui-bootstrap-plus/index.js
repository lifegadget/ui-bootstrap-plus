/*jshint node:true*/
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
    return this.addPackagesToProject([
      {name: 'ui-bootstrap', target: '*'},
      {name: 'ember-tether', target: '0.3.1'},
      {name: 'ui-button', target: '*'},
      {name: 'ui-icon', target: '*'},
      // {name: 'ui-tooltip', target: '*'},
      // {name: 'ui-dropdown', target: '*'},
      {name: 'ember-cli-flash', target: '1.3.15'},
      {name: 'ember-modal-dialog', target: '0.8.4'},
    ]);
	}

};
