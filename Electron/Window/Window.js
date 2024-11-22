const { app } = require("electron");
const axios = require("axios");

module.exports = class Window {
    constructor(BrowserWindow, ipcMain) 
    {
        this.BrowserWindow = BrowserWindow;
        this._mainWindow = null;

        app.on("ready", this.createMainWindow.bind(this));


        ipcMain.on("register-user", (event, user) => {
            axios.post("http://localhost:4000/register", user, {
                headers: { "Content-Type": "application/json"}
            })
            .then((response) => {
                if (response.data.id) this._mainWindow.loadURL(`file://${__dirname}/../../Pages/Login/index.html`);
                
            })
            // .catch((error) => {
            //     console.error("Erro ao registrar o usuário:", error.message);
            //     event.sender.send("register-user-fail", error.message);
            // });
        });
    }
    createMainWindow() 
    {
        this._mainWindow = new this.BrowserWindow({
            width: 1200,
            height: 800,
            backgroundColor: '#000000',
        });

        this._mainWindow.loadURL(`file://${__dirname}/../../Pages/Register/index.html`);

        this._mainWindow.on("closed", () => 
        {
            this._mainWindow = null;
        });
    }

    getWindow() 
    {
        return this._mainWindow;
    }
}