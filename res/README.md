# リソース

## デフォルト通知アイコン

- [エアーソファーのイラスト \| かわいいフリー素材集 いらすとや](https://www.irasutoya.com/2017/09/blog-post_29.html)

## 通知アイコンの設定

リソースディレクトリに移動する。

```
cd res
```

`breath.iocnset` ディレクトリを作成し、各種サイズの png ファイルを格納する。

```
iconutil -c icns breath.iconset
```

を実行して breath.icns ファイルを生成する。


生成した icns ファイルを Terminal.icns として設定するため移動する。

```
mv breath.icns ../node_modules/node-notifier/vendor/mac.noindex/terminal-notifier.app/Contents/Resources/Terminal.icns
```

※ cp でコピーしてもかまいません。

完了。
