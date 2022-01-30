const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkElementExists = require("../support/check/checkElementExists");
const checkContainsText = require("../support/check/checkContainsText")
const checkUrlContains = require("../support/check/checkUrlContains")

Given(/^Sanity$/, function () {
    console.log("selam")
});

Given(/^that User goes to Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "http://localhost:8081/") //bende 8080 portunu tomcat kullanıyor. O yüzden 8081 yaptım
});

When(/^page is loaded$/, async function(){
    await checkElementExists.call(this, ".home", false)
})

Then(/^User can see some of videos' title like$/, async function(arr){
    const selector = ".title"
    // console.log(arr.rawTable.map(i=>i))

    // await Promise.all(arr.rawTable.map(async (elem) => {
    //     console.log(elem)
    //     await checkContainsText.call(this, selector, false, elem)
    // }));

    for (let [ txt ] of arr.rawTable) {
        await checkContainsText.call(this, selector, false, txt)
    }
})

Given(/^that User is on Video Site Project's HomePage$/, async function () {
    await openUrl.call(this, "http://localhost:8081/") //bende 8080 portunu tomcat kullanıyor. O yüzden 8081 yaptım
});

When("User clicks {string} video", async function(linkText){
    const video = await this.page.$("a[href='https://www.youtube.com/watch?v=qZXt1Aom3Cs']")
    await video.click()
})

Then("User should see watch url correctly", async function(){
    await this.page.waitForNavigation()
    await checkUrlContains.call(this, false, "https://www.youtube.com/watch?v=qZXt1Aom3Cs")
})

