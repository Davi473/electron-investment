## Extensão para empacotar o projeto
```
 $ npm install electron-packager -g
```

### Comando para fazer o empacotamento
```
 $ electron-packager <pasta do projeto> <nome q vc quer para o app> --platform=<nome da plataforma> --arch<arquitetura do sistema x64 ou ia32> --icon=<o caminha mas imagem para o app>


 Cada platadorma:
    Mac = darwin
    Windows = win32
    Linux = linux
    se colocar "mas" vai gerar para a loja do mac "Mac Story"
    se colocar "all" vai gerar para as 4

 Formato do icon: 
    " Cada icone tem que ser a extensão de cada
        sistema operacional desejado"

    Mac = .icns
    Windows = .ico
    Linux = .png

 Formato de arquitetura
    x64
    ai32
    se colocar "all" gerar para todos
```
#### Exemplo
```
 $ electron-packager alura-timer/ atura-timer --platform=win32 --arch=x64 --icon=icon/icon.ico
```

### Exemplo para todos
```
 $ electron-packager alura-timer/ atura-timer --platform=win32, linux, darwin --arch=x64 --icon=icon/icon

 " Comentario "
    Se vc tentar fazer isso fora no sistema operacinal Windows sem usar o Wine
    vai dar erro 
```