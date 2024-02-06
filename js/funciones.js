var reinasPorColocar = 8;
var reinasColocadas = 0;

function colocarReina(celda) {
  /*alert("Le dieron click a la celda"+celda);*/

  if (window.getComputedStyle(celda).backgroundImage == "none") {
    // Obtener referencia a los selects
const darkSelect = document.getElementById("darkColor");
const lightSelect = document.getElementById("lightColor");

// Función para actualizar variables CSS
function updateColors() {
  document.documentElement.style.setProperty("--dark-color", darkSelect.value);
  document.documentElement.style.setProperty("--light-color", lightSelect.value); 
}

// Detectar cambios en los selects
darkSelect.addEventListener("change", updateColors);
lightSelect.addEventListener("change", updateColors);
    if (reinasColocadas < 8) {
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      /* Bloqueamos renglon */
      var tablero = document.getElementById("tabla");
      //alert(renglon + " " + columna);
      for (let i = 0; i < 8; i++) {
        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
          tablero.rows[renglon].cells[i].style.backgroundColor = "#ff0000";
        }
        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
          tablero.rows[i].cells[columna].style.backgroundColor = "#ff0000";
        }
      }
      /* Recorremos diagonales */

      var r = renglon;
      var c = columna;
      while (r >= 0 && c < 8) {

        tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
        r--;
        c++;
      }

      r = renglon;
      c = columna;

      while (c >= 0 && r < 8) {

        tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
        r++;
        c--;
      }

      r = renglon;
      c = columna;

      while (r >= 0 && c >= 0) {
        tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
        r--;
        c--;
      }

      r = renglon;
      c = columna;

      while (r < 8 && c < 8) {
        tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
        r++;
        c++;
      }
      
      reinasPorColocar--;
      reinasColocadas++;
    }
   
  } else {
    celda.style = "background-image: none";
    var renglon = celda.parentElement.rowIndex;
    var columna = celda.cellIndex;
    /* Bloqueamos renglon */
    var tablero = document.getElementById("tabla");
    //alert(renglon + " " + columna);
    for (let i = 0; i < 8; i++) {
      tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[renglon].cells[i].style.backgroundColor = "";
      tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[i].cells[columna].style.backgroundColor = "";
    }
    reinasPorColocar++;
    reinasColocadas--;
  }
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;

 

}



function solucion1(valor) {
  

  var celdas = document.getElementById("tabla");
  limpiarSoluciones();
  switch (valor) {
    
    case "1":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "2":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "3":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "4":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "5":
      celdas.rows[0].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    case "6":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[1].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[3].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[4].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[5].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
      break;

    default:
      alert("Esa solucion no te la ando manejando");
      break;
  }
}


function reiniciarTablero() {
  reinasPorColocar = 8;
  reinasColocadas = 0;

  var tablero = document.getElementById("tabla");

  // Recorrer todas las celdas del tablero para restablecer su estado
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      var celda = tablero.rows[i].cells[j];
      celda.style = "background-image: none";
      celda.style.backgroundColor = "";
      celda.setAttribute("onclick", "colocarReina(this)");
    }
  }

  // Actualizar el contador de reinas
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;
}


 

function limpiarSoluciones() {
  var tablero = document.getElementById("tabla");

  // Recorrer todas las celdas del tablero para limpiar las soluciones
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      var celda = tablero.rows[i].cells[j];
      celda.style = "background-image: none";
    }
  }


}
