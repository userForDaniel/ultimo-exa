var Item = document.getElementById("Item");
var Nombres = document.getElementById("nombres");
var sexo01 = document.getElementById("sexo01");
var ciclo = document.getElementById("ciclo");
var Escuela = document.getElementById("Escuela");
var fila = "";
var est = 0;
function  registrar(){
    if(est == 0){
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");

    //crear fila
    var fil = document.createElement("tr");

    //crear celda
    var celda_Item = document.createElement("td");
    celda_Item.innerHTML=Item.value;
    var celda_Nombres = document.createElement("td");
    celda_Nombres.innerHTML=Nombres.value;
    var celda_sexo01 = document.createElement("td");
    celda_sexo01.innerHTML=sexo01.value;
    var celda_ciclo = document.createElement("td");
    celda_ciclo.innerHTML=ciclo.value;
    var celda_Escuela = document.createElement("td");
    celda_Escuela.innerHTML=Escuela.value;
    
    var celda_accion = document.createElement("td");
    celda_accion.classList.add("accion");
    celda_accion.innerHTML=
    "<a href='#' class='icono2' onclick='editar(this)'>editar</a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'>eliminar</a>"
    fil.appendChild(celda_Item);
    fil.appendChild(celda_Nombres);
    fil.appendChild(celda_sexo01);
    fil.appendChild(celda_ciclo);
    fil.appendChild(celda_Escuela);
    fil.appendChild(celda_accion);
    tbody.appendChild(fil);
    table.appendChild(tbody);
    limpiar();
    }else{
        fila.cells[0].innerHTML = Item.value;
        fila = "";
        limpiar();
        estado = 0;
    }
}
function limpiar(){
    Item.value = "";
    Item.focus();
}
function editar(row){
    fila = row.parentNode.parentNode;
    Item.value = fila.cells[0].innerHTML;
    est = 1;
}
function eliminar(row){
    let f = row.parentNode.parentNode;
    f.parentNode.removeChild(f);
}