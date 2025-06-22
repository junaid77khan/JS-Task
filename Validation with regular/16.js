function isHexValue(value) {
  return /^0[xX][0-9a-fA-F]+$/.test(value);
}

console.log(isHexValue('0x1A3F'))