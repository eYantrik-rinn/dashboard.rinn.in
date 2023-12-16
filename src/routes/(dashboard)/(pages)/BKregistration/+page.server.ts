import bcrypt from 'bcrypt'
import { broker_data } from '$lib/database/mongo.js'

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData()
        const full_name = data.get('full_name');
        const Mobile = data.get('number');
        const email = data.get("email");
        const password = data.get("password");
        const address = data.get("address");
        const city = data.get("city");
        const state = data.get("state");
        const zipcode = data.get("zipcode");
        const user = await broker_data.insertOne({
            role: 'broker',
            Name: full_name,
            Mobile: Mobile,
            Email: email,
            passwordHash: await bcrypt.hash(password, 10),
            userAuthToken: crypto.randomUUID(),
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
        })
        return{
            success:true
        }
    }
}


