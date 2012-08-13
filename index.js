var Window = require('./Window'),
    //File = require('./File').File,
    fs = require('fs'),
    path = require('path');

module.exports = {
  enumerateWindows: Window.enumerate,
  Window: Window
};


console.log(module.exports);

// var File = File;
// var FileAttributes = require('./File').FileAttributes;

// var HKEYS = {};

// function canonicalHkey(name, address){
//   var hkey = new Buffer(8);
//   hkey.writeUInt64LE(address);
//   hkey.type = HKEY;
//   hkey.name = name;
//   return HKEYS[name] = hkey;
// }

// var HKLM = canonicalHkey('HKEY_LOCAL_MACHINE', 0x80000001);
// var HKU = canonicalHkey('HKEY_CURRENT_USER', 0x80000002);
// //HKCU: HKEY_CURRENT_USER,
// //HKCR: HKEY_CLASSES_ROOT,
// //HCC: HKEY_CURRENT_CONFIG,
