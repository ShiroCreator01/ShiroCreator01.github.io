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
var c_control_multilinetextbox = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("Edit");
PCTSTR text = _T("this is multiline textbox");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY | ES_MULTILINE | WS_VSCROLL;
int left = 0;
int top = 0;
int width = 100;
int height = 32;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND multilntxtbox1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
`;
var c_control_numberbox = `DWORD dwExStyle = 0;
PCTSTR clazz = _T("Edit");
PCTSTR text = _T("123456");
DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY | ES_NUMBER;
int left = 0;
int top = 0;
int width = 100;
int height = 32;
HWND parent = hWnd;
HMENU id = NULL;
HINSTANCE hInst = NULL;
LPVOID lpParam = NULL;
HWND numbox1 = CreateWindowEx(dwExStyle, clazz, text, dwStyle, left, top, width, height, parent, id, hInst, lpParam);
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
var clt_setText = `Set Text`;
var cl_setText = `SetWindowText(txtbox1, (new string("New Text"))->c_str());`;
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

function CH3(_content, _div){
    var x = document.createElement("h3");
    var t = document.createTextNode(_content);
    x.appendChild(t);
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

function Show_Control_Button(){
    ChangeTitle('c_title','Control - Button');
    CodeBox('Template1','_box1');
    CodeBox('Button','_box2');
    ClearDiv('_1box');
    CH3(clt_setText,'_1box');
    CPre(cl_setText,'_1box');
}
function Show_Control_CheckBox(){
    ChangeTitle('c_title','Control - CheckBox');
    CodeBox('Template1','_box1');
    CodeBox('CheckBox','_box2');
    ClearDiv('_1box');
    CH3(clt_setText,'_1box');
    CPre(cl_setText,'_1box');
}
function Show_Control_ComboBox(){
    ChangeTitle('c_title','Control - ComboBox');
    CodeBox('Template1','_box1');
    CodeBox('ComboBox','_box2');
    ClearDiv('_1box');
}
function Show_Control_Label(){
    ChangeTitle('c_title','Control - Label');
    CodeBox('Template1','_box1');
    CodeBox('Label','_box2');
    ClearDiv('_1box');
    CH3(clt_setText,'_1box');
    CPre(cl_setText,'_1box');
}
function Show_Control_ListBox(){
    ChangeTitle('c_title','Control - ListBox');
    CodeBox('Template1','_box1');
    CodeBox('ListBox','_box2');
    ClearDiv('_1box');
}
function Show_Control_RadioButton(){
    ChangeTitle('c_title','Control - RadioButton');
    CodeBox('Template1','_box1');
    CodeBox('RadioButton','_box2');
    ClearDiv('_1box');
    CH3(clt_setText,'_1box');
    CPre(cl_setText,'_1box');
}
function Show_Control_TextBox(){
    ChangeTitle('c_title','Control - TextBox');
    CodeBox('Template1','_box1');
    CodeBox('TextBox','_box2');
    ClearDiv('_1box');
    CH3(clt_setText,'_1box');
    CPre(cl_setText,'_1box');
}