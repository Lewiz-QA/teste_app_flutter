const homeScreen = require("../screens/home.screen");
//const { login } = require("../screens/login.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const productsScreen = require("../screens/products.screen");
const newProductScreen = require("../screens/newProduct.screeen");
const newProductScreeen = require("../screens/newProduct.screeen");

let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
let urlLoja = 'http://lojaebac.ebaconline.art.br/'

describe('Acessar o Painel de Administrador', () => {
    it('Deve realizar login com credenciais válidas', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.login(usuario,senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')

        await myStoreScreen.goToProducts();
        await productsScreen.goToNewProduct();
        await productsScreen.selectTypeOfNewProduct();
        await newProductScreen.addImage();
        await newProductScreen.selectTypeOfUpload();
        await newProductScreen.selectImage();
        await newProductScreen.uploadImage();
        await newProductScreen.getBackToNewProduct();
        await newProductScreeen.enterProductTitle();
        await newProductScreeen.openDescriptionScreen();
        await newProductScreeen.describeYourProduct();
        await newProductScreeen.getBackToNewProduct();
        await newProductScreeen.fillPrice();
        await newProductScreeen.getBackToNewProduct();
        await newProductScreeen.addInventory();
        await newProductScreeen.fillInventory();
        await newProductScreeen.getBackToNewProduct();
        await newProductScreeen.addMoreDetails();
        await newProductScreeen.addShipping();
        await newProductScreeen.fillShipping();
        await newProductScreeen.getBackToNewProduct();
        await newProductScreeen.publishProduct();

    });
})