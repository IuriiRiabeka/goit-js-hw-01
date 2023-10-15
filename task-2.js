function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee
  console.log(`Shipping to ${country} will cost ${totalPrice} credits`)
}

getShippingMessage("Australia", 150, 50)  // Shipping to Australia will cost 200 credits
getShippingMessage("Germany", 60, 40) // Shipping to Germany will cost 100 credits
getShippingMessage("Sweden", 110, 10) // Shipping to Sweden will cost 120 credits