<script>
    import BrokerSidebar from "$lib/components/BrokerSideBar.svelte";
    import SideBar from "$lib/components/sideBar.svelte";
    import "../../../app.css";
    import Spinner from "$lib/components/spinner.svelte";
    import { page } from "$app/stores";
</script>

<main>
    {#if $page.data.user.role === 'broker'}
        <BrokerSidebar />
        <slot ></slot>
    {:else if $page.data.user.role === 'admin' }
    <SideBar />
    <slot ></slot>
    {/if}
   
</main>
