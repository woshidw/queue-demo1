# parcel与dist

### 安装parcel 

`yarn global add parcel-bundler`

### 开发时测试

`parcel src/index.html`

>终端会开启代码监听，同时打开parcel的内置服务器，点击链接，打开http://localhost:1234就能看到效果。
>
>执行完这句命令的同时，文件里会生成一个dist目录，这个dist会对我项目里原有的html,js,css文件进行重构，重新在dist目录里生成一份。但是，每个js,css都多了一个对应的.map文件。

### 构建
`parcel build src/index.html --no-minify`   //不压缩

此时，第一次build，会创建一个package.json文件

build之前先把原来的dist删掉，再build，生成新的dist。

`rm -rf dist`

`parcel build src/index.html --no-minify`


>因为我们要用dist里的html发布，看看这个文件能不能用。打开dist目录，里边的index.html文件，所以我们需要把默认的改成dist目录下的。

`parcel build src/index.html --no-minify --public-url ./`

>这样就可以让index.html引用它同级的main.js。重新build之后，发现index.html里的js引用正确了

然后就可以用dist部署pages了
