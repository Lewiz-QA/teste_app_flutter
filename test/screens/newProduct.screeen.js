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
    
    get #inventory(){
        return $('android= new UiSelector().text("Inventory")')
    }

    async addInventory(){
        await this.#inventory.waitForExist({ timeout: 5000 })
        return await this.#inventory.click()
    }

    get #sku(){
        return $('id:edit_text')
    }

    get #switchStock(){
        return $('id:manageStock_switch')
    }

    get #quantity(){
        return $('//android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    async fillInventory(){
        await this.#sku.waitForExist({ timeout: 5000 })
        await this.#sku.setValue('P12345678901')
        await this.#switchStock.click()
        await this.#quantity.setValue('1000')
    }

    get #moreDetails(){
        return $('id:productDetail_addMoreButton')
    }

    async addMoreDetails(){
        await this.#moreDetails.waitForExist({ timeout: 5000 })
        return await this.#moreDetails.click()
    }

    get #shipping(){
        return $('android= new UiSelector().text("Shipping")')
    }

    async addShipping(){
        await this.#shipping.waitForExist({ timeout: 5000 })
        return await this.#shipping.click()
    }

    get #weight(){
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #length(){
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #width(){
        return $('//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #height(){
        return $('//android.widget.LinearLayout[4]/android.widget.FrameLayout/android.widget.EditText')
    }

    async fillShipping(){
        await this.#weight.waitForExist({ timeout: 5000 })
        await this.#weight.setValue('10')
        await this.#length.setValue('15')
        await this.#width.setValue('20')
        await this.#height.setValue('25')
    }

    get #publishButton(){
        return $('id:menu_done')
    }

    async publishProduct(){
        await this.#publishButton.waitForExist({ timeout: 5000 })
        return await this.#publishButton.click()
    }
}

module.exports = new newProductScreen()