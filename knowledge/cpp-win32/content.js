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
var c_control_checkbox = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("Button");
PCTSTR text = _T("Check 1");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY | BS_AUTOCHECKBOX;
int left = 0;
int top = 0;
int width = 100;
int height = 32;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND chkbox1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
`;
var c_control_combobox = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("ComboBox");
PCTSTR text = _T("");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY | CBS_DROPDOWN | WS_VSCROLL;
int left = 0;
int top = 0;
int width = 100;
int height = 100;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND combobox1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
SendMessage(combobox1, CB_ADDSTRING, 0, (LPARAM) (new string("item 1"))->c_str());
SendMessage(combobox1, CB_ADDSTRING, 0, (LPARAM) (new string("item 2"))->c_str());
SendMessage(combobox1, CB_ADDSTRING, 0, (LPARAM) (new string("item 3"))->c_str());
SendMessage(combobox1, CB_ADDSTRING, 0, (LPARAM) (new string("item 4"))->c_str());
SendMessage(combobox1, CB_ADDSTRING, 0, (LPARAM) (new string("item 5"))->c_str());
SendMessage(combobox1, CB_SETCURSEL, 0, 0);
`;
var c_control_label = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("Static");
PCTSTR text = _T("Label 1");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY;
int left = 0;
int top = 0;
int width = 100;
int height = 32;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND lbl1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
`;
var c_control_listbox = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("ListBox");
PCTSTR text = _T("");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY | WS_VSCROLL;
int left = 0;
int top = 0;
int width = 100;
int height = 50;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND listbox1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
SendMessage(listbox1, LB_ADDSTRING, 0, (LPARAM) (new string("item 1"))->c_str());
SendMessage(listbox1, LB_ADDSTRING, 0, (LPARAM) (new string("item 2"))->c_str());
SendMessage(listbox1, LB_ADDSTRING, 0, (LPARAM) (new string("item 3"))->c_str());
SendMessage(listbox1, LB_ADDSTRING, 0, (LPARAM) (new string("item 4"))->c_str());
`;
var c_control_passwordbox = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("Edit");
PCTSTR text = _T("PasswordHere");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY | ES_PASSWORD;
int left = 0;
int top = 0;
int width = 100;
int height = 32;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND passbox1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
`;
var c_control_radiobutton = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("Button");
PCTSTR text = _T("Radio 1");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_AUTORADIOBUTTON;
int left = 0;
int top = 0;
int width = 100;
int height = 32;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND radiobutton1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
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
var t_1 = `#include <Windows.h>
#include <tchar.h>
#include <iostream>

using namespace std;
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
        case 'Template1':
            CPre(t_1,_div);
            break;
        case 'Button':
            CPre(c_control_button,_div);
            break;
        case 'CheckBox':
            CPre(c_control_checkbox,_div);
            break;
        case 'ComboBox':
            CPre(c_control_combobox,_div);
            break;
        case 'Label':
            CPre(c_control_label,_div);
            break;
        case 'ListBox':
            CPre(c_control_listbox,_div);
            break;
        case 'PasswordBox':
            CPre(c_control_passwordbox,_div);
            break;     
        case 'RadioButton':
            CPre(c_control_radiobutton,_div);
            break;       
        case 'TextBox':
            CPre(c_control_textbox,_div);
            break;
        default:
            break;
    }
}
