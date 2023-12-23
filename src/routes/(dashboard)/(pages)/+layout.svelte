<script>
    import BrokerSidebar from '$lib/components/brokerSidebar.svelte';
    import ControllerSideBar from '$lib/components/controllerSideBar.svelte';
    import UserSideBar from "$lib/components/userSideBar.svelte";
    import "../../../app.css";
    import Spinner from "$lib/components/spinner.svelte";
    import { page } from "$app/stores";
</script>

<main>
    {#if $page.data.user.role === 'broker'}
        <BrokerSidebar />
        <slot ></slot>
    {:else if $page.data.user.role === 'controller' }
    <ControllerSideBar />
    <slot ></slot>
    {:else if $page.data.user.role === 'admin' }
    <!-- <SideBar /> -->
    <slot ></slot>
    
    {:else if $page.data.user.role === 'user' }
    <UserSideBar />
    <slot ></slot>
    {/if}
   
</main>
