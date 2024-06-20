function ValidaCPF(cpf) {
  this.cpfLimpo = cpf.replace(/\D+/g, '');
  this.cpfArray = this.cpfLimpo.slice(0, -2).split('');
}

ValidaCPF.prototype.issValid = function () {
  let numero = 10;
  let primeiroDigito = this.cpfArray.reduce((acumulador, elemento) => {
    acumulador += numero * Number(elemento);
    numero--;
    return acumulador;
  }, 0);

  primeiroDigito = 11 - (primeiroDigito % 11);
  primeiroDigito = primeiroDigito > 9 ? 0 : primeiroDigito;
  this.cpfArray.push(String(primeiroDigito));

  let novoNumero = 11;
  let segundoDigito = this.cpfArray.reduce((acumulador, elemento) => {
    acumulador += novoNumero * Number(elemento);
    novoNumero--;
    return acumulador;
  }, 0);

  segundoDigito = 11 - (segundoDigito % 11);
  segundoDigito = segundoDigito > 9 ? 0 : segundoDigito;
  this.cpfArray.push(String(segundoDigito));

  let cpfValidado = this.cpfArray.join('');
  let isValid = cpfValidado === this.cpfLimpo;

  return isValid;
};
const cpf = new ValidaCPF('111.111.111-11');

console.log(cpf.issValid());
