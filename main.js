const electron = require('electron');
const {app, BrowserWindow, Menu, Tray} = electron;
const path = require('path');

let tray = null;

var startHandler = ()=>{
  let win = new BrowserWindow({width:800,height:600});
  win.loadURL('file:///'+path.join(__dirname,'index.html'));
  win.webContents.openDevTools();
  //win.loadURL('https://google.com');
};

app.on('ready', startHandler);

exports.openWindow = ()=>{
  let win = new BrowserWindow({width: 400,height: 200});
  win.loadURL('file:///'+path.join(__dirname,'bear.html'));
};

exports.addTray = ()=>{
  tray = new Tray('./tray_icon.ico');
  const contextMenu = Menu.buildFromTemplate([
    {label: 'exit', type: 'normal', click(){console.log("exit clicked");}}
  ]);
  //console.dir(contextMenu.items[0].label);
  tray.on('click',()=>{
    console.log("tray clicked");
  });
  tray.setToolTip('This is my application.');
  tray.setContextMenu(contextMenu);
};
