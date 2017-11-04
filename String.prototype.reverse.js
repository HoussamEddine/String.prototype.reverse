Object.defineProperty(String.prototype, "reverse", {
  configurable: true,
  writable: true,
  enumerable: false,
  value: function(start, end) {
    var str = this,
      length = str.length;

    if (!start) {
      start = 0;
    }
    if (!end || end > length) {
      end = length;
    }

    var newString = "";

    for (var i = end - 1; i >= start; i--) {
      newString += str[i];
    }

    return newString;
  }
});

// easy way : str.split("").reverse().join("")