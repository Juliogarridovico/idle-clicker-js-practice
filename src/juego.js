var totalClicks = 0;

var mejoras = [
  {
    nombre: "Estudiar CSS y HTML",
    precioInicial: 10,
    beneficioInicial: 0.01,
    nivel: 0,
    descripcion: "Estudiar CSS y HTML",
  },
  {
    nombre: "Practicar CSS y HTML",
    precioInicial: 20,
    beneficioInicial: 0.02,
    nivel: 0,
    descripcion:
      " Tras varias horas de ver videos de youtube, te decides a practicar  ",
  },
  {
    nombre: "Estudiar JS",
    precioInicial: 40,
    beneficioInicial: 0.03,
    nivel: 0,
    descripcion:
      "Quieres ir un paso mas y te pones a estudiar JavaScript o como dicen los que saben ingles gi-es. Pronunciar bien no hara que sepas mas pero parecera que lo sepas",
  },
  {
    nombre: "Aprendes sobre los condicionales en JS",
    precioInicial: 80,
    beneficioInicial: 0.04,
    nivel: 0,
    descripcion:
      "te pones con los condiciones IF(){} que viene a ser lo mismo, si pasa esto entonces se hace esto otro",
  },
  {
    nombre: "Aprendes sobre las variables en JS",
    precioInicial: 160,
    beneficioInicial: 0.05,
    nivel: 0,
    descripcion: "-----",
  },
  {
    nombre: "Bucles en JS",
    precioInicial: 320,
    beneficioInicial: 0.06,
    nivel: 0,
    descripcion: "----",
  },
  {
    nombre: "array's en JS",
    precioInicial: 640,
    beneficioInicial: 0.07,
    nivel: 0,
    descripcion: "------",
  },
  {
    nombre: "Conceptos basicos de VUE",
    precioInicial: 1280,
    beneficioInicial: 0.08,
    nivel: 0,
    descripcion: "----",
  },
  {
    nombre: "v-bind en vue",
    precioInicial: 2360,
    beneficioInicial: 0.09,
    nivel: 0,
    descripcion: "-----",
  },
  {
    nombre: "condicionales en vue",
    precioInicial: 4720,
    beneficioInicial: 0.01,
    nivel: 0,
    descripcion: "-----",
  },
  {
    nombre: "Ultima mejora",
    precioInicial: 9440,
    beneficioInicial: 0.01,
    nivel: 0,
    descripcion: "felicideades has llegado al final",
  },
];
function mejorarMejoras(mejora) {
  PrecioMejora = (
    mejoras[mejora].precioInicial * 1.1 +
    Math.pow(mejoras[mejora].precioInicial * 1.1, mejoras[mejora].nivel)
  ).toFixed(0);

  if (totalClicks >= PrecioMejora) {
    totalClicks = totalClicks - PrecioMejora;
    mejoras[mejora].nivel++;
  } else {
    console.log("no tienes recuersos necesitas: " + PrecioMejora);
  }
}

function dibuja() {
  document.getElementById("contador").innerHTML =
    "Actualmente tienes un total de " + totalClicks.toFixed(5) + " clicks";
  document.getElementById("explicacion").innerHTML =
    "Este es un juego llamado clicker, se llama asi por el sonido que hace el raton al pulsarlo. <br>Cuando hagas click se te sumara 1 punto necesitas un total de 19.070 para comprar todas las mejoras <br> pero no te preocupes al comprar una mejora esta te ayudara sumando automaticamente clicks. <p>empieza haciendo click sobre la primera mejora. Acumula 12 clicks hasta comprarla</p>";
  //   console.log(mejoras.length);
  console.log(mejoras.length);
  for (var i = 0; i < mejoras.length; i++) {
    document.getElementById("mejora" + i).style.display = "none";
    if (i === 0) {
      document.getElementById("mejora" + i).innerHTML =
        mejoras[i].nombre +
        " <br>nivel: " +
        mejoras[i].nivel +
        "<br>Descripcion: " +
        mejoras[i].descripcion;
      document.getElementById("mejora" + i).style.display = "";
    }
    if (i > 0) {
      anterior = i - 1;
      if (mejoras[anterior].nivel >= 1) {
        document.getElementById("mejora" + i).innerHTML =
          mejoras[i].nombre +
          " <br>nivel: " +
          mejoras[i].nivel +
          "<br>Descripcion: " +
          mejoras[i].descripcion;
        document.getElementById("mejora" + i).style.display = "";
      }
    }
  }
}

function haceClick() {
  totalClicks++;
}

function autoClick() {
  for (var i = 0; i < mejoras.length; i++) {
    if (mejoras[i].nivel > 0) {
      totalClicks =
        totalClicks + mejoras[i].nivel * mejoras[i].beneficioInicial;

      console.log("añado: " + mejoras[i].nivel * mejoras[i].beneficioInicial);
    }
  }

  totalClicks;
}

setInterval(function () {
  dibuja();
}, 1000 / 120);

setInterval(function () {
  autoClick();
}, 1000);
