/*
script to set element id='dateAccessedBody' or/and id='dateAccessedFoot' to date.now
*/
const eleB = document.getElementById("dateAccessedBody");
const eleF = document.getElementById("dateAccessedFoot");
const dfmt = new Intl.DateTimeFormat('en-US');
if (eleB) {eleB.innerText = dfmt.format(Date.now());}
if (eleF) {eleF.innerText = dfmt.format(Date.now());}
