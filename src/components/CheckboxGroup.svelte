<script lang="ts">
	import {onMount, setContext, afterUpdate, createEventDispatcher} from 'svelte';
	import {writable} from 'svelte/store';
	const dispatch = createEventDispatcher();
	export let value = undefined;
	export let checked = false;
	const selectedValue = writable(value);
	setContext('CheckboxGroup', {
		selectedValue,
		changeValue: ({checked, value}) => {
			if (checked) {
				selectedValue.set(value);
			}
		},
		update: (values: any) => {
			value = values;
		},
	});

	afterUpdate(() => {
		$selectedValue = value;
	});
	selectedValue.subscribe((values) => {
		value = values;
		dispatch('change', value);
	});
	onMount(() => {
		$selectedValue = value;
	});
</script>

<fieldset class="tui-input-fieldset">
	<slot />
</fieldset>
