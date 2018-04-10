

var dia = prompt ("Por favor ingrese un día");
var diaMin = dia.toLowerCase();
var	diaSemana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
var comp = diaSemana.indexOf(diaMin);//Devuelve la posicion en el array del valor de "dia"
//console.log (comp);

for (i=0; i<7; i++){
		if (diaMin == diaSemana[i]) {
			console.log("El día es " + diaMin);
			break;
		};
	}

if (comp<5) {
	console.log ("El dia es Habil");
}
if (comp>=5 && comp<7) {
	console.log ("El dia es Fin de Semana");
}	


/////////



