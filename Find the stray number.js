function stray(numbers) {
  const result =  numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number));
  return result
}
