function obtenerPalabraSecreta() {
  var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a n a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];

   var indice = Math.round ( Math.random() * 27 )
   var cadena = new String( libreriaPalabras[indice] )
   var palabra = cadena.split(" ")
  return palabra;
}


function jugarAhorcado(){
	var cont=10;
	var palabra=obtenerPalabraSecreta();
	var copia = palabra = palabra.join("");
	var rpta="";
	var gano=false;
	for(var i=0;i<palabra.length;i++)
		rpta+="*";
	console.log("Tienes "+cont+" intentos");
	do{
		var letra =prompt("Adivina la palabra: " +rpta+"\nIngresa solo una letra");
		var indice = palabra.indexOf(letra);
		var entro=false;
		console.clear();
		if(letra.length==1){
			while(indice>=0){
				letra = letra.toLowerCase();
				entro=true;
				rpta = rpta.split("");
				rpta[indice]=letra;
				rpta = rpta.join("");
				console.log(rpta);
				palabra = palabra.split("");
				palabra[indice]="_";
				palabra = palabra.join("");
				indice = palabra.indexOf(letra);
			}
			if(rpta.indexOf("*")==-1)
			{
				alert("Ganaste :) yupi\nLa palabra era:\n"+copia);
				gano=true;
				break;
			}
			if(entro)
				console.log("Acertaste!");
			else if(!entro)
			{
				cont--;
				console.log("Te equivocaste!");
				console.log("Te queda(n) "+cont+" intento(s)...");
			}
			entro=false;
			dibujar(cont);
		}
		else
			alert("Ingresa solo una letra");
	}while(cont>0);

	if(!gano)
	{
		alert("Perdiste jajajaja\nLa palabra era:\n"+copia);
	}
}

function dibujar(n)
{
	var hombre =  [        "________",
	                       "   |\n",
	                       "  | \n",
	                       "   |\n",
	                       "   O\n",
	                        "  /|\\\n",
	                       "  / \\\n",
	                       "       |",
	                       "|       ",
	                       "________"];

  	for (var i = 0; i < hombre.length; i++) {
		if(n<hombre.length){
			console.log(hombre[i]);
			n++;
		}
		else
			console.log("        ");

  	}
}

jugarAhorcado();
