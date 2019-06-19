const { Menu } = require('electron');
const notifier = require('node-notifier');
const path = require('path');

let interval;

const menu = Menu.buildFromTemplate([
  {
    label: 'Interval',
    submenu: [
      {
        label: '10 seconds',
        click: () => {
          clearInterval(interval);
          interval = setInterval(() => {
            notifier.notify({
              title: '休憩しましょう',
              message: '作業をしてから10秒経過しました',
              icon: path.join(__dirname, '../res/icon.png'),
              contentImage: path.join(__dirname, '../res/icon.png'),
              sound: true
            })
          }, 10000);
        },
        accelerator: "CmdOrCtrl+Shift+S"
      },
      {
        label: '1 hour',
        click: () => {
          clearInterval(interval);
          interval = setInterval(() => {
            notifier.notify({
              title: '休憩しましょう',
              message: '作業をしてから1時間経過しました',
              icon: path.join(__dirname, '../res/icon.png'),
              contentImage: path.join(__dirname, '../res/icon.png'),
              sound: true
            })
          }, 3600000);
        },
        accelerator: "CmdOrCtrl+Shift+S"
      },
      {
        label: '2 hours',
        click: () => {
          clearInterval(interval);
          interval = setInterval(() => {
            notifier.notify({
              title: '休憩しましょう',
              message: '作業をしてから2時間経過しました',
              icon: path.join(__dirname, '../res/icon.png'),
              contentImage: path.join(__dirname, '../res/icon.png'),
              sound: true
            })
          }, 7200000);
        }
      },
      {
        label: '停止',
        click: () => {
          clearInterval(interval);
        }
      }
    ]
  }
]);

module.exports = {
  setup: () => {
    Menu.setApplicationMenu(menu);
  }
};