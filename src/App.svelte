<script lang="ts">
	import Button from './components/Button.svelte';
	import Background from './components/Background.svelte';
	import Input from './components/Input.svelte';
	import Selectoption from './components/Selectoption.svelte';
	let selected;
</script>

<div class="relative w-screen h-screen">
	<Background theme="red-black" class="w-full h-full">
		<nav class="tui-nav">
			<ul>
				<li class="tui-dropdown">
					<span class="red-168-text">F</span>ile
					<div class="tui-dropdown-content">
						<ul>
							<li><a href="#!"><span class="red-168-text">N</span>ew</a></li>
						</ul>
					</div>
				</li>
			</ul>
		</nav>
		<div class="w-55vw tui-window h-70vh absolute-center ">
			<fieldset class="tui-fieldset  h-inherit">
				<legend class="center">Register</legend>
				<button class="tui-fieldset-button tui-bg-green-black left"><span class="red-255-text">■</span></button>
				<button class="tui-fieldset-button tui-bg-green-black"><span class="red-255-text">↕</span></button>
				<div class="content w-96% h-92%   absolute">
					<div class="row">
						<div class="col s12 l12">
							<Input text="Nombre.....:" type="text" />
						</div>
						<div class="col s12 l12 mt-2">
							<Input text="Apellido...:" type="text" />
						</div>
						<div class="col s12 l12 mt-2">
							<Input text="CID........:" type="text" />
						</div>
						<div class="col s12 l12 mt-2">
							<Input text="Ubicacion..:" type="text" />
						</div>
						<div class="col s12 l12 mt-2">
							<Input text="Informacion:" type="textarea" />
						</div>
						<div class="col s12 l12 mt-2">
							<Input bind:select="{selected}" text="Informacion:" type="select">
								<Selectoption text="Algo" value="15" />
								<Selectoption text="AlgoMas" value="152" />
							</Input>
						</div>
					</div>
				</div>
			</fieldset>
		</div>
	</Background>
</div>

<style>
	* {
		font-family: 'DOS';
	}
</style>
