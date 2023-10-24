import { faker } from '@faker-js/faker';

export class AddNewFile {

    get Creatbtn() { return $('//summary/span[contains(text(),"Add file")]') }
    get Addnewbtn() { return $('.dropdown-item[type="submit"]'); }
    get TextArea() { return $('.cm-content') }
    get FileNameinput() { return $('.cDLBls[type="text"]') }
    get CommitChangesbtn1() { return $('.cnECWi button') }
    get CommitChangesbtn() { return $('.idglPc :nth-child(2)') }
    get CreateNewBranchBTN(){ return $ ('//div/label[contains(text(),"Create a ")]')}
    get ProposeChangesBtn() { return $ ('.idglPc :nth-child(2)')}
    get CreatePullReqBtn() { return $ ('//button/span[contains(text(),"Create pull request")]')}
    get MergePullReqBtn (){ return $('.btn-group-merge[aria-expanded="false"]')}
    get ConfirmMergeBtn(){ return $('.js-merge-commit-button[value="merge"]')}
    get DeleteBtv(){ return $('.post-merge-message button')}


    async addfile() {
        await this.Creatbtn.click();
        await this.Addnewbtn.click();
        await this.TextArea.setValue(faker.lorem.paragraph(2));
        this.fileName = faker.lorem.word();
        await this.FileNameinput.setValue(this.fileName);
        await this.CommitChangesbtn1.click();

    }
}






// const jeffBuysCake = cakeType => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (cakeType === 'black forest') {
//                 resolve('black forest cake!')
//             } else {
//                 reject('No cake 😢')
//             }
//         }, 1000)
//     })
// }
// const promise = jeffBuysCake('black forest')
// console.log(await promise)
// // console.log(jeffBuysCake('black forest'))

// // async function printCakeStatus(cakeType) {
// //     try {
// //         const status = await jeffBuysCake(cakeType);
// //         console.log(status)
// //     } catch(error) {
// //         console.log(error)
// //     }
// // }

// // printCakeStatus('black forest');
