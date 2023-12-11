<script lang="ts">
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

<svelte:head>
	<title>Dashboard</title>
</svelte:head>
<main>
	<slot />
</main>
