async function automaticLogin() {
    const cred = await navigator.credentials.get({ password: true })

    document.querySelector(`#auth_form input[name="username"]`).value = cred.id
    document.querySelector(`#auth_form input[name="password"]`).value = cred.password
    document.querySelector(`#auth_form`).submit()
}

void (async function main () {
    const loginPagePattern = /https:\/\/hope\.fun\.ac\.jp(\/local\/hope\/login\.php.*)?/
    if (location.href.match(loginPagePattern)) {
        location.href = 'https://hope.fun.ac.jp/auth/saml2/login.php?idp=1bec319bca7458548c77d545a2a1b3de'
    } else if (location.href === 'https://sso.fun.ac.jp/my.policy') {
        automaticLogin()
    }
})()
