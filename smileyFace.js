function countSmileys(arr) {
    if (arr.length == 0) {return 0}
    const validSmileys = {
      ':)': true,
      ':D': true,
      ';-D': true,
      ':~)': true,
      //nem valid
      ';(': false,
      ':>': false,
      ':}': false,
      ':]': false
    }
    for(let i = 0; i < arr.length; i ++) {
      return arr.filter(v => v.match(/(:|;)(-|~)?(\)|D)/)).length
    }
  }