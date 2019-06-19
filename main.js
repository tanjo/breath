const { app, BrowserWindow } = require('electron');
const menu = require('./lib/menu');
const path = require('path');

let win;

function createWindow () {
  const { screen } = require('electron');
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  win = new BrowserWindow({
    title: "notify message",
    icon: path.join(__dirname + './res/icon.png'),
    frame: false,
    show: false,
    x: width - 290,
    y: height - 120,
    width: 280,
    height: 80,
    setMenu: null,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');

  win.setAlwaysOnTop(true);

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });

  menu.setup(win);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});