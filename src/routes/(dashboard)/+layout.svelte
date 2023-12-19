<script>
    import '../../app.css'
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { onMount } from 'svelte';
    import Spinner from "$lib/components/spinner.svelte";
 
    if(!$page.data.user){
        onMount(async () => {
			goto("/");
		});
       
    }else{
        // onMount(async () => {
        //     goto(`${$page.data.user.role}`)
		// });
    }
</script>
<!-- <main>
    <Spinner />
</main> -->
<slot />
