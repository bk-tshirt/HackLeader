const {app, BrowserWindow} = require('electron');

const path = require('path')

const CreateWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),

            nodeIntegration: true
        },
        useContentSize:true,
        
        icon: path.join(__dirname, './img/Wolf.jpg')

    });
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    CreateWindow();


    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
    
            CreateWindow()
        }
    })
})


