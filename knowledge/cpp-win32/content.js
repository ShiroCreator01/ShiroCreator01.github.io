function t_1(a,b,c,d){
    return `#include <iostream>
#include <windows.h>
using namespace std;
class ` + a + ` {
    public:
        ` + a +
        `(HWND parent){
            this->parent = parent;
            hInst = (HINSTANCE) GetWindowLongPtr(this->parent, GWLP_HINSTANCE);
            SecureZeroMemory(&control, sizeof(HWND));
            control = CreateWindowEx(dwExStyle, clazz, text, dwStyle,left, top, width, height, parent, id, hInst, lpParam);
        }
        void refresh(){
            DestroyWindow(control);
            control = CreateWindowEx(dwExStyle, clazz, text, dwStyle,left, top, width, height, parent, id, hInst, lpParam);
        }
        HWND control = NULL;
        DWORD dwExStyle = 0;
        char* clazz = "` + b + `";
        char* text = "` + d + `";
        DWORD dwStyle = WS_CHILD | WS_VISIBLE | BS_NOTIFY` + c +`;
        int left = 0;
        int top = 0;
        int width = 100;
        int height = 100;
        HWND parent = NULL;
        HMENU id = NULL;
        HINSTANCE hInst = NULL;
        LPVOID lpParam = NULL;
        RECT cClientRect{0};
        vector<string> list;
};
`;
}
function t_combobox_addlist(a){
    return a + `.list.push_back("List 1");
` + a + `.list.push_back("List 2");
for (int i = 0; i < ` + a + `.list.size(); i++){
    SendMessage(` + a + `.control, CB_ADDSTRING, 0, (LPARAM) ` + a + `.list[i].c_str());
}
SendMessage(` + a + `.control, CB_SETCURSEL, 0, 0);
`;
}
function t_setlocation(a){
    return a + `.left = 100;
` + a + `.top = 100;
SetWindowPos(` + a + `.control, NULL, ` + a + `.left, ` + a + `.top, 0, 0, SWP_NOSIZE);
GetClientRect(` + a + `.control, &` + a + `.cClientRect);
`;
}
function t_settext(a,b){
    return `char* text = "` + a +`";
` + b +`.text = text;
SetWindowText(`+ b + `.control,text);
`;
}

function ChangeTitle(title){
    Clear(`c_title`);
    Clear(`box`);
    H('c_title','','Control - ' + title,3,'');    
}

function Show_Control_Button(){
    var a = `btn1`;
    ChangeTitle('Button');
    Pre('box','',t_1('Button','Button','','Click'),'code');
    Pre('box','',`Button ` + a + `(hWnd);`,'code');
    Line('box'); 
    H('box','','Set Location',3,'');
    Pre('box','',t_setlocation(a),'code');
    H('box','','Set Text',3,'');
    Pre('box','',t_settext('New Text',a),'code');   
}

function Show_Control_CheckBox(){
    var a = `chkbox1`;
    ChangeTitle('CheckBox');
    Pre('box','',t_1('CheckBox','Button',' | BS_AUTOCHECKBOX','Check 1'),'code');
    Pre('box','',`CheckBox ` + a + `(hWnd);`,'code');
    Line('box');
    H('box','','Set Location',3,'');
    Pre('box','',t_setlocation(a),'code');
    H('box','','Set Text',3,'');
    Pre('box','',t_settext('New Text',a),'code');   
}

function Show_Control_ComboBox(){
    var a = `combobox1`;
    ChangeTitle('ComboBox');
    Pre('box','',t_1('ComboBox','ComboBox',' | CBS_DROPDOWN | WS_VSCROLL',''),'code');
    Pre('box','',`ComboBox ` + a + `(hWnd);`,'code');
    Line('box'); 
    H('box','','Add List',3,'');
    Pre('box','',t_combobox_addlist(a),'code');
    H('box','','Set Location',3,'');
    Pre('box','',t_setlocation(a),'code');
}

function Show_Control_Label(){
    var a = `lbl1`;
    ChangeTitle('Label');
    Pre('box','',t_1('Label','Static','','Label 1'),'code');
    Pre('box','',`Label ` + a + `(hWnd);`,'code');
    Line('box');
    H('box','','Set Location',3,'');
    Pre('box','',t_setlocation(a),'code');
    H('box','','Set Text',3,'');
    Pre('box','',t_settext('New Text',a),'code');   
}

function Show_Control_ListBox(){
    var a = `lstbox1`;
    ChangeTitle('ListBox');
    Pre('box','',t_1('ListBox','ListBox',' | WS_VSCROLL',''),'code');
    Pre('box','',`ListBox ` + a + `(hWnd);`,'code');
    Line('box'); 
    H('box','','Set Location',3,'');
    Pre('box','',t_setlocation(a),'code');
}

function Show_Control_RadioButton(){
    var a = `radiobutton1`;
    ChangeTitle('RadioButton');
    Pre('box','',t_1('RadioButton','Button',' | BS_AUTORADIOBUTTON','Radio 1'),'code');
    Pre('box','',`RadioButton ` + a + `(hWnd);`,'code');
    Line('box');
    H('box','','Set Location',3,'');
    Pre('box','',t_setlocation(a),'code');
    H('box','','Set Text',3,'');
    Pre('box','',t_settext('New Text',a),'code');   
}

function Show_Control_TextBox(){
    var a = `txtbox1`;
    ChangeTitle('TextBox');
    Pre('box','',t_1('TextBox','Edit','','Text Here'),'code');
    Pre('box','',`TextBox ` + a  + `(hWnd);`,'code');
    Line('box');
    H('box','','Set Location',3,'');
    Pre('box','',t_setlocation(a),'code');
    H('box','','Set Text',3,'');
    Pre('box','',t_settext('New Text',a),'code');   
}