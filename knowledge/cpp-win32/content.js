function CElement(_element, _content, _div){
    var x = document.createElement(_element);
    x.innerHTML = _content;
    document.getElementById(_div).appendChild(x);
}
function ClearDiv(id){
    document.getElementById(id).innerHTML = "";
}   
function Change_Title(id,title){
    ClearDiv(id);
    CElement('h1',title,id);
}