<script>
    import Topbar from "$lib/components/topbar.svelte";
    import SideBar from "$lib/components/userSideBar.svelte";
    import "../../../app.css";
    import Spinner from "$lib/components/spinner.svelte";
    import { page } from "$app/stores";
</script>

<main>
    {#if $page.data.user}
        <Topbar />
        <SideBar />
        {:else}
        <Spinner />
    {/if}
</main>
