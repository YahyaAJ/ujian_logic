var $ = '';
var n = 9;

for (x = 1; x <= n; x++) {
    for (y = 1; y <= n; y++) {
      if (x <= 5 && x + y > 5 && x - y > -1 + -4) {
        $ += " ✚ ";
      } else if (x + y > 9 && x - y > -1) {
        $ += " ✚ ";
      } else {
        $ += " ✕ ";
      }
    }
    $ += "<br>";
  }
  document.write($);