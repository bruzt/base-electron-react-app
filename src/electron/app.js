const { app } = require('electron');
const mainWindow = require('./mainWindow');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

let mainW;

app.on('ready', () => {

    mainW = mainWindow();
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainW === null) {
        mainW = mainWindow();
    }
});