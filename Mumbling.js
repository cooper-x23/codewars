function accum(s) {
    str = s.split('');
    return str.map((w, key) => {
      const repeated = capitalizeFirstLetter(w.toLowerCase().repeat(key + 1));
      return repeated;;
    }).join('-');
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }