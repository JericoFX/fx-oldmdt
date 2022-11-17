<script lang="ts">
	import {getContext, setContext} from 'svelte';
	import {writable} from 'svelte/store';
	export let checked = false;
	export let text = '';
	export let id = '';
	export let value = '';
	export let textSize = 1;
	const ctx = getContext('CheckboxGroup');
	const selectedValue = ctx ? ctx.selectedValue : writable(checked ? value : undefined);
	if (ctx) {
		ctx.changeValue({checked, value});
	}
	$: checked = $selectedValue === value;
</script>

<label class="tui-checkbox">
	<div class="{`ml-2`}" style="{`font-size:${textSize}vw`}">{text}</div>
	<input
		id="{id}"
		name="{id}"
		value="{value}"
		checked="{checked}"
		class="tui-input "
		type="checkbox"
		on:change="{() => {
			if (ctx) {
				ctx.update(value);
			}
		}}"
	/>
	<span></span>
</label>
