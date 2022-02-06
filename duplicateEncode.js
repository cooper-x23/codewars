function duplicateEncode(word){
    let splittedLower = word.toLowerCase().split('');
    return splittedLower.map(function(a, b, w) {
      return w.indexOf(a) == w.lastIndexOf(a) && '(' || ')'
    }).join('');
  }