function generateValidCpf() {
    let cpf;
    do {
        const digits = Array(9).fill().map(() => Math.floor(Math.random() * 10));
        digits.push(calculateDigit(() => calculateSum(digits.join(''), 9)));
        digits.push(calculateDigit(() => calculateSum(digits.join(''), 10)));
        cpf = digits.join('');
    } while (cpf.length !== 11);
    return cpf;
}

function calculateSum(cpf, multiplier) {
    let sum = 0;
    for (let i = 0; i < multiplier; i++) {
        sum += parseInt(cpf.charAt(i)) * (multiplier + 1 - i);
    }
    return sum;
}

function calculateDigit(sumFunction) {
    let sum = sumFunction();
    let rev = 11 - (sum % 11);
    return (rev === 10 || rev === 11) ? 0 : rev;
}

document.addEventListener('DOMContentLoaded', function () {
    const generateCPFButton = document.getElementById('generateCPFButton');
    const cpfInput = document.getElementById('cpfInput');
    const generatedCPF = document.getElementById('generatedCPF');
    
    generateCPFButton.addEventListener('click', function () {
        const validCPF = generateValidCpf();
        cpfInput.value = validCPF;
        checkCPFValidity();
        generatedCPF.textContent = `CPF gerado: ${validCPF}`;
    });
});