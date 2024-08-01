import { LoginPage } from "./loginPage";
import {BrowserContext, Page} from '@playwright/test'

export class WelcomePage extends LoginPage{
        constructor(page:Page,context:BrowserContext){
        super(page,context)
    }
    async clickCRM(){
        await this.page.goto("http://leaftaps.com/opentaps/control/login")
        await this.page.click("text=CRM/SFA")
    }
    async clickLogout(){
       // await this.page.click("#Logout")
    }


    
}