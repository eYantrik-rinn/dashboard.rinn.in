import { fail, redirect } from '@sveltejs/kit'
import bcrypt from 'bcrypt'
import { user_data, broker_data, controller_data, admin_data, super_user } from '$lib/database/mongo.js'

export const load = async ({ locals }) => {
	// redirect user if logged in
	if (locals.user) {
		throw redirect(302, '/dashboard')
	}
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData()
		const username = data.get('username')
		const password = data.get('password')
		if (
			typeof username !== 'string' ||
			typeof password !== 'string' ||
			!username ||
			!password
		) {
			return fail(400, { invalid: true })
		}
		const superuser = await super_user.findOne({ username: username });
		if (superuser) {
			const superuserPassword = await bcrypt.compare(password, superuser.passwordHash);
			const userAuthToken = crypto.randomUUID();
			await super_user.updateOne(
				{ username: username },
				{
					$set: {
						userAuthToken: userAuthToken,
					}
				}
			)
			cookies.set('uid_token', userAuthToken, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				// only sent over HTTPS in production
				secure: process.env.NODE_ENV === 'production',
				// set cookie to expire after a month
				maxAge: 60 * 60 * 24 * 30,
			})
			// redirect the user
			throw redirect(302, '/superuser')
		}
		const admin = await admin_data.findOne({ username: username });
		if (admin) {
			const adminPassword = await bcrypt.compare(password, admin.passwordHash);
			const userAuthToken = crypto.randomUUID();
			await admin_data.updateOne(
				{ username: username },
				{
					$set: {
						userAuthToken: userAuthToken,
					}
				}
			)
			cookies.set('uid_token', userAuthToken, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				// only sent over HTTPS in production
				secure: process.env.NODE_ENV === 'production',
				// set cookie to expire after a month
				maxAge: 60 * 60 * 24 * 30,
			})
			// redirect the user
			throw redirect(302, '/admin')

		}

		const controller = await controller_data.findOne({ username: username });
		if (controller) {
			const controllerPassword = await bcrypt.compare(password, controller.passwordHash);
			const userAuthToken = crypto.randomUUID();
			await controller_data.updateOne(
				{ username: username },
				{
					$set: {
						userAuthToken: userAuthToken,
					}
				}
			)
			cookies.set('uid_token', userAuthToken, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				// only sent over HTTPS in production
				secure: process.env.NODE_ENV === 'production',
				// set cookie to expire after a month
				maxAge: 60 * 60 * 24 * 30,
			})
			// redirect the user
			throw redirect(302, '/controller')
		}

		const broker = await broker_data.findOne({ username: username });
		if (broker) {
			const brokerPassword = await bcrypt.compare(password, broker.passwordHash);
			const userAuthToken = crypto.randomUUID();
			await broker_data.updateOne(
				{ username: username },
				{
					$set: {
						userAuthToken: userAuthToken,
					}
				}
			)
			cookies.set('uid_token', userAuthToken, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				// only sent over HTTPS in production
				secure: process.env.NODE_ENV === 'production',
				// set cookie to expire after a month
				maxAge: 60 * 60 * 24 * 30,
			})
			// redirect the user
			throw redirect(302, '/broker')

		}

		const user = await user_data.findOne({ username: username });
		if (user) {
			const userPassword = await bcrypt.compare(password, user.passwordHash);
			const userAuthToken = crypto.randomUUID();
			await user_data.updateOne(
				{ username: username },
				{
					$set: {
						userAuthToken: userAuthToken,
					}
				}
			)
			cookies.set('uid_token', userAuthToken, {
				// send cookie for every page
				path: '/',
				// server side only cookie so you can't use `document.cookie`
				httpOnly: true,
				// only requests from same site can send cookies
				// https://developer.mozilla.org/en-US/docs/Glossary/CSRF
				sameSite: 'strict',
				// only sent over HTTPS in production
				secure: process.env.NODE_ENV === 'production',
				// set cookie to expire after a month
				maxAge: 60 * 60 * 24 * 30,
			})
			// redirect the user
			throw redirect(302, '/user')
		}

	},
}
