function isPangram(string){
    let splittedString = string.split(' ').join('').replace(/[\W\d]/g,'').toLowerCase().split('')
    const array = [...new Set(splittedString)].length;
    if (splittedString) {
        return array == 26 && true || false;
    }
  }