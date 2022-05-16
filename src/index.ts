import "./styles.css";
let btnEnv = document.getElementById("enviar");
let nota, suma, promedio, contador: number;

btnEnv.addEventListener("click", () => {
  suma = 0;
  for (contador = 1; contador < 11; contador++) {
    nota = Number(prompt("Ingrese la nota" + contador + ":"));
    suma += nota;
  }
  promedio = suma / 10;
  console.log("El promedio de la nota es " + promedio);
});
