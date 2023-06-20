alumnos=[];

function sumbit(){
    /*var alumno1 = document.getElementById("nombre1").value;Add nombres
    var alumno2 = document.getElementById("nombre2").value;

    var alumno3 = document.getElementById("nombre3").value;
    var alumno4 = document.getElementById("nombre4").value;
    
    alumnos.push(nombre1);
    alumnos.push(nombre2);
    alumnos.push(nombre3);
    alumnos.push(nombre4);
    
    document.getElementById("ver_nombre").innerHTML=alumnos;
*/
var ver_alumnos=[];_
for(var i=1; i<=4;i++){
   var  nombre_alumnos=document.getElementById("nombre"+i).value;
   alumnos.push(nombre_alumnos);
}

var tamaño= alumnos.length;

for(var j=0;j<tam; j++){
    ver_alumnos.push("<h4> nombre - "  + alumnos [j] + "</h4>"); 

}
document.getElementById("ver_nombre_con_comas").innerHTML = ver_alumnos;

var sin_comas = ver_alumnos.join("")
document.getElementById("ver_nombre_sin_comas").innerHTML = sin_comas;

document.getElementById("boton_enviar").style.display="none";

document.getElementById("boton_ordenar").style.display="inline-block";

}

function sorting(){
    alumnos.sorting();
    var alumnos_sort=[];
    var tam_alumnos= alumnos.length;
    for(var K=0;K<tam_alumnos;K++){
        alumnos_sort.push("<h4> nombre - "  + alumnos [k] + "</h4>");
    }
var sn_comas=alumnos_sort.join("");
document.getElementById("ver_nombre_sin_comas").innerHTML = sn_comas;

}

function update(){
    document.getElementById("ver_nombre_sin_comas").innerHTML ="<h1> nombre - "  + alumnos [j] + "</h1>" ;
    
}
