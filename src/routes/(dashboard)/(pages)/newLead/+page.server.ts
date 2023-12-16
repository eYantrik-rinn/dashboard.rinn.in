import { broker_data } from '$lib/database/mongo.js';
import { page } from "$app/stores";

export const actions = {
    default: async ({ request, locals }) => {
        const userid = locals.user.name
        const data = await request.formData()
        const full_name = data.get('name');
        const Mobile = data.get('phone');
        const email = data.get("email");
        const loanType = data.get("LoanType");
        const loanAmmount = data.get("loanAmmount");
        const preferredBank = data.get("preferredBank");
        const state = data.get("otherBank");
        broker_data.updateOne(
            { "Name": "Anshul Singh" },
            
                { $push: { scores: { $each: [ 90, 92, 85 ] } } }
            
        )
        // const user = await broker_data.insert({
        //     role: 'broker_user',
        //     Name: full_name,
        //     Mobile: Mobile,
        //     Email: email,
            
        // })
        // return{
        //     success:true
        // }
    }
}

