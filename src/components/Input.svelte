<script lang="ts">
	import {afterUpdate, onMount, setContext} from 'svelte';
	import {writable} from 'svelte/store';
	/**
	 * Type of item do you want to use
	 */
	export let type: 'text' | 'number' | 'password' | 'color' | 'date' | 'select' | 'datetime-local' | 'checkbox' | 'radio' | 'textarea' | 'multiple' = 'text';
	/**
	 * Check if the item is disabled, false default
	 */
	export let disabled = false;
	/**
	 * For textearea, number of rows and cols
	 * rows {default: 2}
	 * cols {default: 4}
	 */
	export let rows = 2;

	export let cols = 4;
	/**
	 * Text Descriptive
	 */
	export let text = '';
	/**
	 * Bind the selected value from a <select>
	 */
	export let select = undefined;

	const selectedValue = writable(select);
	setContext('Select', {
		selectedValue,
	});
	afterUpdate(() => {
		select = $selectedValue;
	});
	const handleChange = ({target}) => {
		let value = target.value;
		selectedValue.set(value);
	};
</script>

<div {...$$props}>
	{#if type === 'text'}
		<label class="nathing">
			{text}
			<input disabled="{disabled}" class="tui-input" type="text" />
			<span></span>
		</label>
	{:else if type === 'checkbox'}
		<label class="tui-checkbox">
			{text}
			<input type="checkbox" />
			<span></span>
		</label>
	{:else if type === 'textarea'}
		<label class="tui-textarea">
			{text}
			<textarea rows="{rows}" cols="{cols}" class="tui-input"></textarea>
			<span></span>
		</label>
	{:else if type === 'select'}
		<label>
			{text}
			<select on:change="{handleChange}" class="tui-input">
				<slot />
			</select>
		</label>
	{/if}
</div>

<style>
	textarea {
		resize: none;
	}
</style>
