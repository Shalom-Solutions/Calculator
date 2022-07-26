//display() function

    function display(val){

        document.getElementById('result').value += val
    
}
//solve() function

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}


