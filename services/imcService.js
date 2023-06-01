class IMCService {
  calculate(weight, height) {
    const imc = weight / height ** height;
    let result = "";
    if (imc < 18.5) {
      result = "Magreza";
    } else if (imc >= 18.5 && imc < 24.9) {
      result = "Normal";
    } else if (imc >= 24.9 && imc < 30) {
      result = "Sobrepeso";
    } else {
      result = "Obesidade";
    }

    return { imc: imc.toFixed(2), result: result };
  }
}

module.exports = IMCService;
