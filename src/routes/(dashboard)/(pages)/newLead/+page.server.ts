import { broker_data } from '$lib/database/mongo.js';

export const actions = {
    default: async ({ request, locals }) => {
        const userid = locals.user.id
        const data = await request.formData()
        const full_name = data.get('name');
        const Mobile = data.get('phone');
        const email = data.get("email");
        const loanType = data.get("LoanType");
        const loanAmmount = data.get("loanAmmount");
        const preferredBank = data.get("preferredBank");
        const otherBank = data.get("otherBank");
        const fromBank = data.get('fromBank')
        
        let BankName;
        if (preferredBank !== 'other'){
            BankName = preferredBank;
        }else{
            BankName = otherBank
        }
       
        broker_data.updateOne(
            {"_id": Object(`${userid}`)},
                { $push: { Leads: {           
                    status:'new',
                    name:full_name,
                    phone:Mobile,
                    email:email,
                    loanType:loanType,
                    loanAmmount:loanAmmount,
                    Bank:BankName,
                    fromBank:fromBank,
                 } } }
            
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

