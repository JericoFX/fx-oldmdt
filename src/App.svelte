<script lang="ts">
	import Button from './components/Button.svelte';
	import Background from './components/Background.svelte';
	import Input from './components/Input.svelte';
	import Selectoption from './components/Selectoption.svelte';
	import Navbar from './components/Navbar.svelte';
	import NavbarItem from './components/NavbarItem.svelte';
	import NavbarDropDown from './components/NavbarDropDown.svelte';
	import Grid from './components/Grid.svelte';
	import Row from './components/Row.svelte';
	import Col from './components/Col.svelte';
	import Window from './components/Window.svelte';
	import Fieldset from './components/Fieldset.svelte';
	import {text} from 'svelte/internal';
	let selected;
</script>

<div class="relative w-screen h-screen select-none">
	<Background theme="red-black" class="w-full h-full">
		<Navbar dropdown>
			<NavbarDropDown text="Archivo">
				<NavbarItem text="Nuevo Reporte" />
				<NavbarItem text="Abrir Reporte" />
				<NavbarItem text="Buscar Reporte" />
			</NavbarDropDown>
		</Navbar>
		<Window width="{70}" height="{70}" center>
			<Fieldset sharedBackground textSize="{2}" full title="Registro Nuevo Reporte" centerText>
				<Grid class="w-96% h-92%   absolute">
					<Row>
						<Col number="{12}">
							<Input text="Nombre.....:" type="text" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input text="Apellido...:" type="text" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input text="CID........:" type="text" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input text="Ubicacion..:" type="text" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input text="Informacion.:" type="textarea" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input bind:select="{selected}" text="Informacion.:" type="select">
								<Selectoption text="Algo" value="15" />
								<Selectoption text="AlgoMas" value="152" />
							</Input>
						</Col>
					</Row>
				</Grid>
			</Fieldset>
		</Window>
		<!-- <div class="w-55vw tui-window h-70vh absolute-center ">
			<fieldset class="tui-fieldset  h-inherit">
				<legend class="center">Register</legend>
				<button class="tui-fieldset-button tui-bg-green-black left"><span class="red-255-text">■</span></button>
				<button class="tui-fieldset-button tui-bg-green-black"><span class="red-255-text">↕</span></button>
				<Grid class="w-96% h-92%   absolute">
					<Row>
						<Col number="{12}">
							<Input text="Nombre.....:" type="text" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input text="Apellido...:" type="text" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input text="CID........:" type="text" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input text="Ubicacion..:" type="text" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input text="Informacion:" type="textarea" />
						</Col>
						<Col margin marginType="mt-2" number="{12}">
							<Input bind:select="{selected}" text="Informacion:" type="select">
								<Selectoption text="Algo" value="15" />
								<Selectoption text="AlgoMas" value="152" />
							</Input>
						</Col>
					</Row>
				</Grid>
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
		</div> -->
	</Background>
</div>

<style>
	* {
		font-family: 'DOS';
	}
</style>
