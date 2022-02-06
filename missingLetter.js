function findMissingLetter(array){
    let joined = array.join('');
    for(let i = 0; i < joined.length; i++) {
      const selected = joined.charCodeAt(i + 1) - joined.charCodeAt(i)
      if (selected != 1) {
        return String.fromCharCode(joined.charCodeAt(i) + 1)
      }
    }
  }