<script>
	import Spinner from '$lib/components/spinner.svelte';
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	if (!$page.data.user) {
		onMount(async () => {
			goto("/login");
		});
	}
	if ($page.data.user) {
		onMount(async () => {
			goto(`/${$page.data.user.role}`);
		});
	}
</script>
<main>
	<Spinner />
</main>