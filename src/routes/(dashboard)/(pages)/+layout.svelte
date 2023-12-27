<script>
    import BrokerSidebar from "$lib/components/brokerSidebar.svelte";
    import ControllerSideBar from "$lib/components/controllerSideBar.svelte";
    import UserSideBar from "$lib/components/userSideBar.svelte";
    import AdminSideBar from "$lib/components/adminSideBar.svelte";
    import "../../../app.css";
    import Spinner from "$lib/components/spinner.svelte";
    import { page } from "$app/stores";
</script>

<main>
    {#if $page.data.user.role === "broker"}
        <BrokerSidebar />
        <slot />
    {:else if $page.data.user.role === "controller"}
        <ControllerSideBar />
        <slot />
    {:else if $page.data.user.role === "admin"}
        <AdminSideBar data />
        <slot />
    {:else if $page.data.user.role === "user"}
        <UserSideBar data/>
        <slot />
    {/if}
</main>
