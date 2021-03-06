function t_1(a,b,c,d,e){
    return `#include <iostream>
#include <windows.h>
#include <vector>
#include <commctrl.h>
using namespace std;
class ` + a + ` {
    public:
        HWND control = NULL;
        DWORD dwExStyle = 0;
        char* clazz = ` + b + `;
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
        HFONT cFont = nullptr;` + e + `
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
function t_label_setalign(a,b){
    return a + `.dwStyle &= ~(SS_LEFT | SS_CENTER | SS_RIGHT);
` + a + `.dwStyle |= ` + b + `;
SetWindowLong(` + a + `.control, GWL_STYLE, ` + a + `.dwStyle);
`;
}
function t_textbox_setalign(a,b){
    return a + `.dwStyle &= ~(ES_LEFT | ES_CENTER | ES_RIGHT);
` + a + `.dwStyle |= ` + b + `;
SetWindowLong(` + a + `.control, GWL_STYLE, ` + a + `.dwStyle);
`;
}
function t_setalign(a,b){
    return a + `.dwStyle &= ~(BS_LEFT | BS_CENTER | BS_RIGHT);
` + a + `.dwStyle |= ` + b + `;
SetWindowLong(` + a + `.control, GWL_STYLE, ` + a + `.dwStyle);
`;
}
function t_setflat(a){
    return a + `.dwStyle |= BS_FLAT;
SetWindowLong(` + a + `.control,GWL_STYLE,` + a + `.dwStyle);
`;
}
function t_setfontbold(a){
    return a + `.cLogFont.lfWeight = FW_BOLD;
` + a + `.updateFont();
`;
}
function t_setfontfamily(a){
    return `strcpy(` + a + `.cLogFont.lfFaceName,"Comic Sans MS");
` + a + `.updateFont();
`;
}
function t_setfontitalic(a){
    return a + `.cLogFont.lfItalic = true;
` + a + `.updateFont();
`;
}
function t_setfontsize(a){
    return `int size = 8;
` + a + `.cLogFont.lfHeight = -MulDiv(size, GetDeviceCaps(GetDC(0), LOGPIXELSY), 72);
` + a + `.updateFont();
`;
}
function t_setfontstrikethrough(a){
    return a + `.cLogFont.lfStrikeOut = true;
` + a + `.updateFont();
`;
}
function t_setfontunderline(a){
    return a + `.cLogFont.lfUnderline = true;
` + a + `.updateFont();
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
function t_progressbar_setprogress(a){
    return a + `.pbValue = 50;
SendMessage(` + a + `.control, PBM_SETPOS, (WPARAM)` + a + `.pbValue, 0);
`;
}
function t_progressbar_setrange(a){
    return a + `.pbMin = 10; ` + a + `.pbMax = 110;
SendMessage(` + a + `.control, PBM_SETRANGE, 0, MAKELPARAM(` + a + `.pbMin, ` + a + `.pbMax));
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
    return `char* text = "` + a + `";
` + b + `.text = text;
SetWindowText(` + b + `.control,text);
`;
}
function t_settext2(a,b){
    return `char* text = "` + a + `";
const size_t cSize = strlen(text)+1;
wchar_t* wc = new wchar_t[cSize];
mbstowcs(wc,text,cSize);
SetWindowTextW(` + b + `.control, wc);
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
function a_label_setalign(a,b,c){
    H('box','','Set Align ' + c,3,'');
    Pre('box','',t_label_setalign(a,b),'code');
}
function a_textbox_setalign(a,b,c){
    H('box','','Set Align ' + c,3,'');
    Pre('box','',t_textbox_setalign(a,b),'code');
}
function a_setalign(a,b,c){
    H('box','','Set Align ' + c,3,'');
    Pre('box','',t_setalign(a,b),'code');
}
function a_combobox_addlist(a){
    H('box','','Add List',3,'');
    Pre('box','',t_combobox_addlist(a),'code');
}
function a_listbox_addlist(a){
    H('box','','Add List',3,'');
    Pre('box','',t_listbox_addlist(a),'code');
}
function a_setflat(a){
    H('box','','Set Flat',3,'');
    Pre('box','',t_setflat(a),'code');
}
function a_setfontbold(a){
    H('box','','Set Font Bold',3,'');
    Pre('box','',t_setfontbold(a),'code');
}
function a_setfontfamily(a){
    H('box','','Set Font Family',3,'');
    Pre('box','',t_setfontfamily(a),'code');
}
function a_setfontitalic(a){
    H('box','','Set Font Italic',3,'');
    Pre('box','',t_setfontitalic(a),'code');
}
function a_setfontsize(a){
    H('box','','Set Font Size',3,'');
    Pre('box','',t_setfontsize(a),'code');
}
function a_setfontstrikethrough(a){
    H('box','','Set Font Strikethrough',3,'');
    Pre('box','',t_setfontstrikethrough(a),'code');
}
function a_setfontunderline(a){
    H('box','','Set Font Underline',3,'');
    Pre('box','',t_setfontunderline(a),'code');
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
function a_progressbar_setprogress(a){
    H('box','','Set Progress',3,'');
    Pre('box','',t_progressbar_setprogress(a),'code');   
}
function a_progressbar_setrange(a){
    H('box','','Set Range',3,'');
    Pre('box','',t_progressbar_setrange(a),'code');  
}
function a_setsize(a){
    H('box','','Set Size',3,'');
    Pre('box','',t_setsize(a),'code');   
}
function a_settext(a){
    H('box','','Set Text',3,'');
    Pre('box','',t_settext('New Text',a),'code'); 
    Pre('box','',t_settext2('New Text',a),'code'); 
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
    Pre('box','',t_1('Button','"Button"','','Click',''),'code');
    Pre('box','',
`Button ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_setalign(a,'BS_CENTER','Center');
    a_setalign(a,'BS_LEFT','Left');
    a_setalign(a,'BS_RIGHT','Right');
    a_setflat(a);   
    a_setfontbold(a);
    a_setfontfamily(a);
    a_setfontitalic(a);
    a_setfontsize(a);
    a_setfontstrikethrough(a);
    a_setfontunderline(a);
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
    Pre('box','',t_1('CheckBox','"Button"',' | BS_AUTOCHECKBOX','Check 1',''),'code');
    Pre('box','',
`CheckBox ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_setalign(a,'BS_CENTER','Center');
    a_setalign(a,'BS_LEFT','Left');
    a_setalign(a,'BS_RIGHT','Right');
    a_setflat(a); 
    a_setfontbold(a);
    a_setfontfamily(a);
    a_setfontitalic(a);
    a_setfontsize(a);
    a_setfontstrikethrough(a);
    a_setfontunderline(a);
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
    Pre('box','',t_1('ComboBox','"ComboBox"',' | CBS_DROPDOWN | WS_VSCROLL','',''),'code');
    Pre('box','',
`ComboBox ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box'); 
    a_combobox_addlist(a);  
    a_setfontbold(a);
    a_setfontfamily(a);
    a_setfontitalic(a);
    a_setfontsize(a);
    a_setfontstrikethrough(a);
    a_setfontunderline(a);
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
    Pre('box','',t_1('Label','"Static"','','Label 1',''),'code');
    Pre('box','',
`Label ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_label_setalign(a,'SS_CENTER','Center');
    a_label_setalign(a,'SS_LEFT','Left');
    a_label_setalign(a,'SS_RIGHT','Right');   
    a_setfontbold(a);
    a_setfontfamily(a);
    a_setfontitalic(a);
    a_setfontsize(a);
    a_setfontstrikethrough(a);
    a_setfontunderline(a);
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
    Pre('box','',t_1('ListBox','"ListBox"',' | WS_VSCROLL','',''),'code');
    Pre('box','',
`ListBox ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box'); 
    a_listbox_addlist(a);  
    a_setfontbold(a);
    a_setfontfamily(a);
    a_setfontitalic(a);
    a_setfontsize(a);
    a_setfontstrikethrough(a);
    a_setfontunderline(a);
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_setsize(a);
    a_settop(a);
    a_setwidth(a);
}

function Show_Control_ProgressBar(){
    var a = `pb1`;
    ChangeTitle('ProgressBar');
    Pre('box','',t_1('ProgressBar','PROGRESS_CLASS','','',`
        int pbMin = 0, pbMax = 100;
        int pbValue = 0;`),'code');
    Pre('box','',
`ProgressBar ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box'); 
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_progressbar_setprogress(a);
    a_progressbar_setrange(a);
    a_setsize(a);
    a_settop(a);  
    a_setwidth(a);
}

function Show_Control_RadioButton(){
    var a = `radiobutton1`;
    ChangeTitle('RadioButton');
    Pre('box','',t_1('RadioButton','"Button"',' | BS_AUTORADIOBUTTON','Radio 1',''),'code');
    Pre('box','',
`RadioButton ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_setalign(a,'BS_CENTER','Center');
    a_setalign(a,'BS_LEFT','Left');
    a_setalign(a,'BS_RIGHT','Right');
    a_setflat(a);   
    a_setfontbold(a);
    a_setfontfamily(a);
    a_setfontitalic(a);
    a_setfontsize(a);
    a_setfontstrikethrough(a);
    a_setfontunderline(a);
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
    Pre('box','',t_1('TextBox','"Edit"','','Text Here',''),'code');
    Pre('box','',
`TextBox ` + a + `(hWnd);
` + a + `.create();`,'code');
    Line('box');
    a_textbox_setalign(a,'ES_CENTER','Center');
    a_textbox_setalign(a,'ES_LEFT','Left');
    a_textbox_setalign(a,'ES_RIGHT','Right');  
    a_setfontbold(a);
    a_setfontfamily(a);
    a_setfontitalic(a);
    a_setfontsize(a);
    a_setfontstrikethrough(a);
    a_setfontunderline(a);
    a_setheight(a);
    a_setleft(a);
    a_setlocation(a);
    a_setsize(a);
    a_settext(a);   
    a_settop(a);
    a_setwidth(a);
}