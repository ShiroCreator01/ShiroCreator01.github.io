function ShowInput(_from,_to){
    Clear(`c_title`);
    Clear(`box`);
    H('c_title','',_from + ' - To ' + _to,3,'');
    H('box','',_from,3,'');
    Textbox('box','num1','',false);
    H('box','',_to,3,'');
    Textbox('box','num2','',true);
    NewLine('box');
    NewLine('box');
}
function ShowButtonA(_from,_to){Button('box','resultBtn','Convert',function(){SetValue("num2",ConvertA(_from,_to,ToInt(GetValue("num1"))));});}
function ShowButtonB(_from,_to){Button('box','resultBtn','Convert',function(){SetValue("num2",ConvertA(_from,_to,GetValue("num1")));});}

function ShowDtoB(){ShowInput('Decimal','Binary');ShowButtonA('dec','bin');}
function ShowDtoO(){ShowInput('Decimal','Octal');ShowButtonA('dec','oct');}
function ShowDtoH(){ShowInput('Decimal','Hexadecimal');ShowButtonA('dec','hex');}
function ShowBtoD(){ShowInput('Binary','Decimal');ShowButtonA('bin','dec');}
function ShowBtoO(){ShowInput('Binary','Octal');ShowButtonA('bin','oct');}
function ShowBtoH(){ShowInput('Binary','Hexadecimal');ShowButtonA('bin','hex');}
function ShowOtoD(){ShowInput('Octal','Decimal');ShowButtonA('oct','dec');}
function ShowOtoB(){ShowInput('Octal','Binary');ShowButtonA('oct','bin');}
function ShowOtoH(){ShowInput('Octal','Hexadecimal');ShowButtonA('oct','hex');}
function ShowHtoD(){ShowInput('Hexadecimal','Decimal');ShowButtonB('hex','dec');}
function ShowHtoB(){ShowInput('Hexadecimal','Binary');ShowButtonB('hex','bin');}
function ShowHtoO(){ShowInput('Hexadecimal','Octal');ShowButtonB('hex','oct');}