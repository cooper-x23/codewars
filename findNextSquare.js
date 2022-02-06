function findNextSquare(sq) {
    let now = Math.sqrt(sq) + 1
    let next = Math.sqrt(sq) + 1;
    next *= next
    if (next == Math.floor(now * now)) {
      return next
    } else {
        return -1;
    }
  }