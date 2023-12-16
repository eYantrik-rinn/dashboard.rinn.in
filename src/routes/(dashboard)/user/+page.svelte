<script>
    import Topbar from "$lib/components/topbar.svelte";
    import SideBar from "$lib/components/sideBar.svelte";
    import "../../../app.css";
    import Spinner from "$lib/components/spinner.svelte";
    import { page } from "$app/stores";
</script>

<main>
    {#if $page.data.user }

        <SideBar />
        
    <!-- Page Content -->
    <main class="lg:ml-16 lg:ml-64">
        <!-- Sticky Header -->
        <!-- <header
            class="bg-white shadow-lg p-4 lg:px-8 lg:py-4 lg:sticky lg:top-0 lg:z-20 flex justify-between"
        >
            <div class="flex items-center">
                <div class="w-1/2">
                    <input
                        type="text"
                        class="w-full border rounded p-2"
                        placeholder="Search Items for your use..."
                    />
                </div>
            </div>
            <div class="flex items-center mt-4 lg:mt-0">
                <div class="ml-4 lg:ml-0">
                    <button
                        class="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                        >Notifications</button
                    >
                </div>
            </div>
        </header> -->

        <!-- Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20 p-4">
            <!-- Tiles -->
            <div class="bg-white rounded-lg shadow p-4">
                <!-- Tile content goes here -->
                <h2 class="text-xl font-semibold">Tile 1</h2>
                <p>This is some content for Tile 1.</p>
            </div>

            <!-- Table -->
            <div class="bg-white rounded-lg shadow p-4">
                <!-- Table content goes here -->
                <h2 class="text-xl font-semibold">Table</h2>
                <table class="min-w-full border-collapse table-auto">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 bg-gray-100 text-left">Name</th
                            >
                            <th class="px-6 py-3 bg-gray-100 text-left"
                                >Email</th
                            >
                            <th class="px-6 py-3 bg-gray-100 text-left">Role</th
                            >
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                >John Doe</td
                            >
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                >john@ex.com</td
                            >
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                >Admin</td
                            >
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                >Jane Smith</td
                            >
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                >jane@ex.com</td
                            >
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                >User</td
                            >
                        </tr>
                        <tr>
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                >Bob Johnson</td
                            >
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                >bob@ex.com</td
                            >
                            <td
                                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
                                >User</td
                            >
                        </tr>
                        <!-- Add more rows as needed -->
                    </tbody>
                </table>
            </div>
        </div>
    </main>
    
        {:else}
        <Spinner />
    {/if}
</main>
