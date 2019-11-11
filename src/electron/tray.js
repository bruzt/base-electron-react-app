const { Tray, Menu, app } = require('electron');
const path = require('path');

module.exports = () => {

    let tray = new Tray(path.join(__dirname, '/assets/icons/appIcon.png'));
    
    tray.setToolTip('Minha aplicação');

    tray.setContextMenu(Menu.buildFromTemplate([
        { 
            label: 'Sair',
            click: () => {
                app.quit();
            }
        },
      ]));

    return tray;
}