// date format - dd-mm-yyy or dd/mm/yyyy

function findDate(str) {
    const regex = /\b\d{2}[-/]\d{2}[-/]\d{4}\b/g;
    return str.match(regex) || [];
}

console.log(findDate('The event is on 21-06-2025 and backup is 22/06/2025.'))