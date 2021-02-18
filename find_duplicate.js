function findDuplicate(numbers) {
  const numberSeen = new Set();

  for (const value of numbers) {
    if (numberSeen.has(value)) {
      return value;
    }
    numberSeen.add(value);
  }
  return -1;
}

console.log(findDuplicate([1, 2, 7, 5, 6, 7]));
