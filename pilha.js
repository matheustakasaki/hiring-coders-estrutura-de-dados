var elementos = []

var topo = -1;
var MAX = 10;

function push(num){

    if(topo < MAX){
        topo = topo +1
    }
    else{
        console.log('Pilha está cheia')
    }
}
