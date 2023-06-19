const { app, BrowserWindow, ipcMain, Notification, Menu } = require('electron');
const Store = require('electron-store');
const path = require('path');

const isDev = require('electron-is-dev');
require('@electron/remote/main').initialize();

const schema = {
  tasks: {
    type: 'array',
    default: [],
    items: {
      type: 'object',
      properties: {
        eventName: { type: 'string' },
        eventDate: { type: 'string' },
      },
    },
  },
};

const store = new Store({ schema });

ipcMain.handle('getStoreValue', (event, key) => {
  return store.get(key);
});

ipcMain.handle('setStoreValue', (event, key, value) => {
  store.set(key, value);
});

ipcMain.handle('showNotification', (event, eventName, eventDate) => {
  const notification = new Notification({
    title: 'Tache ajoutée',
    body: `La tâche ${eventName} pour la date ${eventDate} a été ajoutée !`,
  });

  notification.show();
});

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

const menu = Menu.buildFromTemplate([]);

Menu.setApplicationMenu(menu);