var Person = Backbone.Model.extend({
	defaults: {

		name:'Myrluk',

		age:25,

		job:'Destroit divan',

		color: 'Orange'
	}
});

var PersonView = Backbone.View.extend({

		tagName: 'li',
		temp: '#persond',
		initialize: function() {
		this.render();
	},
	render: function() {
		var template =  _.template($(this.template).html() );
		this.$el.html(template( this.model.toJSON() ) );
	}
});

var person = new Person();
var personView = new PersonView({model: person});