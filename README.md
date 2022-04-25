# automatic-login-to-hope
HOPEのトップページ[^1][^2]にアクセスすると、HOPEに自動的にログインします。

Tampermonkeyユーザの方は代わりに[こちら](https://github.com/m-atarashi/UserStyle-and-UserScript-Zoo/blob/main/HOPE/auto-login-to-hope.js)をご利用いただくこともできます。

## Installation
1. このリポジトリを[zipファイルでダウンロード](https://github.com/m-atarashi/automatic-login-to-hope/archive/refs/heads/main.zip "Download ZIP")するか、[最新のRealse](https://github.com/m-atarashi/automatic-login-to-hope/releases/latest)から**Source code (zip)** をダウンロードします。

2. ダウンロードしたzipファイルを任意のディレクトリに展開します。

3. Chromeの拡張機能の設定（chrome://extensions）を開き、右上の「デベロッパーモード」をオンにします。

4. 左上の「パッケージ化されていない拡張機能を読み込む」をクリックし、2. で展開したフォルダを選択します。

5. 拡張機能の一覧に「automatic-login-to-hope」が表示されていればインストールは完了です。

## Features
1. HOPEのトップページ[^1] または「HOPE: ログイン」[^2]にアクセスすると、「未来大の学生・教員 FUN Students & Staff」のリンク[^3]を経由して、未来大の認証画面[^4]に遷移します。その際、`location.href`を書き換えています。

2. その後、[Navigator.credentials](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials) を用いてブラウザに保存されたユーザー名とパスワードを取得、`input`要素に自動入力します。その際、`input`要素の`value`を書き換えています。

3. 最後に`submit`イベントを発火することで認証し、HOPEにログインします。

4. ログインに成功するとHOPEのマイページ[^5]に遷移します。

### Other Features
本拡張機能には **1. HOPEから学認ログインページ[^4]への遷移**、**2. 学認への自動ログイン** という2つの機能が含まれています。
そのため、学認ログインを要求する任意のシステム[^6]において、学認ログインページへの遷移後に自動ログイン機能が働きます。

## Acknowledgments
拡張機能およびREADME.mdの作成において、[kume-negitoro](https://github.com/kume-negitoro)氏の[hope-coursename-fix](https://github.com/Better-HOPE/hope-coursename-fix)を参考にさせていただきました。感謝申し上げます。

## Notes
バグや改善案等ありましたらお気軽にpull request飛ばしていただけますと幸いです。

連絡先：m-atarashi[at]sumilab.org

[^1]: [https://hope.fun.ac.jp](https://hope.fun.ac.jp)
[^2]: [https://hope.fun.ac.jp/local/hope/login.php](https://hope.fun.ac.jp/local/hope/login.php)
[^3]: [https://hope.fun.ac.jp/auth/saml2/login.php?idp=1bec319bca7458548c77d545a2a1b3de](https://hope.fun.ac.jp/auth/saml2/login.php?idp=1bec319bca7458548c77d545a2a1b3de)
[^4]: [https://sso.fun.ac.jp/my.policy](https://sso.fun.ac.jp/my.policy)
[^5]: [hope.fun.ac.jp/my](hope.fun.ac.jp/my)
[^6]: [情報ライブラリー](https://library.fun.ac.jp/)のWebOPAC、[WebDav](https://webdav.fun.ac.jp/)、fun.ac.jpドメインによる[Googleログイン](https://accounts.google.com/AccountChooser)など
