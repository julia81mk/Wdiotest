import { LoginPage } from './login.page.js';
import { AddNewFile } from './createnewfile.js'
import {UploadFile} from './uploadfile.page.js'

export const pages = {
    loginPage: new LoginPage(),
    createNewFile: new AddNewFile(),
    uploadfile: new UploadFile()
};
