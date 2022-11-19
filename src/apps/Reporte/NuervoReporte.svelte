<script lang="ts">
	import Input from '../../components/Input.svelte';
	import {text} from 'svelte/internal';
	import Fieldset from '../../components/Fieldset.svelte';
	import Window from '../../components/Window.svelte';
	import Button from '../../components/Button.svelte';
</script>

<div class="w-full h-full  absolute">
	<Window width="{40}" background="red-black" height="{50}" center>
		<Fieldset centerText title="Nuevo Reporte" full sharedBackground>
			<div class="w-full h-full absolute">
				<div class="flex w-full justify-center items-center">
					<Input class="mb-2" textSize="{1}" textwidth="{15}" type="text" text="Titulo:" />
				</div>
				<table style="width:97%;height:80%;" class="tui-table-grid float-left">
					<tbody>
						<tr>
							<td rowspan="2" width="60%">
								<Input textSize="{1}" textwidth="{10}" type="text" text="Nombre.......:" />
								<Input class="mt-2" textSize="{1}" textwidth="{10}" type="text" text="Apellido.....:" />
								<Input class="mt-2" textSize="{1}" textwidth="{10}" type="text" text="CitizenID....:" />
								<Input class="mt-2" textSize="{1}" textwidth="{10}" type="text" text="Vehiculo.....:" />
								<Input class="mt-2" textSize="{1}" textwidth="{10}" type="textarea" text="Observaciones:" />
							</td>
						</tr>
						<tr>
							<td width="25"> Se les recuerda a los oficiales añadir toda la informacion relacionada al reporte </td>
						</tr>
						<tr>
							<td colspan="2">
								<div class="w-full flex justify-around items-center">
									<Button colors="blue-168" text="PJ Cercano" />
									<Button colors="cyan-168" text="Current Location" />
									<Button colors="green-168" text="Policias" />
									<Button colors="orange-168" text="Evidencias" />
									<Button colors="white-168" text="Fines" />
								</div>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="w-full mt-3 h-4vh flex justify-around items-center">
					<Button colors="green-168" text="Crear Reporte" />
					<Button colors="red-168" text="Cancelar" />
				</div>
			</div>
		</Fieldset>
	</Window>
</div>
