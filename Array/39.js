let arr = [58, '', 'abcd', true, null, false, 0];

console.log(arr.filter(Boolean));

// Here Boolean is used as a constructor which filter out all falsy value like 0, '', null, undefined, false.