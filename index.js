function numeroUsuario(){
    let num;
    do{
        num= prompt("Ingresa un número: ");
        if(isNaN(num)){
            alert("Ingrese un número nuevamente.");
        }
    }
 while (isNaN(num));
num = parseInt(num);

let fibonacci = [0,1];
for (let i=2; i<num; i++){
    fibonacci[i] = fibonacci[i-1] + fibonacci[1-2];
}

console.log("Fibonacci: ");
for (let i = 0; i<num; i++){
    console.log(fibonacci[i])
}
}

window.onload = numeroUsuario