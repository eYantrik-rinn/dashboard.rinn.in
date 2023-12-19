// get `locals.user` and pass it to the `page` store

export const prerender = false;
import { broker_data } from '$lib/database/mongo';
export const load = async ({ locals }) => {
	const userData = await broker_data.find().toArray();
	let brokerData = JSON.stringify(userData);
	return {
		brokerData,
		user: locals.user,
	}
}

// export async function load() {

// return {
//     brokerData,
// };
// }