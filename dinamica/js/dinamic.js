function addLista2(add){
  var p = document.getElementById('Foo2');
  var filhos = p.childNodes;
  var li = document.createElement('li');
  li.innerHTML = add;
  li.tagName = add;
  p.appendChild(li);
}
  
function removeLista(add) {
  var p = document.getElementById('Foo');
  var filhos = p.childNodes;
  var n,t = p.size;
  for(i = filhos.length - 1; i >= 0; i--) {
    if(filhos[i].innerHTML == add) {
      p.removeChild(filhos[i]);
      n-=1;
    }
  }
  if (n==t) {
    alert("O conteúdo não está listado em conteúdo desejado!");
  }
}

function addLista(add) {
  var p = document.getElementById('Foo');
  var filhos = p.childNodes;
  var li = document.createElement('li');
  li.innerHTML = add;
  li.tagName = add;
  p.appendChild(li);
}