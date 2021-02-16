function Append(id,content){
    FindID(id).innerHTML += content;
}
function AppendC(id,content){
    FindID(id).appendChild(content);
}
function Button(parent,id,text,click){
    var btn = document.createElement('Button');
    btn.setAttribute('id',id);
    btn.textContent = text;
    btn.onclick = click;
    AppendC(parent,btn);
}
function Clear(id){
    FindID(id).innerHTML = "";
}
function ConvertA(from,to,value){
    switch(from){
        case 'dec':
            switch(to){
                case 'bin': return (value).toString(2); break;
                case 'oct': return (value).toString(8); break;
                case 'hex': return (value).toString(16).toUpperCase(); break;
            } break;
        case 'bin':
            switch(to){
                case 'dec': return parseInt(value,2); break;
                case 'oct': return parseInt(value,2).toString(8); break;
                case 'hex': return parseInt(value,2).toString(16).toUpperCase(); break;
            } break;
        case 'oct':
            switch(to){
                case 'dec': return parseInt(value,8); break;
                case 'bin': return parseInt(value,8).toString(2); break;
                case 'hex': return parseInt(value,8).toString(16).toUpperCase(); break;
            } break;
        case 'hex':
            switch(to){
                case 'dec': return parseInt(value,16); break;
                case 'bin': return parseInt(value,16).toString(2); break;
                case 'oct': return parseInt(value,16).toString(8); break;
            } break;
    }
}
function FindID(id){
    return document.getElementById(id);
}
function GetValue(id){
    return FindID(id).value;
}
function H(parent,id,text,size,clazz){
    var a;
    switch(size){
        case 1: 
            a = document.createElement('h1'); 
            a.setAttribute('id',id); 
            a.setAttribute('class',clazz);
            a.textContent = text;  
            AppendC(parent,a);
            break;
        case 2: 
            a = document.createElement('h2'); 
            a.setAttribute('id',id); 
            a.setAttribute('class',clazz);
            a.textContent = text;  
            AppendC(parent,a);
            break;
        case 3:
            a = document.createElement('h3'); 
            a.setAttribute('id',id); 
            a.setAttribute('class',clazz);
            a.textContent = text;  
            AppendC(parent,a); 
            break;
        case 4:
            a = document.createElement('h4'); 
            a.setAttribute('id',id); 
            a.setAttribute('class',clazz);
            a.textContent = text;  
            AppendC(parent,a); 
            break;
        case 5:
            a = document.createElement('h5'); 
            a.setAttribute('id',id); 
            a.setAttribute('class',clazz);
            a.textContent = text;  
            AppendC(parent,a); 
            break;
        case 6:
            a = document.createElement('h6'); 
            a.setAttribute('id',id); 
            a.setAttribute('class',clazz);
            a.textContent = text;  
            AppendC(parent,a); 
            break;
        case 7: 
            a = document.createElement('h7'); 
            a.setAttribute('id',id);
            a.setAttribute('class',clazz); 
            a.textContent = text;  
            AppendC(parent,a);
            break;
    }
}
function NewLine(id){
    Append(id,"<br>");
}
function Line(id){
    Append(id,"<hr>");
}
function Pre(parent,id,text,clazz){
    var a = document.createElement("pre");
    a.setAttribute('id',id);
    a.setAttribute("class",clazz);
    var b = document.createTextNode(text);
    a.appendChild(b);
    document.getElementById(parent).appendChild(a);
}
function SetValue(id,content){
    FindID(id).setAttribute('value',content);
}
function Textbox(parent,id,text,readonly){
    var a = document.createElement('input');
    a.setAttribute('type','text');
    a.setAttribute('id',id);
    a.setAttribute('value',text);
    if (readonly) a.setAttribute('readonly','readonly');
    AppendC(parent,a);
}
function ToInt(content){
    return parseInt(content,10);
}
function Button1_Function(){
    Button('here','btn1',ConvertA('dec','hex',15),'');
    H('here','','Hello World',1);
    Textbox('here','','number 1',false);
}