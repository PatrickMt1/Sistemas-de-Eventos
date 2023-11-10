export function cleanInput(e) {
  // Obtém todos os elementos de entrada (inputs) no formulário
  var inputs = document.querySelectorAll("input");

  // Itera sobre os elementos de entrada e redefine o valor deles para vazio
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
  return e;
}
