function isHTML(str) {
    return /^<[^>]+>$/.test(str);
}

console.log(isHTML('<p>'))