const _ = require('lodash');

const users = require('./users.json');
const accounts = require('./accounts.json');

console.log(users);

const user_api = {
	get: email => users.filter(x => x.email === email)[0],
	getAll: () => users
}

const account_api = {
	get: id => accounts.filter(x => x.id == id)[0],
	getAll: () => accounts
}

module.exports = {
	user_api,
	account_api
}
