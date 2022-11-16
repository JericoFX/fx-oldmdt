<script lang="ts">
	import {getContext, onMount} from 'svelte';

	export let text = '';
	export let value = '';
	let selected = false;
	const ctx = getContext('Select');
	const unsubscribe = ctx.selectedValue.subscribe((currentValue) => {
		selected = currentValue === value;
	});
	onMount(() => {
		return () => unsubscribe();
	});
</script>

<option selected="{selected}" value="{value}">{text}</option>
