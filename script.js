function takevalue(x) {
    document.getElementById('window').value += x;
}
function clearinput(y){
    document.getElementById('window').value=y;
}
function findresult(){
    var result=eval(document.getElementById('window').value);
    document.getElementById('window').value =result;
}