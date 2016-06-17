meteor remove blaze-html-templates
meteor add angular2-compilers barbatus:angular2-runtime
meteor npm install --save angular2-meteor @angular/platform-browser-dynamic
meteor add angular2-compilers

npm install typings -g
typings init
typings install es6-promise --save
typings install dt~es6-shim --global --save
typings install registry:env/meteor --global