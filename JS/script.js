
const TASAINTERES= 2

function calculos(){
	let vAuto = document.getElementById("vAuto").value;
	if (vAuto == ""){
			alert("[ERROR] Ingrese el valor total del vehículo que desea adquirir.");
			return false;
		}
	let montoC = document.getElementById("montoC").value;
	if (montoC == ""){
			alert("[ERROR] Ingrese el monto que requiere para la adquisición del vehículo. Recuerde que el credito sólo puede ser hasta máximo el 75% del valor del vehículo.");
			return false;
		}
	if (vAuto <= 0 || montoC <= 0) {
		alert("[ERROR] El monto debe ser mayor a cero. ");
		return false;
	}
	let pie = (vAuto - montoC);
	let maxCredito = (vAuto * 0.75);
	if (montoC > maxCredito) {
			alert("[ERROR] Recuerde que el valor del Crédito, no puede superar el 75% del valor total del vehículo a comprar.");
			return false;
	}
	let años = document.getElementById("años").value;
	if (años == "" || años < 1 || años > 5){
			alert("[ERROR] Indique el plazo en años. Puede ser de 1 a 5 años máximo.");
			return false;
		}
	if (!document.querySelector('input[name="type"]:checked')) {
			alert("[ERROR] Seleccione una de las dos opciones para continuar (nuevo o usado)");
			return false;
	}
	
	let cantidadCuotas = (años * 12);
	let totalAPagar = parseInt(Math.pow(1.0 + TASAINTERES / 100, cantidadCuotas) * montoC);
	let interesCompuesto = (totalAPagar - montoC);

	document.getElementById("botoncito").classList.add("d-none");
	document.getElementById("resultado").classList.remove("d-none");

	document.getElementById('montoCredito').textContent = montoC;
	document.getElementById('valorPie').textContent = pie;
	document.getElementById('total').textContent = totalAPagar;
	document.getElementById('cCuotas').textContent = cantidadCuotas;
}

