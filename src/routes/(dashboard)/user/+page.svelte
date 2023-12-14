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

        {:else}
        <Spinner />
    {/if}
</main>
