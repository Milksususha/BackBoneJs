Person = Backbone.Model.extend({
	defaults: {
		name:'Myrluk',
		age:7,
		job:'Destroit divan',
	}
});

var PeopleCollection = Backbone.Collection.extend({
	model:Person
});
	
var PersonView = Backbone.View.extend({
	tagName: 'li',
	template: _.template('<string><%= name %> (<%= age %>) - <%= job %>'),
	initialize: function() {
		this.render();
	},
	
	render: function() {
		this.$el.html( this.template( this.model.toJSON() ) );
	}
});

var peopleCollection = new PeopleCollection([
{
        name:'Myr',
		age:8,
		job:'Destroit',
},
{
        name:'luk',
		age:9,
		job:'Des',
},
{
	    name:'My',
		age:6,
		job:'divan',
}
]);



