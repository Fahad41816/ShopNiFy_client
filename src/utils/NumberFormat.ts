function formatPriceWithCommas(price : number) {
    if (typeof price !== "number" && typeof price !== "string") {
      throw new Error("Input must be a number or a string representing a number");
    }
  
    // Ensure the input is a string
    const priceStr = price.toString();
  
    // Regular expression to add commas as thousands separators
    return priceStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatPriceWithCommas