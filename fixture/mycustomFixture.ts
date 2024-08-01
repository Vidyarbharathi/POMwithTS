import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { WelcomePage } from '../pages/welcomePage';
import { LeadsPage } from '../pages/leadsPage';


type myclassObjects={
  loginPage:LoginPage
  welcomePage:WelcomePage;
  homePage:HomePage;
  leadsPage:LeadsPage;
    
};

export const test =baseTest.extend<myclassObjects>({

    loginPage:async({page,context},use)=>{
        const loginPage=new LoginPage(page,context);
        use(loginPage)
    },
    homePage:async({page,context},use)=>{
        const homePage=new HomePage(page,context);
        use(homePage)
    },
   welcomePage:async({page,context},use)=>{
        const welcomePage=new WelcomePage(page,context);
        use(welcomePage)
    },
    leadsPage:async({page,context},use)=>{
        const leadsPage=new LeadsPage(page,context)
        use(leadsPage)
    },

})