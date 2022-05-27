
/*

*
**
***
****
*****
****
***
**
*

*/


for(let i = 0; i < 5; i++){
    
    let star = '';
    for(let j = 0; j < 5; j++) {
        if(i >= j) {
            star += '*';
        }
    }
    console.log(star)
    
}