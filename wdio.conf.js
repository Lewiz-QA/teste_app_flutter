const {join} = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter')

exports.config = {
    hostname: 'localhost', //Comentários para rodar no Emulador. Atualmente está para rodar no BrowserStack
    port: 4725,
    path: '/wd/hub',
    //user: "luizmenon_46bPFI", //BrowserStack
    //key: "8NgvkQKxhnRpWEaHrxyo",

    services: ['appium'],
    //services: ['browserstack'],
    specs: [
        './test/specs/*.spec.js'
    ],
    framework: 'mocha',
    
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        "appActivity": ".ui.main.MainActivity",
        "appWaitActivity": ".ui.login.LoginActivity",
        //"appWaitActivity": "com.woocommerce.android/.ui.login.LoginActivity",
        'newCommandTimeout': 240
   

        //'app' : 'bs://767ae1765354fafd90cb0a56fd1d6e9733b47150', //BrowserStack
        //'device' : 'Samsung Galaxy S22 Plus',
        //'os_version' : '12.0',
        //'project' : 'Meu primeiro projeto em Device Farm',
        //'build' : '1',
        //'name': 'teste_login'
      }],

      waitForTimeout: 20000,
      mochaOpts: {
        timeout: 300000
      },

      reporters: ['spec',
        ['allure', {
          outputDir: 'allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: true,
    }],
    [video, {
      saveAllVideos: true,       // If true, also saves videos for successful test cases
      videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
    }]
  ],

      onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    afterStep: async function (step, scenario, { error, duration, passed }, context) {

        await driver.takeScreenshot()
      
    }

}
