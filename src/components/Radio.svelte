<script lang="ts">
	import {getContext} from 'svelte';
	import {writable} from 'svelte/store';
	export let checked = false;
	export let text = '';
	export let value = '';
	export let id = '';
	const ctx = getContext('RadioButtonGroup');
	const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : undefined);
	if (ctx) {
		ctx.add({checked, value});
	}

	$: checked = $selectedValue === value;
</script>

<label class="tui-radio"
	>{text}
	<input
		checked="{checked}"
		id="{id}"
		bind:value
		name="{id}"
		type="radio"
		on:change="{() => {
			if (ctx) {
				ctx.update(value);
			}
		}}"
	/>
	<span></span>
</label>
