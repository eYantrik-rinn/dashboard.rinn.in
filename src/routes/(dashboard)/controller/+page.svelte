<script>
    import "../../../app.css";
    import ControllerSideBar from "$lib/components/controllerSideBar.svelte";
    import Spinner from "$lib/components/spinner.svelte";
    import { page } from "$app/stores";
</script>

<main>
    {#if $page.data.user.role === "controller"}
        <ControllerSideBar />
        {:else}
        <Spinner />
    {/if}
</main>
