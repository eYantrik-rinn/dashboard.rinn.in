<script>
    let selection = "";
    let bt = false;
    $: {
        if (selection == "Balance Transfer") {
            bt = true;
        } else {
            bt = false;
        }
    }
    let selectBank = ''
    let bank = false;
    $: {
        if (selectBank == "other") {
            bank = true;
        } else {
            bank = false;
        }
    }
    // let other = false;
    // function handleBank(event) {
    //     if (document.getElementById("preferredBank")?.value === "") {
    //         other = true;
    //     } else {
    //         other = false;
    //     }
    // }
</script>

<div class="mt-20 lg:ml-64 p-10">
    <h1 class="mb-8 font-extrabold text-4xl">Apply For Loan</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form>
            <div>
                <label class="block font-semibold" for="name">Name</label>
                <input
                    class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                    id="name"
                    type="text"
                    name="name"
                    required
                    
                />
            </div>

            <div class="mt-4">
                <label class="block font-semibold" for="email">Email</label>
                <input
                    class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                    id="email"
                    type="email"
                    name="email"
                    required
                />
            </div>

            <div class="mt-4">
                <label class="block font-semibold" for="password"
                    >Mobile No.</label
                >
                <input
                    class=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                    id="Mobile"
                    type="number"
                    name="Mobile"
                    required
                />
            </div>
            <div class="mt-4 mb-4">
                <label class="block font-semibold" for="LoanType"
                    >Loan Type</label
                >
                <select
                bind:value={selection}
                    name="LoanType"
                    id="LoanType"
                    class=" w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 appearance-none"
                >
                    <option value="Home Loan">Home Loan</option>
                    <option value="Balance Transfer">Balance Transfer</option>
                    <option value="Personal Loan">Personal Loan</option>
                </select>
                <!-- <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 " id="email" type="email" name="email" required> -->
            </div>
            {#if bt}
                <div class="mb-5">
                    <label
                        for="fromBank"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                    Enter Existing Bank Name
                    </label>
                    <input
                        type="text"
                        name="fromBank"
                        id="fromBank"
                        placeholder=""
                        class=" w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 appearance-none"
                    />
                </div>
            {/if}
            <div class="mt-4 relative">
                <label class=" font-semibold" for="password"
                    >Enter Loan Ammount</label
                >
                <div
                    class="absolute inset-y-0 top-6 left-1
                            flex items-center
                            pointer-events-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="gray"
                        ><path
                            d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"
                        ></path></svg
                    >
                </div>

                <input
                    type="number"
                    name="loanAmmount"
                    id="loanAmmount"
                    data-type="currency"
                    class=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl pl-6 p-4 border-none block mt-1"
                    placeholder=""
                />
            </div>
            

            <div class="mt-4 mb-4">
                <label class="block font-semibold" for="password"
                    >Preferred Bank</label
                >
                <select
                            name="preferredBank"
                            bind:value={selectBank}
                            id="preferredBank"
                            class=" appearance-none w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                        >
                            <option value="HDFC Bank">HDFC Bank</option>
                            <option value="PNB Bank">PNB Bank</option>
                            <option value="SBI Bank">SBI Bank</option>
                            <option value="other">Any Other Bank</option>
                        </select>
                <!-- <input
                    class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                    id="password"
                    type="password"
                    name="password"
                    required
                    autocomplete="new-password"
                /> -->
            </div>
            {#if bank}
                <div class="mb-5">
                    <label
                        for="otherBank"
                        class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                        Enter the preferred bank's name!
                    </label>
                    <input
                        type="text"
                        name="otherBank"
                        id="otherBank"
                       
                        class="appearance-none w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                    />
                </div>
            {/if}
            <!-- <div class="mt-4">
                <label class="block font-semibold" for="email">Email</label>
                <input
                    class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1"
                    id="email"
                    type="email"
                    name="email"
                    required
                />
            </div> -->

            
            <div class="flex items-center justify-between mt-8">
                <button
                    type="submit"
                    class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >Apply</button
                >
            </div>
        </form>

        <aside class="">
            <div class="bg-gray-100 p-8 rounded">
                <h2 class="font-bold text-2xl">Instructions</h2>
                <ul class="list-disc mt-4 list-inside">
                    <li class="m-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis, expedita aliquam. Necessitatibus
                        facere, optio vitae nulla dolor modi omnis hic non
                        assumenda aliquid rerum nobis harum quidem doloribus
                        illo rem? Repellendus sint accusantium hic,
                    </li>
                    <li class="m-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis, expedita aliquam. Necessitatibus
                        facere, optio vitae nulla dolor modi omnis hic non
                        assumenda aliquid rerum nobis harum quidem doloribus
                        illo rem? Repellendus sint accusantium hic,
                    </li>
                    <li class="m-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis, expedita aliquam. Necessitatibus
                        facere, optio vitae nulla dolor modi omnis hic non
                        assumenda aliquid rerum nobis harum quidem doloribus
                        illo rem? Repellendus sint accusantium hic,
                    </li>
                    <li class="m-2">
                        Users must not use offensive, vulgar, or otherwise
                        inappropriate language in their username or profile
                        information
                    </li>
                    <li class="m-2">
                        Users must not create multiple accounts for the same
                        person.
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</div>
