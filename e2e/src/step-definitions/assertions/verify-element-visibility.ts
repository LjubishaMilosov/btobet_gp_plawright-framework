import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

Then(
    /^the home page should contain the text Welcome$/,
    async function(){
        console.log("the home page should contain the Welcome text")

        const content = await global.page.textContent(".logo-title strong")

        console.log(content)

       expect (content).toBe('        Welcome back! Please login to your account.')
    }
)