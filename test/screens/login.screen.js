class LoginScreen {

    get #email(){ return $('//android.view.View/android.view.View[2]/android.view.View/android.view.View/android.widget.EditText[1]') }

    get #password() { return $('android.widget.EditText[3]') }

    get #entrarButton() { return $('android= new UiSelector().text("Entrar")') }

    async login(username, password){
        await this.#email.waitForExist({ timeout: 20000 })
        await this.#email.setValue(username)
        await this.#password.setValue(password)
        await this.#entrarButton.click()
    }

}

module.exports = new LoginScreen()