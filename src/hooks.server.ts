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
			name: superuser.username,
			role: "superUser",
		}
	}
	const admin = await admin_data.findOne({
		userAuthToken: session,
	});

	// if `user` exists set `events.local`
	if (admin) {
		event.locals.user = {
			name: admin.username,
			role: "admin",
		}
	}
	const controller = await controller_data.findOne({
		userAuthToken: session,
	});

	// if `user` exists set `events.local`
	if (controller) {
		event.locals.user = {
			name: controller.username,
			role: "controller",
		}
	}
	const broker = await broker_data.findOne({
		userAuthToken: session,
	});

	// if `user` exists set `events.local`
	if (broker) {
		event.locals.user = {
			name: broker.username,
			role: "broker",
		}
	}
	const user = await user_data.findOne({
		userAuthToken: session,
	});

	// if `user` exists set `events.local`
	if (user) {
		event.locals.user = {
			name: user.username,
			role: "user",
		}
	}

	// load page as normal
	return await resolve(event)
}
