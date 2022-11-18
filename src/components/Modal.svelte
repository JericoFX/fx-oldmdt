<script lang="ts">
	export let color: 'red-168' | 'blue-168' = 'red-168';
	export let fieldset = false;
	export let legendText = '';
	export let id = ' ';
	export let open = true;
</script>

{#if open}
	<div class="tui-overlap absolute-center "></div>
	<div id="{id}" class="{`tui-modal absolute-center ${$$props.class}`}">
		<div class="{`tui-window absolute-center ${$$props.class}  ${color}`}">
			{#if fieldset}
				<fieldset class="{`tui-fieldset ${$$props.class}`}">
					<legend class="orange-255 white-255-text">{legendText}</legend>
					<slot />
				</fieldset>
			{/if}
		</div>
	</div>
{/if}
