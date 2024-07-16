function equation(n1) {
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    };
  
    let parts = n1.split(/\b(?<!\.)\b/);
    parts = parts.filter(part => part.trim() !== '');
  
    let result = parseFloat(parts[0]);
    for (let i = 1; i < parts.length; i += 2) {
      const operator = parts[i];
      const operand = parseFloat(parts[i + 1]);
  
      if (operators.hasOwnProperty(operator)) {
        result = operators[operator](result, operand);
      }
    }
  
    console.log(result);
  }
  
  equation("1+1");
  equation("7*4-2");
  equation("1+1+1+1+1");
  