<script>
    import { onMount } from "svelte";

    onMount(async () => {
        const sidebar = document.querySelector("aside");
        const toggleButton = document.querySelector("#toggleSidebar");
        toggleButton.addEventListener("click", () => {
            sidebar.classList.toggle("-translate-x-full");
        });
    });
</script>

<body class="bg-gray-100">
    <!-- Sidebar -->
   

    <!-- Page Content -->
    <main class="lg:ml-16 lg:ml-64">
        <!-- Sticky Header -->
        

        <!-- Content -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
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

    <!-- JavaScript to toggle sidebar on small screens -->
</body>
