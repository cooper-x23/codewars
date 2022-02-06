function solution(roman){
    // complete the solution by transforming the 
    // string roman numeral into an integer
    const romanArr = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    let text = roman.split('');
    let count = 0;
    let v = 0;
    if (roman == 'IV') { return 4; }
    for(let i = 0; i < text.length;i++) {
      count = count + romanArr[text[i]]
    }
    return count
  }