export function sumTwoSmallestNumbers(numbers:Array<number>):number {  
  return numbers.sort((a,b) => a-b).slice(0,2).reduce((a,b) => a+b)
}
