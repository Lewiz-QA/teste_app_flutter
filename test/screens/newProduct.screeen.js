class newProductScreen {

    get #cardImage(){
        return $('id:addImageContainer')
    }

    async addImage(){
        return await this.#cardImage.click()
    }

    get #chooseTypeOfUpload(){
        return $('id:textWPMediaLibrary')
    }

    async selectTypeOfUpload(){
        await this.#chooseTypeOfUpload.waitForExist({ timeout: 5000 })
        return await this.#chooseTypeOfUpload.click()
    }

    get #chooseImage(){
        return $('(//android.widget.ImageView[@content-desc="Product image"])[1]')
        //resource-id: com.woocommerce.android:id/imageView
        //index: 0
    }

    async selectImage(){
        await this.#chooseImage.waitForExist({ timeout: 5000 })
        return await this.#chooseImage.click()
    }

    get #doneButton(){
        return $('id:menu_done')
    }

    async uploadImage(){
        await this.#doneButton.waitForExist({ timeout: 5000 })
        return await this.#doneButton.click()
    }

    get #turnBackButton(){
        return $('~Navigate up')
    }

    async getBackToNewProduct(){
        await this.#turnBackButton.waitForExist({ timeout: 5000 })
        return await this.#turnBackButton.click()
    }

    get #titleProduct(){
        return $('id:editText')
    }

    async enterProductTitle(){
        await this.#titleProduct.waitForExist({ timeout: 5000 })
        return await this.#titleProduct.setValue('Produto Teste')
    }

    get #productDescription(){
        return $('android=new UiSelector().text("Describe your product")')
    }

    async openDescriptionScreen(){
        await this.#productDescription.waitForExist({ timeout: 5000 })
        return await this.#productDescription.click()
    }

    get #fieldDescription(){
        return $('id:visualEditor')
    }

    async describeYourProduct(){
        await this.#fieldDescription.waitForExist({ timeout: 5000 })
        return await this.#fieldDescription.setValue('New Product.')
    }

    get #addPrice(){
        return $('android= new UiSelector().text("Add price")')
    }

    get #regularPrice(){
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #salePrice(){
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    async fillPrice(){
        await this.#addPrice.click()
        await this.#regularPrice.waitForExist({ timeout: 5000 })
        await this.#regularPrice.setValue('100')
        await this.#salePrice.setValue('80.50')
    }      
}

module.exports = new newProductScreen()