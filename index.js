var remote = require('electron').remote;
const main = remote.require('./main.js');

var windowCreateButton = document.createElement('button');
windowCreateButton.textContent = 'open window';
windowCreateButton.addEventListener('click', ()=>{
  main.openWindow()
},false);

var trayAddButton = document.createElement('button');
trayAddButton.textContent = 'add tray';
trayAddButton.addEventListener('click', ()=>{
  main.addTray()
},false);

document.body.appendChild(windowCreateButton);
document.body.appendChild(trayAddButton);
