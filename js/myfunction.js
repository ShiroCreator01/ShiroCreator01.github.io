function Append(id,content){
    document.getElementById(id).innerHTML += content;
}
function AppendC(id,content){
    document.getElementById(id).appendChild(content);
}
function Button(parent,id,text,click){
    var btn = document.createElement('Button');
    btn.setAttribute('id',id);
    btn.textContent = text;
    btn.onclick = click;
    AppendC(parent,btn);
}
function Clear(id){
    document.getElementById(id).innerHTML = "";
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
function GetValue(id){
    return document.getElementById(id).value;
}
function H(parent,id,text,size){
    switch(size){
        case 1: 
            var a = document.createElement('h1'); 
            a.setAttribute('id',id); 
            a.textContent = text;  
            AppendC(parent,a);
            break;
        case 2: 
            var a = document.createElement('h2'); 
            a.setAttribute('id',id); 
            a.textContent = text;  
            AppendC(parent,a);
            break;
        case 3:
            var a = document.createElement('h3'); 
            a.setAttribute('id',id); 
            a.textContent = text;  
            AppendC(parent,a); 
            break;
        case 4:
            var a = document.createElement('h4'); 
            a.setAttribute('id',id); 
            a.textContent = text;  
            AppendC(parent,a); 
            break;
        case 5:
            var a = document.createElement('h5'); 
            a.setAttribute('id',id); 
            a.textContent = text;  
            AppendC(parent,a); 
            break;
        case 6:
            var a = document.createElement('h6'); 
            a.setAttribute('id',id); 
            a.textContent = text;  
            AppendC(parent,a); 
            break;
        case 7: 
            var a = document.createElement('h7'); 
            a.setAttribute('id',id); 
            a.textContent = text;  
            AppendC(parent,a);
            break;
    }
}
function NewLine(id){
    Append(id,"<br>");
}
function SetValue(id,content){
    document.getElementById(id).setAttribute('value',content);
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