//pageClass represents the webpage of application of every navigation
import {BrowserContext, Page} from '@playwright/test'
import { URLConstants } from '../constants/urlConstants';
export class LoginPage {
  
    page:Page;
    context:BrowserContext
    constructor(page:Page,context:BrowserContext){
        this.page=page;
        this.context=context

    }
    //create methods for evry action in the webPage
    async navigate(){
        await this.page.goto(URLConstants.url)
    }
    async enterCredentials(uname:string,pwd:string){
        await this.page.fill("#username",uname);
        await this.page.fill("#password",pwd)
    }
    async clickLogin(){
        await this.page.click(".decorativeSubmit")
        await this.context.storageState({path:"./storagestate/login.json"})
    }
}