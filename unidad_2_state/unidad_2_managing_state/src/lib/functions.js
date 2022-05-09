const randomNumber = () => Math.round(Math.random());

const validate = (number) => {
  if (number > 1 || number < 0) {
    return 0;
  }
  return number;
};

const logic = (opt1, opt2, door) => {
  if (typeof opt1 === "string") {
    if (opt1 === "true" || opt1 === "false") {
      opt1 = opt1 === "true";
    } else {
      opt1 = opt1 === "1";
    }
  }
  if (typeof opt2 === "string") {
    if (opt2 === "true" || opt2 === "false") {
      opt2 = opt2 === "true";
    } else {
      opt2 = opt2 === "1";
    }
  }

  if (typeof opt1 === "number") {
    opt1 = opt1 === 1;
  }
  if (typeof opt2 === "number") {
    opt2 = opt2 === 1;
  }
  const exitTrue = "true";
  const exitFalse = "false";

  switch (door) {
    case "OR":
      if (opt1 || opt2) {
        return exitTrue;
      }
      return exitFalse;
    case "AND":
      if (opt1 && opt2) {
        return exitTrue;
      }
      return exitFalse;
    case "NAND":
      if (opt1 && opt2) {
        return exitFalse;
      }
      return exitTrue;
    case "NOR":
      if (opt1 || opt2) {
        return exitFalse;
      }
      return exitTrue;
    case "XOR":
      if (opt1 === opt2) {
        return exitFalse;
      }
      return exitTrue;
    case "XNOR":
      if (opt1 === opt2) {
        return exitTrue;
      }
      return exitFalse;
    default:
      return 2;
  }
};

module.exports = {
  randomNumber,
  validate,
  logic,
};
