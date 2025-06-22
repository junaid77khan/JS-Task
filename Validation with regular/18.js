function isDomain(value) {
  return /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(value);
}

console.log(isDomain('inmorphis.com'))