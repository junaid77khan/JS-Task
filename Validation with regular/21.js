function thousands_separators(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

thousands_separators(1000);        // "1,000"
thousands_separators(10000.23);    // "10,000.23"
thousands_separators(1000000);     // "1,000,000"
