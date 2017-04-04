const _ = require('lodash');

const users = require('./users.json');
const accounts = require('./accounts.json');

const user_api = {
	get: email => users.filter(x => x.email === email)[0],
	getAll: () => users,
	create: user => { users.push(user); return user }
}

const account_api = {
	get: id => accounts.filter(x => x.id == id)[0],
	getAll: () => accounts
}

module.exports = {
	user_api,
	account_api
}
