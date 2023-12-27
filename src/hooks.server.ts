import type { Handle } from '@sveltejs/kit'
import { super_user,admin_data,controller_data,broker_data,user_data } from '$lib/database/mongo'

export const handle: Handle = async ({ event, resolve }) => {
	// get cookies from browser
	const session = event.cookies.get('uid_token')
	if (!session) {
		// console.log("nhi mila kuch")
		// if there is no session load page as normal
		return await resolve(event)
	}

	// find the user based on the session
	const superuser = await super_user.findOne({
		userAuthToken: session,
	});

	// if `user` exists set `events.local`
	if (superuser) {
		event.locals.user = {
			id:superuser._id.toString(),
			name: superuser.name,
			email: superuser.username,
			role: "superUser",
			document:superuser.toString(),
		}
	}
	const admin = await admin_data.findOne({
		userAuthToken: session,
	});

	// if `user` exists set `events.local`
	if (admin) {
		event.locals.user = {
			id:admin._id.toString(),
			name: admin.name,
			email: admin.username,
			role: "admin",
			document:admin.toString(),
		}
	}
	const controller = await controller_data.findOne({
		userAuthToken: session,
	});

	// if `user` exists set `events.local`
	if (controller) {
		event.locals.user = {
			id:controller._id.toString(),
			name: controller.name,
			email: controller.username,
			role: "controller",
			document:controller.toString(),
		}
	}
	const broker = await broker_data.findOne({
		userAuthToken: session,
	});

	// if `user` exists set `events.local`
	if (broker) {
		event.locals.user = {
			id:broker._id.toString(),
			name: broker.name,
			email: broker.username,
			role: "broker",
			document:JSON.stringify(broker),
		}
	}
	const user = await user_data.findOne({
		userAuthToken: session,
	});
	if (user) {
		event.locals.user = {
			id:user._id.toString(),
			name: user.name,
			email: user.username,
			role: "user",
			document:JSON.stringify(user),
		}
	}
	
	// load page as normal
	return await resolve(event)
}
