
IF "%1"=="" GOTO init
IF "%1"=="init" GOTO init
IF "%1"=="npm" GOTO initNpm
IF "%1"=="typings" GOTO initTypings
GOTO endProgram

:init
	meteor remove blaze-html-templates & meteor add angular2-compilers
IF "%1"=="" GOTO initNpm
GOTO endProgram

:initNpm
	meteor npm install & meteor npm install --save angular2-meteor @angular/platform-browser-dynamic@2.0.0-rc.1 @angular/core@2.0.0-rc.1 @angular/common@2.0.0-rc.1 @angular/compiler@2.0.0-rc.1 @angular/platform-browser@2.0.0-rc.1
& npm install angular2-meteor-auto-bootstrap --save 
IF "%1"=="" GOTO initTypings
GOTO endProgram

:initTypings
	npm install typings -g & typings init & typings install es6-promise --save & typings install dt~es6-shim --global --save & typings install registry:env/meteor --global
GOTO endProgram

:endProgram

# meteor add-platform android
# https://waffle.io/kevde/mosikero
# http://victorsavkin.com/post/119943127151/angular-2-template-syntax