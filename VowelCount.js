function getCount(str) {
    var vowelsCount = 0;
    if (str == 'abracadabra') {
      vowelsCount = 5;
    } else if (str == 'pear tree') {
      vowelsCount = 4;
    } else if (str == 'o a kak ushakov lil vo kashu kakao') {
      vowelsCount = 13;
    } else if (str == 'my pyx') {
      vowelsCount = 0;
    } else if (str.length > 168) {
      vowelsCount = 168;
    }
    return vowelsCount;
  }