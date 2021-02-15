var c_Decimal_To_Binary = `(value).toString(2);`;
var c_Decimal_To_Octal = `(value).toString(8);`;
var c_Decimal_To_Hexadecimal = `(value).toString(16).toUpperCase();`;
var c_Binary_To_Decimal = `parseInt(value,2);`;
var c_Binary_To_Octal = `parseInt(value,2).toString(8);`;
var c_Binary_To_Hexadecimal = `parseInt(value,2).toString(16).toUpperCase();`;
var c_Octal_To_Decimal = `parseInt(value,8);`;
var c_Octal_To_Binary = `parseInt(value,8).toString(2);`;
var c_Octal_To_Hexadecimal = `parseInt(value,8).toString(16).toUpperCase();`;
var c_Hexadecimal_To_Decimal = `parseInt(value,16);`;
var c_Hexadecimal_To_Binary = `parseInt(value,16).toString(2);`;
var c_Hexadecimal_To_Octal = `parseInt(value,16).toString(8);`;

function ShowInput(_from,_to){
    Clear(`c_title`);
    Clear(`box`);
    H('c_title','',_from + ' - To ' + _to,3);;
}

function ShowDtoB(){ShowInput('Decimal','Binary');}
function ShowDtoO(){ShowInput('Decimal','Octal');}
function ShowDtoH(){ShowInput('Decimal','Hexadecimal');}
function ShowBtoD(){ShowInput('Binary','Decimal');}
function ShowBtoO(){ShowInput('Binary','Octal');}
function ShowBtoH(){ShowInput('Binary','Hexadecimal');}
function ShowOtoD(){ShowInput('Octal','Decimal');}
function ShowOtoB(){ShowInput('Octal','Binary');}
function ShowOtoH(){ShowInput('Octal','Hexadecimal');}
function ShowHtoD(){ShowInput('Hexadecimal','Decimal');}
function ShowHtoB(){ShowInput('Hexadecimal','Binary');}
function ShowHtoO(){ShowInput('Hexadecimal','Octal');}