function validarCPF(cpf) {
  let cpfLimpo = cpf.replace(/\D+/g, '');
  let cpfArray = cpfLimpo.split('');
  cpfArray.pop();
  cpfArray.pop();
  let cpfFormatado = [];
  let numero = 10;
  cpfArray.forEach((el) => {
    cpfFormatado.push(el * numero);
    numero--;
  });
  cpfFormatado = cpfFormatado.reduce((acumulador, elemento) => {
    return acumulador + elemento;
  }, 0);

  let primeiroDigito =
    11 - (cpfFormatado % 11) > 9 ? 0 : 11 - (cpfFormatado % 11);
  cpfArray.push(primeiroDigito);
  let novonumero = 11;
  let novoCpfFormatado = [];
  cpfArray.forEach((el) => {
    novoCpfFormatado.push(el * novonumero);
    novonumero--;
  });

  novoCpfFormatado = novoCpfFormatado.reduce((acumulador, elemento) => {
    return acumulador + elemento;
  }, 0);
  let segundoDigito =
    11 - (novoCpfFormatado % 11) > 9 ? 0 : 11 - (novoCpfFormatado % 11);

  cpfArray.push(segundoDigito);

  return cpfLimpo == cpfArray.join('');
}

const cpf = '147.452.527-06';
console.log(validarCPF(cpf));
