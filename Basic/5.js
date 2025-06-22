let str = "w3resource";
let len = str.length;
for (let i = 0; i < len; i++) {
  str = str[str.length - 1] + str.slice(0, str.length - 1);
  console.log(str);
}
