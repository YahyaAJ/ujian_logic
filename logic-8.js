var $ = '';
var n = 9;

for (x = 0; x < n; x++){
    for (y = 0; y < n; y++){
        if (x == y){
            $ += x * 2 + 1,'&nbsp';
        }else if(n - x == y + 1){
            $ += y * 2;
        }else{
            // yang A
            if (n - y - 1 <= x || y >= x){
                $ += ''
            }else{
                $ += 'A'
            }
            // yang B
            if(x >= y || n - x - 1 >= y){
                $ += ' &nbsp' 
            }else{
                $ += '&nbspB '
            }
            // yang bawah
            if(x < y || x < n - y - 1){
                $ += ''
            }else{
                $ += '--'
            }
            // yang atas
            if(x > y || x > n - y - 1){
                $ += ''
            }else{
                $ += '--'
            }
        }
    }
    $ +="<br>"
}
document.write($);