"use strict";
var aa = '22';
var bb = true;
var cc = ['11', '22'];
var dd = ['22', '33'];
var Sex;
(function (Sex) {
    Sex[Sex["man"] = 10] = "man";
    Sex[Sex["woman"] = 20] = "woman";
})(Sex || (Sex = {}));
var sex = Sex.man;
var ee = 'st';
function hh(x) {
    console.log(x);
}
console.log(aa, bb, cc, dd, ee, sex);
hh(true);
