<script>
    import Topbar from "$lib/components/topbar.svelte";
    import SideBar from "$lib/components/sideBar.svelte";
    import "../../../app.css";
    import Spinner from "$lib/components/spinner.svelte";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    // export let form;
    // if (form.success){
    //     alert("Account Creation Successful")
    //     goto('/login')
    // }
</script>

<main>
    {#if $page.data.user}
        <Topbar />
        <SideBar />
        
    {:else}
        <Spinner />
    {/if}
</main>
