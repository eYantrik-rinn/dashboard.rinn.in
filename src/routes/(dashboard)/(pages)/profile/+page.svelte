<script>
    import { page } from "$app/stores";

    let userData = JSON.parse($page.data.user.document);
</script>

<div class="bg-gray-200 h-screen lg:ml-64 mt-20">
    <div class="container mx-auto py-8">
        <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div class="col-span-4 sm:col-span-3">
                <div class="bg-white shadow rounded-lg p-6">
                    <div class="flex flex-col items-center">
                        <!-- <img src="https://randomuser.me/api/portraits/men/94.jpg" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"> -->

                        <h1 class="text-xl font-bold">{userData.name}</h1>
                        <p class="text-gray-700">{userData.username}</p>
                        <!-- <div class="mt-6 flex flex-wrap gap-4 justify-center">
                            <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Call Now</a>
                            <a href="#" class="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"></a>
                        </div> -->
                    </div>
                    <hr class="my-6 border-t border-gray-300" />
                    <div class="flex flex-col">
                        <span
                            class="text-gray-700 uppercase font-bold tracking-wider mb-2"
                            >Contact Details</span
                        >
                        <ul>
                            <li class="mb-2">ID: {userData._id}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-span-4 sm:col-span-9">
                <div class="bg-white shadow rounded-lg p-6">
                    <h2 class="text-xl font-bold mb-4">About Me</h2>
                    <p class="text-gray-700"></p>

                    <h2 class="text-xl font-bold mt-6 mb-4">Experience</h2>
                    <!-- <div class="mb-6">
                        <div
                            class="flex justify-between flex-wrap gap-2 w-full"
                        >
                            <span class="text-gray-700 font-bold"
                                >Web Developer</span
                            >
                            <p>
                                <span class="text-gray-700 mr-2"
                                    >at ABC Company</span
                                >
                                <span class="text-gray-700">2017 - 2019</span>
                            </p>
                        </div>
                        <p class="mt-2"></p>
                    </div> -->
                    <!-- <div class="mb-6">
                        <div
                            class="flex justify-between flex-wrap gap-2 w-full"
                        >
                            <span class="text-gray-700 font-bold"
                                >Web Developer</span
                            >
                            <p>
                                <span class="text-gray-700 mr-2"
                                    >at ABC Company</span
                                >
                                <span class="text-gray-700">2017 - 2019</span>
                            </p>
                        </div>
                        <p class="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed finibus est vitae tortor ullamcorper, ut
                            vestibulum velit convallis. Aenean posuere risus non
                            velit egestas suscipit.
                        </p>
                    </div> -->
                    <!-- <div class="mb-6">
                        <div
                            class="flex justify-between flex-wrap gap-2 w-full"
                        >
                            <span class="text-gray-700 font-bold"
                                >Web Developer</span
                            >
                            <p>
                                <span class="text-gray-700 mr-2"
                                    >at ABC Company</span
                                >
                                <span class="text-gray-700">2017 - 2019</span>
                            </p>
                        </div>
                        <p class="mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed finibus est vitae tortor ullamcorper, ut
                            vestibulum velit convallis. Aenean posuere risus non
                            velit egestas suscipit.
                        </p> 
                    </div>-->
                </div>
            </div>
        </div>
    </div>
</div>
