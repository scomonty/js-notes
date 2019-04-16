
//set prototype of object

(function() {
//create person object
function Person(firstname, lastname) {
	console.log(this);
	this.firstname = firstname;
	this.lastname = lastname;
}
//add prototypes
Person.prototype.getFullName = function(){
	return `${this.firstname} ${this.lastname}`;
}
Person.prototype.getProperName = function(){
	return `${this.lastname}, ${this.firstname}`;
}
// create new persons
var scott = new Person('Scott', 'Montgomery');
var eva = new Person('Eva', 'Degroot');
//logs
console.log(`Hello ${scott.firstname} ${scott.lastname}` );
console.log(scott.getFullName());
console.log(eva.getProperName());
})();


(function(){

	//classes
class Person{
	constructor(firstname, lastname){
		this.firstname =firstname;
		this.lastname = lastname;
	}
	greet(){
		return `Hi ${this.firstname}`;
	}
};

class InformalPerson extends Person{
	constructor(firstname, lastname){
		super(firstname, lastname);
	}
	sayhi(){
		return `yo ${this.firstname}`;
	}
}

	const logan = new Person('Squirts', 'Magurts');

	console.log(logan.greet());

})()


