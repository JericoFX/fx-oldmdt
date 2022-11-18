<script lang="ts">
	import {Button, Background, Input, Navbar, NavbarDropDown, NavbarItem, Window, Fieldset, CheckboxGroup, Checkbox} from './components';
	import Modal from './components/Modal.svelte';
	import Panel from './components/Panel.svelte';
	let selected;
	let g;
	let placa = false;
	let openModal = false;
</script>

<div class="relative w-screen h-screen select-none">
	<Background theme="red-black" class="w-full h-full">
		<Navbar dropdown>
			<NavbarDropDown text="Archivo">
				<NavbarItem text="Nuevo Reporte" />
				<NavbarItem text="Abrir Reporte" />
				<NavbarItem text="Buscar Reporte" />
			</NavbarDropDown>
			<NavbarItem text="Cerrar Reporte" />
		</Navbar>
		<Window width="{50}" height="{70}" center>
			<Fieldset sharedBackground textSize="{2}" full title="Nuevo Reporte" centerText>
				<table class="tui-table-grid w-full h-full">
					<tbody>
						<tr>
							<td rowspan="2" width="70%" class="mt-3">
								<br /><Input text="Nombre...........:" type="text" />
								<br /><Input text="Apellido.........:" type="text" />
								<br /><Input text="CID..............:" type="text" />
								<br /><Input text="Trabajo..........:" type="text" />
								<br /><Input text="Rango............:" type="text" />
								<br /><Input text="Localizacion.....:" type="text" />
								<br /><Checkbox textSize="{1.5}" bind:checked="{placa}" text="Vehiculo.......:" value="1" />
								{#if placa}
									<br /><Input disabled="{!placa}" text="Placa............:" type="text" />
								{/if}
								<br /><Input text="Observaciones....:" type="textarea" />
							</td>
							<td width="30%" height="15" class="center"> <span class="text-5"> Informacion de Usuario: por favor detalle con la mayor informacion posible los echos </span></td>
						</tr>
						<tr>
							<td width="25">
								<CheckboxGroup legend center legendText="Toma" bind:value="{selected}">
									<Checkbox text="Vermu" value="1" />
									<Checkbox text="Vermu" value="12" />
									<Checkbox text="Vermu" value="13" />
									<Checkbox text="Vermu" value="14" />
									<Checkbox text="Vermu" value="15" />
								</CheckboxGroup>
							</td>
						</tr>
						<tr>
							<td colspan="2" width="25" class="w-full h-4vh">
								<div class="flex flex-row w-full h-full justify-center gap-2 items-center">
									<Button text="Añadir Policias" colors="orange-168" />
									<Button text="Añadir Pruebas" colors="purple-168" />
									<Button text="Añadir Multas" colors="white-168" />
									<Button text="Añadir Vehiculo" colors="yellow-168" />
									<Button text="Posicion Actual" colors="red-168" />
								</div>
							</td>
						</tr>
						<tr>
							<td colspan="2" width="25" height="15" class="w-full h-4vh">
								<div class="flex flex-row w-full h-full justify-center gap-2 items-center">
									<Button text="Crear Reporte" on:click="{() => (openModal = true)}" colors="green-168" />
									<span class="tui-divider cyan-255-border"></span>
									<Button text="Cancelar Reporte" colors="red-168" />
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</Fieldset>
		</Window>
		<!-- <Modal class="w-30vw h-15vh" fieldset legendText="HI" id="jerico" open="{openModal}">
			<div class="center">
				<p>¿Esta seguro que desea crear el reporte?</p>
			</div>
			<div class="absolute bottom-2 w-full flex justify-center gap-15 items-center">
				<Button class="text-white" on:click="{() => (openModal = false)}" text="Crear" colors="blue-168" />
				<Button on:click="{() => (openModal = false)}" text="Cancelar" colors="cyan-168" />
			</div>
		</Modal> -->
		<!-- <Panel open="{openModal}" title="Jerico" class="w-35vw h-15vh absolute-center">
			<slot class="h-full w-full">
				<p class="">Decea crear el reporte?</p>
				<div class="bottom-1 absolute w-full flex justify-around items-center">
					<Button on:click="{() => (openModal = false)}" text="Crear" colors="white-168" />
					<Button disabled on:click="{() => (openModal = false)}" text="Cerrar" colors="white-168" />
				</div>
			</slot>
		</Panel> -->
		<Panel open="{openModal}" title="Exito" class="w-15vw h-13vh absolute-center">
			<slot class="h-full w-full">
				<p class="">Reporte Creado</p>
				<div class="bottom-2 absolute w-full flex justify-around items-center">
					<Button on:click="{() => (openModal = false)}" text="Crear" colors="white-168" />
				</div>
			</slot>
		</Panel>
	</Background>
</div>

<style>
	* {
		font-family: 'Lucida Console';
	}
</style>
