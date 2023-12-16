<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
    import { page } from '$app/stores';
	onMount(() => {
		// if ($page.data.user) {
		// 	goto(`/${$page.data.user.role}`);
		// }
	});
</script>

<main>
	<slot />
</main>
