 export class LoginPage 
    {get userName() { return $('#login_field'); }

    get password() { return $('#password'); }

    get SignBtn() { return $('.js-sign-in-button'); }
    
    get selectrepo() { return $('.dashboard-sidebar .wb-break-word [href="/Julaqat/test1"]');}

    
    async performLogin(userName, password) {
        await this.userName.setValue(userName);
        await this.password.setValue(password);
        await this.SignBtn.click();
    }

    
}

