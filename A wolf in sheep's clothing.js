function warnTheSheep(queue) {
  if(queue.indexOf("wolf")==queue.length-1)return "Pls go away and stop eating my sheep"
  return `Oi! Sheep number ${(queue.length-1)-queue.indexOf("wolf")}! You are about to be eaten by a wolf!`
}
