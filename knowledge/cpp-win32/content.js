function t_1(a,b,c,d){
    return `#include <iostream>
#include <windows.h>
#include <vector>
using namespace std;
class ` + a + ` {
    public:
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
        LOGFONT cLogFont;
        HFONT cFont = nullptr;
        ` + a + `(HWND parent){
            this->parent = parent;
            hInst = (HINSTANCE) GetWindowLongPtr(this->parent, GWLP_HINSTANCE);
        }
        void create(){
            SecureZeroMemory(&control, sizeof(HWND));
            control = CreateWindowEx(dwExStyle, clazz, text, dwStyle,left, top, width, height, parent, id, hInst, lpParam);
            strcpy( cLogFont.lfFaceName, "Arial" );
            cLogFont.lfHeight = -MulDiv(11, GetDeviceCaps(GetDC(0), LOGPIXELSY), 72);
            cLogFont.lfWidth = 0;
            cLogFont.lfWeight = FW_NORMAL;
            cLogFont.lfItalic = false;
            cLogFont.lfUnderline = false;
            cLogFont.lfStrikeOut = false;
            cLogFont.lfCharSet = ANSI_CHARSET;
            cLogFont.lfOutPrecision = OUT_DEFAULT_PRECIS;
            cLogFont.lfClipPrecision = CLIP_DEFAULT_PRECIS;
            cLogFont.lfQuality = DEFAULT_QUALITY;
            cLogFont.lfPitchAndFamily = DEFAULT_PITCH;
            updateFont();
        }
        void redraw(){
            InvalidateRect(control, NULL, true);
        }
        void refresh(){
            DestroyWindow(control);
            control = CreateWindowEx(dwExStyle, clazz, text, dwStyle,left, top, width, height, parent, id, hInst, lpParam);
            updateFont();
        }
        void updateFont() {
            if (cFont != nullptr) DeleteObject(cFont);
            cFont = CreateFontIndirect(&cLogFont);
            SendMessage(control, WM_SETFONT, (WPARAM) cFont, true);
            redraw();
        }
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
function t_listbox_addlist(a){
    return a + `.list.push_back("List 1");
` + a + `.list.push_back("List 2");
for (int i = 0; i < ` + a + `.list.size(); i++){
    SendMessage(` + a + `.control, LB_ADDSTRING, 0, (LPARAM) ` + a + `.list[i].c_str());
}
`;
}
function t_setheight(a){
    return a + `.height = 150;
SetWindowPos(` + a + `.control, NULL, 0, 0, ` + a + `.width, ` + a + `.height, SWP_NOMOVE);
GetClientRect(` + a + `.control, &` + a + `.cClientRect);
`;
}
function t_setleft(a){
    return a + `.left = 100;
SetWindowPos(` + a + `.control, NULL, ` + a + `.left, ` + a + `.top, 0, 0, SWP_NOSIZE);
GetClientRect(` + a + `.control, &` + a + `.cClientRect);
`;
}
function t_setlocation(a){
    return a + `.left = 100;
` + a + `.top = 100;
SetWindowPos(` + a + `.control, NULL, ` + a + `.left, ` + a + `.top, 0, 0, SWP_NOSIZE);
GetClientRect(` + a + `.control, &` + a + `.cClientRect);
`;
}
function t_setsize(a){
    return a + `.width = 150;
` + a + `.height = 150;
SetWindowPos(` + a + `.control, NULL, 0, 0, ` + a + `.width, ` + a + `.height, SWP_NOMOVE);
GetClientRect(` + a + `.control, &` + a + `.cClientRect);
`;
}
function t_settext(a,b){
    return `char* text = "` + a +`";
` + b +`.text = text;
SetWindowText(`+ b + `.control,text);
`;
}
function t_settop(a){
    return a + `.top = 100;
SetWindowPos(` + a + `.control, NULL, ` + a + `.left, ` + a + `.top, 0, 0, SWP_NOSIZE);
GetClientRect(` + a + `.control, &` + a + `.cClientRect);
`;
}
function t_setwidth(a){
    return a + `.width = 150;
SetWindowPos(` + a + `.control, NULL, 0, 0, ` + a + `.width, ` + a + `.height, SWP_NOMOVE);
GetClientRect(` + a + `.control, &` + a + `.cClientRect);
`;
}
function a_combobox_addlist(a){
    H('box','','Add List',3,'');
    Pre('box','',t_combobox_addlist(a),'code');
}
function a_listbox_addlist(a){
    H('box','','Add List',3,'');
    Pre('box','',t_listbox_addlist(a),'code');
}
function a_setheight(a){
    H('box','','Set Height',3,'');
    Pre('box','',t_setheight(a),'code'); 
}
function a_setleft(a){
    H('box','','Set Left',3,'');
    Pre('box','',t_setleft(a),'code');      
}
function a_setlocation(a){
    H('box','','Set Location',3,'');
    Pre('box','',t_setlocation(a),'code');   
}
function a_setsize(a){
    H('box','','Set Size',3,'');
    Pre('box','',t_setsize(a),'code');   
}
function a_settext(a){
    H('box','','Set Text',3,'');
    Pre('box','',t_settext('New Text',a),'code'); 
}
function a_settop(a){
    H('box','','Set Top',3,'');
    Pre('box','',t_settop(a),'code');      
}
function a_setwidth(a){
    H('box','','Set Width',3,'');
    Pre('box','',t_setwidth(a),'code'); 
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
    Pre('box','',
`Button ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_setsize(a);
    a_settext(a);
    a_settop(a);
    a_setwidth(a);
}

