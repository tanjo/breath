const { Menu } = require('electron');

let interval;
let refWin;

const menu = Menu.buildFromTemplate([
  {
    label: 'Interval',
    submenu: [
      {
        label: '10 seconds',
        click: () => {
          if (refWin) {
            refWin.webContents.send('notifier-started', 10000);
          } else {
            console.log('win is null or undefined');
          }
        },
        accelerator: "CmdOrCtrl+Shift+S"
      },
      {
        label: '1 hour',
        click: () => {
          if (refWin) {
            refWin.webContents.send('notifier-started', 3600000);
          }
        },
        accelerator: "CmdOrCtrl+Shift+S"
      },
      {
        label: '2 hours',
        click: () => {
          if (refWin) {
            refWin.webContents.send('notifier-started', 7200000);
          }
        }
      },
      {
        label: '停止',
        click: () => {
          if (refWin) {
            refWin.webContents.send('notifier-stopped')
          } else {
            console.log('win is null or undefined');
          }
        }
      }
    ]
  }
]);

module.exports = {
  setup: (win) => {
    refWin = win;
    Menu.setApplicationMenu(menu);
  }
};