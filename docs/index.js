const NUMERO_MINIMO = 10000;
const NUMEROS_TOTALES = 1000;

// Variables globales para los caracteres de binario

const actualizar_numeros = function () {
  let underscoreChar = '_';
  let hashChar = '#';
  function esPrimo(n) {
    if (n <= 1) {
      return false;
    } else if (n <= 3) {
      return true;
    } else if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }

  function decimalABinarioConCaracteres(n) {
    return n.toString(2).replace(/0/g, underscoreChar).replace(/1/g, hashChar);
  }

  function imprimirPrimosEnBinarioHTML(inicio, cantidad) {
    document.body.querySelector("#app").innerHTML = "Procesando...";
    let primos = [];
    for (let num = inicio; primos.length < cantidad; num++) {
      if (esPrimo(num)) {
        primos.push(num);
      }
    }
    let htmlOutput = '<pre>';
    for (let num of primos) {
      let binario = decimalABinarioConCaracteres(num);
      let binarioInvertido = binario.split("").reverse().join("");
      let binarioConSpansStr = binario.padStart(20, underscoreChar);
      let binarioConSpans = binarioConSpansStr.substring(0, binarioConSpansStr.length - 1).replace(/_/g, `<span class="underscore">${underscoreChar}</span>`).replace(/#/g, `<span class="hash">${hashChar}</span>`);
      let binarioInvertidoConSpans = binarioInvertido.padEnd(20, underscoreChar).substr(1).replace(/_/g, `<span class="underscore">${underscoreChar}</span>`).replace(/#/g, `<span class="hash">${hashChar}</span>`);
      let linea = `${(""+num).padStart(10)}:${binarioConSpans}${binarioInvertidoConSpans}<br>`;
      htmlOutput += linea;
    }
    htmlOutput += '</pre>';
    document.body.querySelector("#app").innerHTML = htmlOutput;
  }

  // Imprimir los primeros 100 números primos en binario y luego en su forma invertida, con un tope de 20 cifras
  imprimirPrimosEnBinarioHTML(NUMERO_MINIMO, NUMEROS_TOTALES);
};
