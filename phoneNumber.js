function createPhoneNumber(numbers){
    const first = '(' + numbers[0] + numbers[1] + numbers[2] + ') ';
    const number = first + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
    return number;
  }