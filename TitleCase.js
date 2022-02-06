function titleCase(title, minorWords) {
  if (title == '' || minorWords == '') {
    return '';
  }
  let arr = title.toLowerCase().split(' ');
  let arr2 = [];
  if (minorWords) {
    arr2 = minorWords.split(' ');
  }
  arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
  for(let i = 1; i < arr.length; i ++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    if (minorWords) {
      for(let j = 0; j < arr2.length; j ++) {
          if (arr[i].toLowerCase() == arr2[j].toLowerCase()) {
            arr[i] = arr[i].charAt(0).toLowerCase() + arr[i].slice(1);
          }
      }
    }
  }
  const string = arr.join(' ');
  return string;
}