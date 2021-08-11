export function validation(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Product name is required"
  }
  if (!input.stock) {
    errors.stock = "Stock is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.stock)
  ) {
    errors.stock = "Stock must be between 1 and 255";
  }
  if(!input.price){
    errors.price="Product price is required"
  }
  if(input.categories.length===0){
    errors.categories="At least one category should be elected"
  }
  if(!input.description){
    errors.description="The product's description is required"
  }
  return errors;
}