function Show_Control_CheckBox(){
    var a = `chkbox1`;
    ChangeTitle('CheckBox');
    Pre('box','',t_1('CheckBox','Button',' | BS_AUTOCHECKBOX','Check 1'),'code');
    Pre('box','',
`CheckBox ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_setsize(a);
    a_settext(a);  
    a_settop(a); 
    a_setwidth(a);
}

function Show_Control_ComboBox(){
    var a = `combobox1`;
    ChangeTitle('ComboBox');
    Pre('box','',t_1('ComboBox','ComboBox',' | CBS_DROPDOWN | WS_VSCROLL',''),'code');
    Pre('box','',
`ComboBox ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box'); 
    a_combobox_addlist(a);
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_setsize(a);
    a_settop(a);
    a_setwidth(a);
}

function Show_Control_Label(){
    var a = `lbl1`;
    ChangeTitle('Label');
    Pre('box','',t_1('Label','Static','','Label 1'),'code');
    Pre('box','',
`Label ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_setsize(a);
    a_settext(a); 
    a_settop(a);  
    a_setwidth(a);
}

function Show_Control_ListBox(){
    var a = `lstbox1`;
    ChangeTitle('ListBox');
    Pre('box','',t_1('ListBox','ListBox',' | WS_VSCROLL',''),'code');
    Pre('box','',
`ListBox ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box'); 
    a_listbox_addlist(a);
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_setsize(a);
    a_settop(a);
    a_setwidth(a);
}

function Show_Control_RadioButton(){
    var a = `radiobutton1`;
    ChangeTitle('RadioButton');
    Pre('box','',t_1('RadioButton','Button',' | BS_AUTORADIOBUTTON','Radio 1'),'code');
    Pre('box','',
`RadioButton ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_setsize(a);
    a_settext(a); 
    a_settop(a);  
    a_setwidth(a);
}

function Show_Control_TextBox(){
    var a = `txtbox1`;
    ChangeTitle('TextBox');
    Pre('box','',t_1('TextBox','Edit','','Text Here'),'code');
    Pre('box','',
`TextBox ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_setsize(a);
    a_settext(a);   
    a_settop(a);
    a_setwidth(a);
}