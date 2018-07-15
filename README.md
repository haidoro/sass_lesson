# SASSの学習
SASSにはSASS記法とSCSS記法があるが、一般的にSCSS記法が支持されているので今回はSCSS記法のみ学習します。

SCSS記法の拡張子は`.scss`です。

SASSにはRuby Sassとlibsassがあります。
もともとはRubyで作られていたものですが、現在は急速にlibsassが普及しています。  
ちなみにlibsassはC++で実装されています。

## SASSのビルドツール
* CUIツール
	* Ruby Sass
	* Grant
	* Gulp
* GUIツール
	* Dreamweaver
	* Prepros
	* Koala
	
## Gulpの導入
### gulp-cliの導入
```
npm install --global gulp-cli
```
### プロジェクトの作成
1. プロジェクトフォルダを任意の名前で作成します。  
今回はプロジェクトフォルダ名を`sass_leson1`としました。
2. その中に`_src`フォルダを作成
3. 次に`_src`フォルダの中に`sass`フォルダを作成してこのフォルダ内にsassファイル`style.scss`を作成します。
4. プロジェクトフォルダ`sass_leson1`の直下に`css`フォルダを作成しSASSファイルをコンパイルして出来上がったCSSファイルはこの中に入れます。
### package.jsonの作成
特に特記はありませんので今回は何か聞かれても全て「return」を押してください。  
最後に「Is this OK? (yes)」と聞かれたら、ここも「return」を押します。

```
npm init
```
これでpackage.jsonが作成されます。

### Gulpのローカルへのインストール

```
npm install --save-dev gulp
```

次のWARNが表示されたがとりあえずGulpはインストールされた。
```
npm WARN deprecated minimatch@2.0.10: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated minimatch@0.2.14: Please update to minimatch 3.0.2 or higher to avoid a RegExp DoS issue
npm WARN deprecated graceful-fs@1.2.3: graceful-fs v3.0.0 and before will fail on node releases >= v7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it in the tree.
```

## gulp-sassインストール

```
npm install --save-dev gulp-sass
```

## gulpfile.jsの記述
このファイルにSASSファイルの場所とコンパイル後のCSSファイルの場所を指定します。

```
'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('./_src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
  gulp.watch('./_src/sass/**/*.scss', ['sass']);
})

gulp.task('default',['watch']);

```

これでSASSがコンパイルできる環境が出来上がります。
コンパイルを行うにはコマンドで`gulp sass`と入力します。
また、毎回コンパイルするのではなく、監視させておいてsassファイルを保存すると自動でコンパイルさせるにはwatch機能を使います。その場合のコマンドは`gulp`と入力するだけです。

尚、これらの設定は全て`gulpfile.js`に記述しています。

CSSの出力形式は`gulpfile.js`の`outputStyle: 'expanded'`で調整します。

1. 「nested」はデフォルト形式で、インデントでネストが表現されます。
2. 「expanded」は標準的な記述になります。
3. 「compact」はセレクタごとに1行にまとめられて記述されます。
4. 「compress」はインデントや改行がなく圧縮された状態になります。リリース時はこの記述を使います。










