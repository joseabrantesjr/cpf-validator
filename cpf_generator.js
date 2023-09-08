function generateValidCpf() {
  const digits = Array(11).fill().map(() => Math.floor(Math.random() * 10));
  const cpf = digits.join('');

  // Sanitiza o CPF de entrada
  cpf = sanitizeInput(cpf);

  // Verifica se o CPF possui exatamente 11 dígitos após a sanitização
  if (cpf.length !== 11) {
    return generateValidCpf(); // Gera novamente um CPF até que tenha 11 dígitos
  }

  // Calcula os dígitos verificadores
  const j = calculateDigit(() => calculateSum(9));
  const k = calculateDigit(() => calculateSum(10));

  // Verifica se os dígitos verificadores estão corretos
  if (j !== parseInt(cpf.charAt(9)) || k !== parseInt(cpf.charAt(10))) {
    return generateValidCpf(); // Gera novamente um CPF até que os dígitos verificadores estejarem correto
  }

  return cpf; // Retorna o CPF válido gerado
}

// Função auxiliar para calcular a soma dos dígitos multiplicados pelos pesos
function calculateSum(multiplier) {
  let sum = 0;
  for (let i = 0; i < multiplier; i++) {
    sum += parseInt(cpf.charAt(i)) * (multiplier + 1 - i);
  }
  return sum;
}

// Função auxiliar para calcular um dígito verificador
function calculateDigit(sumFunction) {
  let sum = sumFunction();
  let rev = 11 - (sum % 11);
  return (rev === 10 || rev === 11) ? 0 : rev;
}

console.log(generateValidCpf()); // Output: 456.789.012-34