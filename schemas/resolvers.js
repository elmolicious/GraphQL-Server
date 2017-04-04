'use strict';

module.exports = {
	Query: {
		getUser: (source, args, context, info) => context.user_api.get(args.id),
		getAllUsers: (source, args, context, info) => context.user_api.getAll(),
		getUserBatch: (source, args, context, info) => batchGetUser(context.user_api, args.user_ids),
		getAccount: (source, args, context, info) => context.account_api.get(args.id),
		getAllAccounts: (source, args, context, info) => context.account_api.getAll(),
	},
	User: {
		email: (source, args, context, info) => source.email,
		firstName: (source, args, context, info) => source.first_name,
		lastName: (source, args, context, info) => source.last_name,
		accountIds: (source, args, context, info) => source.accountIds
	},
	Account: {
		id:  (source, args, context, info) => source.id,
		name:  (source, args, context, info) => source.name,
		country:  (source, args, context, info) => source.country,
		users: (source, args, context, info) => getUsersWithAccountId(context.user_api, source.id)
	}
}

function getUsersWithAccountId(api, accountId){
	const users = api.getAll();

	return users.filter(x => x.accountIds.includes(accountId));
}

function batchGetUser(api, user_ids){
	return user_ids.map(id => api.get(id));
}
