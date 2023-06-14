const { app, BrowserWindow, ipcMain, Notification } = require('electron')

const isDev = require('electron-is-dev')

// Enable live reload for Electron too
require('@electron/remote/main').initialize()

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
        }
    })

    win.loadURL(
        isDev
            ? 'http://localhost:3000'
            :
            `file://${path.join(__dirname, '../build/index.html')}`)
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
    })
}

ipcMain.on('notify', (_, message) => {
    new Notification({ title: 'Notifiation', body: message }).show();
})