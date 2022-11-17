<script lang="ts">
	import {beforeUpdate, createEventDispatcher, onMount, setContext} from 'svelte';
	import {writable} from 'svelte/store';
	export let selected = undefined;
	const dispatch = createEventDispatcher();
	const selectedValue = writable(selected);
	setContext('RadioButtonGroup', {
		selectedValue,
		add: ({checked, value}) => {
			if (checked) {
				selectedValue.set(value);
			}
		},
		update: (value: any) => {
			selected = value;
		},
	});
	onMount(() => {
		$selectedValue = selected;
	});
	beforeUpdate(() => {
		$selectedValue = selected;
	});

	selectedValue.subscribe((value) => {
		selected = value;
		dispatch('change', value);
	});
</script>

<fieldset class="tui-input-fieldset">
	<slot />
</fieldset>
