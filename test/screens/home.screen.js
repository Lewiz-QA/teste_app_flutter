class HomeScreen {
    get #clickHamburguerButton(){
        return $('~Open navigation menu')
    }

    async goToLeftDrawer(){
        await this.#clickHamburguerButton.click()
    }

    get #clickLoginButton(){
        return $('android= new UiSelector().text("Fazer Login")')
        //return $('//android.view.View[@content-desc="Lu Bolachas Olá, Fazer Login"]')
    }

    async goToLogin(){
        await this.#clickLoginButton.waitForExist({ timeout: 20000 })
        await this.#clickLoginButton.click()
    }

    get #getDrawerInfo(){
        return $('~Lu Bolachas Olá, Luiz Guilherme Menon Sair')
    }

    async getButtonLogout(){
        await this.#getDrawerInfo.getText()
    }


}

module.exports = new HomeScreen()

