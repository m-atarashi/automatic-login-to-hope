# automatic-login-to-hope
HOPEのトップページ[^1][^2]にアクセスすると、HOPEに自動的にログインします。

## Installation
1. このリポジトリを[zipファイルでダウンロード](https://github.com/m-atarashi/automatic-login-to-hope/archive/refs/heads/main.zip "Download ZIP")するか、[最新のRealse](https://github.com/m-atarashi/automatic-login-to-hope/releases/latest)から**Source code (zip)** をダウンロードします。

2. ダウンロードしたzipファイルを任意のディレクトリに展開します。

3. Chromeの拡張機能の設定（chrome://extensions）を開き、右上の「デベロッパーモード」をオンにします。

4. 左上の「パッケージ化されていない拡張機能を読み込む」をクリックし、3. で展開したフォルダを選択します。

5. 拡張機能の一覧に「automatic-login-to-hope」が表示されていればインストールは完了です。

## Features
1. HOPEのトップページ[^1] または「HOPE: ログイン」[^2]にアクセスすると、「未来大の学生・教員 FUN Students & Staff」のリンク[^3]を経由して、未来大の認証画面[^4]に遷移します。その際、`location.href`を書き換えています。

2. その後、[Navigator.credentials](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials) を用いてブラウザに保存されたユーザー名とパスワードを取得、inputフォームに自動入力します。最後にsubmitイベントを発火することで認証、HOPEにログインします。

3. ログインに成功するとHOPEのマイページ[^5]に遷移します。


## Acknowledgments
拡張機能およびREADME.mdの作成において、[kume-negitoro](https://github.com/kume-negitoro)氏の[hope-coursename-fix](https://github.com/Better-HOPE/hope-coursename-fix)を参考にさせていただきました。

## Notes
バグや改善案等ありましたらお気軽にpull requestを飛ばしていただけますと幸いです。

連絡先：m-atarashi[at]sumilab.org

[^1]: [https://hope.fun.ac.jp](https://hope.fun.ac.jp)
[^2]: [https://hope.fun.ac.jp/local/hope/login.php](https://hope.fun.ac.jp/local/hope/login.php)
[^3]: [https://hope.fun.ac.jp/auth/saml2/login.php?idp=1bec319bca7458548c77d545a2a1b3de](https://hope.fun.ac.jp/auth/saml2/login.php?idp=1bec319bca7458548c77d545a2a1b3de)
[^4]: [https://sso.fun.ac.jp/my.policy](https://sso.fun.ac.jp/my.policy)
[^5]: [hope.fun.ac.jp/my](hope.fun.ac.jp/my)
