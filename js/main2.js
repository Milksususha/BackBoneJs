var Person = Backbone.Model.extend({
	defaults: {
		name1:'Name - ',
		name:'Myrluk',
		age1:'Yers - ',
		age:25,
		job1:'Job - ',
		job:'Destroit divan',
		color1: 'Sherstb - ',
		color: 'Orange'
	}
});

var PersonView = Backbone.View.extend({
	template: _.template('<%=name1 %><%=name %> <br><%= age1 %><%= age %> <br> <%= job1 %><%= job %> <br> <%= color1 %><%= color %>'),
    template2: _.template('Я сказал <%= words %>, потому что мне <%= age %> лет и зовут меня <%= name %>'),
	initialize: function() {
		tagName: '<br>',
		this.render();
	},
	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
	}
});

var person = new Person();
var personView = new PersonView({model: person});