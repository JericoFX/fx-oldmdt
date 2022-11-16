<script lang="ts">
	/**
	 * Texto que va en el titulo
	 */
	export let text = '';
	/**
	 * Link para donde va
	 */
	export let href = '';
</script>

<li>
	<a href="{href}">
		<span {...$$props}><span class="red-168-text">{text.slice(0, 1)}</span>{text.slice(1, 15)}</span>
	</a>
</li>
