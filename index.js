var Window = require('./Window'),
    //File = require('./File').File,
    fs = require('fs'),
    path = require('path');

var bindings = require('./bindings');


module.exports = {
  enumerateWindows: Window.enumerate,
  lookup: bindings,
  Window: Window
};


 // WM_GETICON = 127,
 //    WM_SETICON = 128,
 //    ICON_SMALL = 0,
 //    ICON_BIG = 1,
 //    GW_OWNER = 4;



 // GetParent = bindings('GetParent'),
 //    GetWindow = bindings('GetWindow'),
 //    SetWindowText = bindings('SetWindowText'),
 //    ExtractIcon = bindings('ExtractIcon'),
 //    SendMessage = bindings('SendMessage'),
 //    NULL = bindings('null');


// GetWindow(hParent, GW_OWNER, OUTPUT hOwner).
// SetWindowTextA (hOwner, "This is the new application title").
// ExtractIconA (0, SEARCH("ICON.ICO":U), 0, OUTPUT hIcon).
// if (hIcon) {
//   SendMessageA(hOwner, WM_SETICON, ICON_BIG,   hIcon, OUTPUT i_ApiStat ).
//   SendMessageA(hOwner, WM_SETICON, ICON_SMALL, hIcon, OUTPUT i_ApiStat ).
// }

// var File = File;
// var FileAttributes = require('./File').FileAttributes;
