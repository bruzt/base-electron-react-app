const { app, BrowserWindow, screen } = require('electron');

module.exports = () => {

    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    let mainWindow = new BrowserWindow({
        width,
        height,
    });

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {

        mainWindow = null;
        app.quit();
    });

    return mainWindow;
}