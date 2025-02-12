const renderPrice = (price: number, currencyCode: string) => {
  switch (currencyCode) {
    case "GBP":
      return `£${price.toFixed(2)}`;
    case "USD":
      return `$${price.toFixed(2)}`;
    case "EUR":
      return `€${price.toFixed(2)}`;
    default:
      // default to currency code if unsupported
      return `${price.toFixed(2)} ${currencyCode}`;
  }
};

export default renderPrice;
