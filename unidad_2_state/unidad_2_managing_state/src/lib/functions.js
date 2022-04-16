const randomNumber = () => Math.round(Math.random());

const validate = (number) => {
  if (number > 1 || number < 0) {
    return 0;
  }
  return number;
};

const logic = (opt1, opt2, door) => {
  opt1 = opt1 === "1";

  switch (door) {
    case "OR":
      if (opt1 || opt2) {
        return "true";
      }
      return "false";
    case "AND":
      if (opt1 && opt2) {
        return "true";
      }
      return "false";
    case "NAND":
      if (opt1 && opt2) {
        return "false";
      }
      return "true";
    case "NOR":
      if (opt1 || opt2) {
        return "false";
      }
      return "true";
    case "XOR":
      if (opt1 === opt2) {
        return "false";
      }
      return "true";
    case "XNOR":
      if (opt1 === opt2) {
        return "true";
      }
      return "false";
    default:
      return 2;
  }
};

module.exports = {
  randomNumber,
  validate,
  logic,
};
