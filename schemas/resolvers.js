'use strict';

const _ = require('lodash');

module.exports = {
	Query: {
		getUser: (source, args, context, info) => getUser(),
		getAllUsers: (source, args, context, info) => getUsers(),
		getUserBatch: (source, args, context, info) => getUsers(),
		getAccount: (source, args, context, info) => getAccount(),
		getAllAccounts: (source, args, context, info) => getAccounts(),
	},
	User: {
		email: (source, args, context, info) => source.email,
		firstName: (source, args, context, info) => source.first_name,
		lastName: (source, args, context, info) => source.last_name,
	},
	Account: {
		id:  (source, args, context, info) => source.id,
		name:  (source, args, context, info) => source.name,
		country:  (source, args, context, info) => source.country,
		users: (source, args, context, info) => context.users
	}
}

const getUsers = () => [
	{
		email: 'robin@genske.com',
 		first_name: 'robin',
		last_name: 'genske',
	},
	{
		email: 'john@doe.com',
 		first_name: 'john',
		last_name: 'doe',
	}
]

const getUser = () => _.first(getUsers());

const getAccounts = () => [
	{
		id: 1,
		name: 'Robotz AG',
		country: 'USA'
	},
	{
		id: 2,
		name: 'Robotz GmbH',
		country: 'GERMANY'
	}
]

const getAccount = () => _.first(getAccounts());
