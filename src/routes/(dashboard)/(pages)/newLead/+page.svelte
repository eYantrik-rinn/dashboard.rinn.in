<script>
   
    export let form;
    let other = false;
    function handleBank(event) {
        if (document.getElementById("preferredBank")?.value === "other") {
            other = true;
        }else{
            other = false
        }
    }
</script>

<div class="lg:ml-64 flex items-center justify-center py-24 m-auto">
    <!-- Author: FormBold Team -->
    <div class="mx-auto w-full max-w-[550px] bg-white border rounded-lg p-5">
        <h1 class="font-bold font-serif text-3xl text-center my-10">
           Add New Lead
        </h1>
        <form method="post">
            <div class="mb-5">
                <label
                    for="name"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Leads Full Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                    for="phone"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Phone Number
                </label>
                <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter Leads phone number"
                    class=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                    for="email"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                >
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Leads email"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
            </div>
            <div class="mb-5">
                <label
                    for="LoanType"
                    class="mb-3 block text-base font-medium text-[#07074D]"
                    >Loan Type</label
                >
                <select
                    name="LoanType"
                    id="LoanType"
                    class=" appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                    <option selected>Choose Loan Type</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Balance Transfer">Balance Transfer</option>
                    <option value="Personal Loan">Personal Loan</option>
                </select>
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5 relative">
                        <label
                            for="loanAmmount"
                            class="  mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Loan Ammount
                        </label>

                        <input
                            type="number"
                            name="loanAmmount"
                            id="loanAmmount"
                            class=" [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            placeholder="Enter Loan Ammount"
                        />
                        <div class="absolute inset-y-0 top-9 left-1 
                            flex items-center  
                            pointer-events-none"> 
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="gray"
                            ><path
                                d="M17 6V4H6v2h3.5c1.302 0 2.401.838 2.815 2H6v2h6.315A2.994 2.994 0 0 1 9.5 12H6v2.414L11.586 20h2.828l-6-6H9.5a5.007 5.007 0 0 0 4.898-4H17V8h-2.602a4.933 4.933 0 0 0-.924-2H17z"
                            ></path></svg
                        >
                </div> 
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label
                            for="preferredbank"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                            >Preferred Bank</label
                        >
                        <select
                            name="preferredBank"
                            on:change={(event) => handleBank()}
                            id="preferredBank"
                            class=" appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                            <option selected>Choose a bank</option>
                            <option value="HDFC Bank">HDFC Bank</option>
                            <option value="PNB Bank">PNB Bank</option>
                            <option value="SBI Bank">SBI Bank</option>
                            <option value="other">Any Other Bank</option>
                        </select>
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5"></div>
                </div>
            </div>
            {#if other}
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
                        placeholder="Enter preferred bank's name"
                        class="appearance-none w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                </div>
            {/if}
            <div>
                <button
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                    Submit Lead
                </button>
            </div>
             
        </form>
    </div>
</div>
{#if form?.success}
    <div
        id="toast-bottom-right"
        class="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
        role="alert"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40px"
            height="40px"
            viewBox="0 0 48 48"
        >
            <linearGradient
                id="I9GV0SozQFknxHSR6DCx5a_70yRC8npwT3d_gr1"
                x1="9.858"
                x2="38.142"
                y1="9.858"
                y2="38.142"
                gradientUnits="userSpaceOnUse"
                ><stop offset="0" stop-color="#21ad64"></stop><stop
                    offset="1"
                    stop-color="#088242"
                ></stop></linearGradient
            ><path
                fill="url(#I9GV0SozQFknxHSR6DCx5a_70yRC8npwT3d_gr1)"
                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
            ></path><path
                d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z"
                opacity=".05"
            ></path><path
                d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z"
                opacity=".07"
            ></path><path
                fill="#fff"
                d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"
            ></path>
        </svg>
        <div class="text-sm flex font-normal">Registration Successful.</div>
        <svg
            on:click={() => (form.success = false)}
            class="absolute top-2 right-0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 812 667"
            width="25px"
            height="25px"
            fill="red"
            ><path
                fill-rule="nonzero"
                d="M58.327 0h281.809c-12.343 13.848-23.287 27.375-32.932 40.444H58.327c-4.929 0-9.415 2.01-12.656 5.227a17.95 17.95 0 00-5.227 12.657v350.705c0 4.868 2.04 9.331 5.288 12.579 3.264 3.263 7.75 5.304 12.595 5.304h395.345c4.815 0 9.286-2.056 12.557-5.327 3.271-3.271 5.326-7.742 5.326-12.556V173.301A950.502 950.502 0 00512 155.387v253.646c0 15.995-6.611 30.592-17.173 41.154-10.562 10.562-25.159 17.173-41.155 17.173H58.327c-15.996 0-30.623-6.58-41.193-17.15C6.595 439.671 0 425.082 0 409.033V58.328c0-16.012 6.565-30.57 17.111-41.132l.084-.084C27.757 6.565 42.316 0 58.327 0zm178.36 158.589c6.833 7.054 14.49 15.285 22.63 24.334a902.98 902.98 0 0118.494-17.845c57.166-53.59 121.141-99.314 177.703-120.561 5.732-2.155 12.136.734 14.291 6.466a11.11 11.11 0 01-2.889 12.098c-23.515 25.09-50.562 51.51-78.786 79.077-29.148 28.475-59.565 58.197-87.904 88.117a1866.704 1866.704 0 0119.779 24.127c26.099 32.405 49.929 64.32 62.668 85.497 3.142 5.25 1.43 12.067-3.821 15.208a11.024 11.024 0 01-7.482 1.422l-34.888-4.425a11.06 11.06 0 01-7.451-4.318c-19.358-25.664-41.613-51.793-65.305-77.304-25.518 29.569-47.513 58.87-62.729 86.895-2.064 3.798-6.038 5.9-10.088 5.778l-47.62-.933c-6.115-.091-10.991-5.135-10.899-11.249a11.253 11.253 0 011.185-4.853c18.953-37.25 49.386-79.673 85.901-120.988-33.864-33.1-68.759-63.815-101.133-89.447-4.791-3.783-5.609-10.761-1.826-15.553a10.96 10.96 0 016.572-3.997c25.939-5.128 46.451-2.69 64.755 5.327 17.86 7.833 32.992 20.78 48.843 37.127z"
            /></svg
        >
    </div>
{/if}

<style>
   
</style>
