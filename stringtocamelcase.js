function toCamelCase(str){
    const splitted = str.split('');
    return splitted.map(function(a, i){
      if(a == '-' || a == '_'){
        a = splitted[ i + 1 ].toUpperCase()
        splitted.splice(i + 1, 1)
      }
      return a
    }).join('');
  }