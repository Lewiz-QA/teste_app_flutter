class productsScreen {
    get #addProduct(){
        return $('id:addProductButton')
    }

    async goToNewProduct(){
        await this.#addProduct.click()
    }

    get #chooseTypeOfProduct(){
        return $('android=new UiSelector().text("Simple physical product")')
    }

    async selectTypeOfNewProduct(){
        await this.#chooseTypeOfProduct.waitForExist({ timeout: 15000 })
        await this.#chooseTypeOfProduct.click()
    }
}

module.exports = new productsScreen()