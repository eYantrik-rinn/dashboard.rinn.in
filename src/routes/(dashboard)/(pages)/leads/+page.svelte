<script>
    export let data;
    let homeData = JSON.parse(data.brokerData);
    let leads = {};
    homeData.forEach((element) => {
        leads = element.Leads;
        console.log(element.Leads);
    });
    // let status = [];
    // leads.forEach((element) => {
    //     if (element.status == "new") {
    //         status.push(element.status);
    //     }
    // });

    // let leadsData = JSON.parse(data.brokerData);
    // console.log(leadsData.user);
</script>

<section
    class="mt-14 lg:ml-64 rounded-lg max-w-full grid grid-cols-1 md:grid-cols-2"
>
    {#each leads as item}
        <div class="p-8">
            <h3 class="text-blue-300 mb-4 text-sm font-bold">1.__id</h3>
            <div class="sm:flex sm:items-center px-6 py-4 border">
                <img
                    class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                    src="https://tailwindflex.com/public/images/user.png"
                    alt=""
                />
                <div class="text-center sm:text-left sm:flex-grow">
                    <div class="m-2">
                        <p class="text-xl leading-tight m-2">{item.name}</p>
                        <p class="text-sm leading-tight m-2 text-gray-400">
                            {item.email}
                        </p>
                        <p class="text-sm leading-tight m-2 text-gray-400">
                            {item.loanType}
                        </p>
                        <p class="text-sm leading-tight m-2 text-gray-400">
                            Ammount: ₹ {item.loanAmmount
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </p>
                        <p class="text-sm leading-tight m-2 text-gray-400">
                            Loan Status : {item.status}
                        </p>
                    </div>
                    <div>
                        <button
                            class="text-xs m-2 font-semibold rounded-full px-4 py-1 leading-normal border-2 border-green-400 text-green hover:bg-green-400 hover:text-white"
                            >Call</button
                        >
                        <button
                            class="text-xs m-2 font-semibold rounded-full px-4 py-1 leading-normal border-2 border-green-400 text-green hover:bg-green-400 hover:text-white"
                            >Edit</button
                        >
                    </div>
                </div>
            </div>
        </div>
    {/each}
    <!-- {#each leadsData as item}
    {JSON.stringify(item)}
        {#each item as newitem}
            {JSON.stringify(newitem)}
            {newitem.__id}
        {/each}
    {/each} -->
    <!-- <div class="p-8">
        <h3 class="text-blue-300 mb-4 text-sm font-bold">
            1. Card with no image
        </h3>
        <div class="sm:flex sm:items-center px-6 py-4 border">
            <img
                class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                src="https://tailwindflex.com/public/images/user.png"
                alt=""
            />
            <div class="text-center sm:text-left sm:flex-grow">
                <div class="m-2">
                    <p class="text-xl leading-tight m-2">Anshul Singh</p>
                    <p class="text-sm leading-tight m-2 text-gray-400">
                        anshulsing155@gmail.com.
                    </p>
                    <p class="text-sm leading-tight m-2 text-gray-400">
                        Home Loan.
                    </p>
                    <p class="text-sm leading-tight m-2 text-gray-400">
                        Ammount: ₹ 4001201.
                    </p>
                    <p class="text-sm leading-tight m-2 text-gray-400">
                        Loan Status : ---
                    </p>
                </div>
                <div>
                    <button
                        class="text-xs m-2 font-semibold rounded-full px-4 py-1 leading-normal border-2 border-green-400 text-green hover:bg-green-400 hover:text-white"
                        >Call</button
                    >
                    <button
                        class="text-xs m-2 font-semibold rounded-full px-4 py-1 leading-normal border-2 border-green-400 text-green hover:bg-green-400 hover:text-white"
                        >Edit</button
                    >
                </div>
            </div>
        </div>
    </div> -->
</section>
