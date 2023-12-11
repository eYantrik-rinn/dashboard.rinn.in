<script>
    import '../app.css'
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import Spinner from "$lib/components/spinner.svelte";
    if(!$page.data.user){
        goto("/")
    }else{
        goto(`${$page.data.user.role}`)
    }
</script>
<!-- <main>
    <Spinner />
</main> -->
<slot />