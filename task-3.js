function getElementWidth(content, padding, border) {
  return (parseFloat(content) + (parseFloat(padding) * 2) + (parseFloat(border) * 2))
}

console.log(getElementWidth('60', '12', '8.5')) // 101
console.log(getElementWidth('50px', '8px', '4px')) // 74
console.log(getElementWidth('200px', '0px', '0px')) // 200
console.log(getElementWidth('100px', '5px', '10px')) // 130
