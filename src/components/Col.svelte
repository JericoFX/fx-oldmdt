<script lang="ts">
	export let number = 3;
	export let margin = false;
	export let marginType = ""
</script>

<div class="{`col s${number} m${number} s${number} ${$$props.class} `}">
	{#if margin}
		<div class="{`${marginType}`}">
			<slot />
		</div>
	{:else}
		<slot />
	{/if}
</div>
