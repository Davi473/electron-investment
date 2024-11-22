const { ipcRenderer } = require('electron');

class Main
{
  constructor ()
  {
    
    this.init();
    this.buttonRegister();
  }

  init()
  {
    this.inputName = this.collectTagWithID("input-name");
    this.inputPassoword = this.collectTagWithID("input-passoword");
  }

  buttonRegister ()
  {
    const buttonRegister = this.collectTagWithID("button-register");
    buttonRegister.addEventListener("click", () => 
    {
      const dadosUser = this.dadosUser();
      ipcRenderer.send("register-user", dadosUser);
    });
  }

  buttonLogin ()
  {
    const buttonLogin = this.collectTagWithID("button-login");
    buttonLogin.addEventListener("click", () => 
    {
      const dadosUser = this.dadosUser();
      ipcRenderer.send("login-user", dadosUser);
    });
  }

  dadosUser ()
  {
    return {name: this.inputName.value, passoword: this.inputPassoword.value};
  }

  /**
     * @param {string} id 
  */
  collectTagWithID (id)
  {
      return document.querySelector(`#${id}`);
  }
}

new Main();