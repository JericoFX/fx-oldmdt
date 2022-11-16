<script lang="ts">
	export let text = '';
	export let href = '';
</script>

<li>
	<a href="{href}">
		<span {...$$props}><span class="red-168-text">{text.slice(0, 1)}</span>{text.slice(1, 15)}</span>
	</a>
</li>
