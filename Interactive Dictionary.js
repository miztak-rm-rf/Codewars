class Dictionary {
  constructor() {
    this.dict = {}
  }
  
  newEntry(key, value) {
    this.dict[key]=value
  }
  
  look(key) {
    if(Object.keys(this.dict).includes(key)){
      return this.dict[key]
    }else{
      return `Can't find entry for ${key}`
    }
  }
}
