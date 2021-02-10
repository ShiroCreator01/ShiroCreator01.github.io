var c_control_button = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("Button");
PCTSTR text = _T("Click");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY;
int left = 0;
int top = 0;
int width = 100;
int height = 32;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND button1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
`;
var c_control_textbox = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("Edit");
PCTSTR text = _T("Text Here");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY;
int left = 0;
int top = 0;
int width = 100;
int height = 32;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND txtbox1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
`;

function CElement(_element, _content, _div){
    var x = document.createElement(_element);
    x.innerHTML = _content;
    document.getElementById(_div).appendChild(x);
}

function CPre(_content, _div){
    var x = document.createElement("pre");
    x.setAttribute("class", "code");
    var t = document.createTextNode(_content);
    x.appendChild(t);
    document.getElementById(_div).appendChild(x);
}

function ClearDiv(id){
    document.getElementById(id).innerHTML = "";
}   

function ChangeTitle(id,title){
    ClearDiv(id);
    CElement('h3',title,id);
}

function CodeBox(_id, _div){
    ClearDiv(_div);
    switch(_id){
        case 'Button':
            CPre(c_control_button,_div);
            break;
        case 'TextBox':
            CPre(c_control_textbox,_div);
            break;
        default:
            break;
    }
}
