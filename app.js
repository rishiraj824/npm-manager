var electron  = require('electron');
const remote = require('electron').remote;


electron.app.on('ready' , function(){
	var mainWindow = new electron.BrowserWindow({useContentSize:true, title:"NPM Package Manager", autoHideMenuBar:true, thickFrame:true})
	mainWindow.isResizable(false);
	mainWindow.webContents.openDevTools();
	mainWindow.loadURL('file://' + __dirname + '/index.html')	
})
