function nuevo_elemento(){
  var o = document.getElementById("parrafo_1");
  var letras = o.hasAttribute("hidden");
  switch(letras){
    case true:
      var element = document.getElementById("parrafo_1");
      element.removeAttribute("hidden");
      break;
    case false:
      var element_ = document.getElementById("parrafo_1");
      element_.setAttribute("hidden","");
      break;
  }
}
function nuevo_elemento_(){
  var o = document.getElementById("elemento_2");
  var letras = o.hasAttribute("hidden");
  switch(letras){
    case true:
      var element = document.getElementById("elemento_2");
      element.removeAttribute("hidden");
      break;
    case false:
      var element_ = document.getElementById("elemento_2");
      element_.setAttribute("hidden","");
      break;
  }
}
  