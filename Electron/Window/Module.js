const { BrowserWindow, ipcMain } = require("electron");
const Window = require("./Window");

class WindowModule
{
  constructor ()
  {
    this._window = new Window(BrowserWindow, ipcMain);
  }
}

module.exports = WindowModule;