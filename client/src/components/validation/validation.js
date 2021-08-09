export function validation(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Product name is required";
  } else if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = "Product name must be only letters";
  }
  if (!input.stock) {
    errors.stock = "Stock is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.stock)
  ) {
    errors.stock = "Stock must be between 1 and 255";
  }
  return errors;
}
