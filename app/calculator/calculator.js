function DecimalToBinary(value){
    return (value).toString(2);
}
function DecimalToOctal(value){
    return (value).toString(8);
}
function DecimalToHexadecimal(value){
    return (value).toString(16).toUpperCase();
}

function BinaryToDecimal(value){
    return parseInt(value,2);
}
function BinaryToOctal(value){
    return parseInt(value,2).toString(8);
}
function BinaryToHexadecimal(value){
    return parseInt(value,2).toString(16).toUpperCase();
}

function OctalToDecimal(value){
    return parseInt(value,8);
}
function OctalToBinary(value){
    return parseInt(value,8).toString(2);
}
function OctalToHexadecimal(value){
    return parseInt(value,8).toString(16).toUpperCase();
}

function HexadecimalToDecimal(value){
    return parseInt(value,16);
}
function HexadecimalToBinary(value){
    return parseInt(value,16).toString(2);
}
function HexadecimalToOctal(value){
    return parseInt(value,16).toString(8);
}

function fclear(id){
    document.getElementById(id).innerHTML = "";
}

function ftoInt(value){
    return parseInt(value,10);
}

function fwrite(id,content){
    document.getElementById(id).innerHTML += content;
}

function CElement(_element, _content, _div){
    var x = document.createElement(_element);
    x.innerHTML = _content;
    document.getElementById(_div).appendChild(x);
}

function CH7(id,content){
    var x = document.createElement("h7");
    var t = document.createTextNode(content);
    x.appendChild(t);
    document.getElementById(id).appendChild(x);
}

function Show_Input(_from,_to,_toInt){
    fclear(`c_title`);
    fclear(`box`);
    fwrite(`c_title`,`
    <h3>` + _from + ` - To ` + _to + `</h3>
    `);
    fwrite(`box`,`
    <h3>` + _from + `</h3><input type="text" id="num1"/>
    <h3>` + _to + `</h3><input type="text" id="num2" readonly="readonly"><br><br>`);

    if (_toInt){
        fwrite(`box`,`
        <button type="button" id="resultBtn" onclick="
            document.getElementById('num2').value = ` + _from + `To` + _to + `(ftoInt(document.getElementById('num1').value));">
            Convert
            </button>`
        );
    } else {
        fwrite(`box`,`
        <button type="button" id="resultBtn" onclick="
            document.getElementById('num2').value = ` + _from + `To` + _to + `(document.getElementById('num1').value);">
            Convert
            </button>`
        );
    }
}

function ShowDtoB(){
    Show_Input('Decimal','Binary',true);
}

function ShowDtoO(){
    Show_Input('Decimal','Octal',true);
}

function ShowDtoH(){
    Show_Input('Decimal','Hexadecimal',true);
}

function ShowBtoD(){
    Show_Input('Binary','Decimal',true);
}

function ShowBtoO(){
    Show_Input('Binary','Octal',true);
}

function ShowBtoH(){
    Show_Input('Binary','Hexadecimal',true);
}

function ShowOtoD(){
    Show_Input('Octal','Decimal',true);
}

function ShowOtoB(){
    Show_Input('Octal','Binary',true);
}

function ShowOtoH(){
    Show_Input('Octal','Hexadecimal',true);
}

function ShowHtoD(){
    Show_Input('Hexadecimal','Decimal',false);
}

function ShowHtoB(){
    Show_Input('Hexadecimal','Binary',false);
}

function ShowHtoO(){
    Show_Input('Hexadecimal','Octal',false);
}