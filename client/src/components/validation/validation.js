export function validation(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Product name is required"
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
