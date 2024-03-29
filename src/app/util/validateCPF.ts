export const validateCPF = (cpf: string) => {
  let soma: any;
  let resto: any;
  soma = 0;

  cpf = cpf.replace(/[^\d]+/g, '');

  // Verifica se todos os digitos são iguais
  if (cpf.length !== 11 || !Array.from(cpf).filter(e => e !== cpf[0]).length) {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i-1, i), 10) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(9, 10), 10) ) {
    return false;
  }

  soma = 0;

  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i-1, i), 10) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }

  if (resto !== parseInt(cpf.substring(10, 11), 10) ) {
    return false;
  }

  return true;
};
