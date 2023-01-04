const homeScreen = require("../screens/home.screen");
//const { login } = require("../screens/login.screen");
const loginScreen = require("../screens/login.screen");

let usuario = "lewizmenon@gmail.com"
let senha = "123456"

describe('Realizar Login no App', () => {
    it('Deve realizar Login', async () => {
        await homeScreen.goToLeftDrawer()
        await homeScreen.goToLogin()

        await loginScreen.login(usuario,senha)

        expect(await homeScreen.getButtonLogout()).contains('Sair')


        /*await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.login(usuario,senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')

        await myStoreScreen.goToProducts()
        await productsScreen.selectTypeOfNewProduct()
        await newProductScreen.addImage()
        await newProductScreeen.enterProductTitle()
        await newProductScreeen.describeYourProduct()
        await newProductScreeen.fillPrice()
        await newProductScreeen.fillInventory()
        await newProductScreeen.addMoreDetails()
        await newProductScreeen.fillShipping()
        await newProductScreeen.publishProduct()
        await newProductScreeen.seeMoreOptions()

        expect(await newProductScreeen.getViewOnStoreOption()).toEqual('View product on store')*/

    });
})