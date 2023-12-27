<script>
   
    import "../../../app.css";
    import Spinner from "$lib/components/spinner.svelte";
    import { page } from "$app/stores";
    import AdminSideBar from "$lib/components/adminSideBar.svelte";
    // export let form;
    // if (form.success){
    //     alert("Account Creation Successful")
    //     goto('/login')
    // }
</script>

<main>
    {#if $page.data.user.role === "admin"}
        <AdminSideBar />
        <div class=" mx-auto mt-20 lg:ml-64 px-4 ">
            <h2 class="text-xl font-normal tracking-tight text-gray-500 sm:text-4xl">DashBoard</h2>
            <div class="grid grid-cols-1 gap-5 sm:grid-cols-4 mt-4">
                <div class="bg-white overflow-hidden shadow sm:rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Total Website User</dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-blue-400">1.6M</dd>
                        </dl>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow sm:rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Total Broker's User</dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-blue-400">19.2K</dd>
                        </dl>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow sm:rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">All Broker</dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-blue-400">4.9K</dd>
                        </dl>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow sm:rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">Total users</dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-blue-400">166.7K</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 sm:px-6  overflow-auto lg:px-8 py-8">
                <h2 class="text-2xl font-bold mb-4">Example Datatable</h2>
                <table id="example" class="table-auto ">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">Name</th>
                            <th class="px-4 py-2">Position</th>
                            <th class="px-4 py-2">Office</th>
                            <th class="px-4 py-2">Age</th>
                            <th class="px-4 py-2">Start date</th>
                            <th class="px-4 py-2">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-4 py-2">Tiger Nixon</td>
                            <td class="border px-4 py-2">System Architect</td>
                            <td class="border px-4 py-2">Edinburgh</td>
                            <td class="border px-4 py-2">61</td>
                            <td class="border px-4 py-2">2011/04/25</td>
                            <td class="border px-4 py-2">$320,800</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Garrett Winters</td>
                            <td class="border px-4 py-2">Accountant</td>
                            <td class="border px-4 py-2">Tokyo</td>
                            <td class="border px-4 py-2">63</td>
                            <td class="border px-4 py-2">2011/07/25</td>
                            <td class="border px-4 py-2">$170,750</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Ashton Cox</td>
                            <td class="border px-4 py-2">Junior Technical Author</td>
                            <td class="border px-4 py-2">San Francisco</td>
                            <td class="border px-4 py-2">66</td>
                            <td class="border px-4 py-2">2009/01/12</td>
                            <td class="border px-4 py-2">$86,000</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Cedric Kelly</td>
                            <td class="border px-4 py-2">Senior Javascript Developer</td>
                            <td class="border px-4 py-2">Edinburgh</td>
                            <td class="border px-4 py-2">22</td>
                            <td class="border px-4 py-2">2012/03/29</td>
                            <td class="border px-4 py-2">$433,060</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Airi Satou</td>
                            <td class="border px-4 py-2">Accountant</td>
                            <td class="border px-4 py-2">Tokyo</td>
                            <td class="border px-4 py-2">33</td>
                            <td class="border px-4 py-2">2008/11/28</td>
                            <td class="border px-4 py-2">$162,700</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Brielle Williamson</td>
                            <td class="border px-4 py-2">Integration Specialist</td>
                            <td class="border px-4 py-2">New York</td>
                            <td class="border px-4 py-2">61</td>
                            <td class="border px-4 py-2">2012/12/02</td>
                            <td class="border px-4 py-2">$372,000</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Herrod Chandler</td>
                            <td class="border px-4 py-2">Sales Assistant</td>
                            <td class="border px-4 py-2">San Francisco</td>
                            <td class="border px-4 py-2">59</td>
                            <td class="border px-4 py-2">2012/08/06</td>
                            <td class="border px-4 py-2">$137,500</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Herrod Chandler</td>
                            <td class="border px-4 py-2">Sales Assistant</td>
                            <td class="border px-4 py-2">San Francisco</td>
                            <td class="border px-4 py-2">59</td>
                            <td class="border px-4 py-2">2012/08/06</td>
                            <td class="border px-4 py-2">$137,500</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Ashton Cox</td>
                            <td class="border px-4 py-2">Junior Technical Author</td>
                            <td class="border px-4 py-2">San Francisco</td>
                            <td class="border px-4 py-2">66</td>
                            <td class="border px-4 py-2">2009/01/12</td>
                            <td class="border px-4 py-2">$86,000</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Cedric Kelly</td>
                            <td class="border px-4 py-2">Senior Javascript Developer</td>
                            <td class="border px-4 py-2">Edinburgh</td>
                            <td class="border px-4 py-2">22</td>
                            <td class="border px-4 py-2">2012/03/29</td>
                            <td class="border px-4 py-2">$433,060</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Airi Satou</td>
                            <td class="border px-4 py-2">Accountant</td>
                            <td class="border px-4 py-2">Tokyo</td>
                            <td class="border px-4 py-2">33</td>
                            <td class="border px-4 py-2">2008/11/28</td>
                            <td class="border px-4 py-2">$162,700</td>
                        </tr>
                        <tr>
                            <td class="border px-4 py-2">Brielle Williamson</td>
                            <td class="border px-4 py-2">Integration Specialist</td>
                            <td class="border px-4 py-2">New York</td>
                            <td class="border px-4 py-2">61</td>
                            <td class="border px-4 py-2">2012/12/02</td>
                            <td class="border px-4 py-2">$372,000</td>
                        </tr>
            
            
                        <!-- Add more rows as needed -->
                    </tbody>
                </table>
            </div>
            <link rel="stylesheet" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">
            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://cdn.datatables.net/1.10.25/js/jquery.dataTables.min.js"></script>
            
            <script>
                $(document).ready(function() {
                    $('#example').DataTable({
                        // Add any customization options here
                    });
                });
            </script>
        </div>
    {:else}
        <Spinner />
    {/if}
</main>
