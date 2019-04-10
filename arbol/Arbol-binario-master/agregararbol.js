var arbol=new ArbolBinario();

function addNodo() {
    var nodo=parseInt(document.getElementById('nodo').value);
    var nuevoNodo= new Nodo(nodo);
    arbol.agregar(nuevoNodo);
}

function inOrd(){
   var ino = arbol.inOrder();
   document.getElementById('inO').innerHTML=ino;
}
function preOrd(){
    var pre = arbol.preOrder();
    document.getElementById('preO').innerHTML=pre;
 }
 function postOrd() {
    var post = arbol.postOrder();
    document.getElementById('postO').innerHTML=post;
 }

 function busqueda() {
   var search=parseInt(document.getElementById('busqueda').value);
   var busqueda = arbol.busqueda(search);
   document.getElementById('SE').innerHTML=busqueda;
 }


document.getElementById('add').addEventListener('click',addNodo);
document.getElementById('inOrd').addEventListener('click',inOrd);
document.getElementById('preOrd').addEventListener('click',preOrd);
document.getElementById('postOrd').addEventListener('click',postOrd);
document.getElementById('buscar').addEventListener('click',busqueda)
