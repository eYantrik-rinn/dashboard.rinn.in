<form action="/BKregistration" method="post">
    <div
        class="mt-10 lg:ml-64 min-h-screen p-6 bg-gray-100 flex items-center justify-center"
    >
        <div class="container max-w-screen-lg mx-auto">
            <div>
                <h2 class="font-semibold text-xl text-gray-600 mb-6">
                    Broker Registration Form
                </h2>
                <!-- <p class="text-gray-500 mb-6">
                    Add New Broker Account
                </p> -->

                <div
                    class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6"
                >
                    <div
                        class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3"
                    >
                        <div class="text-gray-600">
                            <p class="font-medium text-lg">
                                Personal Details
                            </p>
                            <p>Please fill out all the fields.</p>
                        </div>

                        <div class="lg:col-span-2">
                            <div
                                class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                            >
                                <div class="md:col-span-5">
                                    <label for="full_name">Full Name</label>
                                    <input
                                        type="text"
                                        name="full_name"
                                        id="full_name"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        value=""
                                        placeholder="Enter Full Name"
                                    />
                                </div>

                                <div class="md:col-span-5">
                                    <label for="email">Mobile No.</label>
                                    <input
                                        type="number"
                                        name="number"
                                        id="number"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        value=""
                                        placeholder="9876543210"
                                    />
                                </div>
                                <div class="md:col-span-5">
                                    <label for="email">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        value=""
                                        placeholder="email@domain.com"
                                    />
                                </div>
                                <div class="md:col-span-5">
                                    <label for="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        value=""
                                        placeholder="********"
                                    />
                                </div>

                                <div class="md:col-span-3">
                                    <label for="address"
                                        >Address / Street</label
                                    >
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        value=""
                                        placeholder="1/8, Shanti Building, Rc Marg, Chembur (east)"
                                    />
                                </div>

                                <div class="md:col-span-2">
                                    <label for="city">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        value=""
                                        placeholder=""
                                    />
                                </div>

                                <!-- <div class="md:col-span-2">
                                    <label for="country"
                                        >Country / region</label
                                    >
                                    <div
                                        class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                                    >
                                        <input
                                            name="country"
                                            id="country"
                                            placeholder="Country"
                                            class=" px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                            value="IN-India"
                                           disabled
                                        />
                                    </div>
                                </div> -->

                                <div class="md:col-span-2">
                                    <label for="state"
                                        >State / province</label
                                    >
                                    <div
                                        class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
                                    >
                                        <input
                                            name="state"
                                            id="state"
                                            placeholder="State"
                                            class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                                            value=""
                                        />
                                    </div>
                                </div>

                                <div class="md:col-span-1">
                                    <label for="zipcode">Zipcode</label>
                                    <input
                                        type="text"
                                        name="zipcode"
                                        id="zipcode"
                                        class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        placeholder=""
                                        value=""
                                    />
                                </div>
                                <div class="md:col-span-5 text-right">
                                    <div class="inline-flex items-end">
                                        <button
                                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            >Submit</button
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>