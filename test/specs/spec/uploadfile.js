import { expect, browser, $ } from '@wdio/globals';

import { pages } from '../pages/Pages.js';

import path from 'node:path'; // ???

import axios from 'axios';

import assert from 'assert'



describe('My SEcond Test', () => {
    it('Perform login', async () => {
        await browser.url('https://github.com/login')
        await pages.loginPage.performLogin('tester2jz@gmail.com', 'tesAQA!123');
        browser.waitUntil(
            () => browser.execute(() => document.readyState === 'complete'),// как проверить, что срабатывает ошибка?
            {
                timeout: 60 * 1000, // 60 seconds
                timeoutMsg: 'Message on failure'
            }
        );
        await browser.pause(2000);
        let dashboard = await $('.AppHeader-context-item-label')
        await expect(dashboard).toHaveTextContaining('Dashboard');
        await pages.loginPage.selectrepo.click();
        await browser.pause(1000);
    });


    it('Upload new file to repo', async () => {
        await pages.createNewFile.Creatbtn.click();
        await pages.uploadfile.Uploadbtn.click();
        await browser.pause(3000);

        await pages.uploadfile.h2btn.waitForExist({ timeout: 10000 })

        await expect(pages.uploadfile.h2btn).toHaveText('Drag files here to add them to your repository');

        const filePath = './screenwdio.png'   //почему нельзя добавить в пайджобж??
        const remoutfilePath = await browser.uploadFile(filePath)
        await pages.uploadfile.Choosefilebtn.setValue(remoutfilePath);
        await browser.pause(3000);

        //const myButton = await $('.js-blob-submit');
        //await myButton .waitForExist({ timeout: 10000 })
        await pages.uploadfile.CommitChbtn.waitForExist({ timeout: 10000 })
        await pages.uploadfile.CommitChbtn.click()
        //await myButton.click() 


    })

    it.only('Find pet by Id', async function () {
        let result;
        let response = {};

        try {

            response = await axios.get('https://petstore.swagger.io/v2/pet/1');
            result = response.data//.id;
        } catch (error) {
            console.log('==>> ERROR response: ', error.response.data.message);
        }
        console.log(result);
        assert(response.status == 200);
        assert(response.statusText == "OK");
    })

})