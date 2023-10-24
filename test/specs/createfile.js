import { expect, browser, $ } from '@wdio/globals';

import { pages } from './pages/Pages.js';

import axios from 'axios';


describe('My First Test', () => {
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

    it('Create new file to repo', async () => {
        await pages.createNewFile.addfile();
        await browser.pause(1000);
        const fileName = pages.createNewFile.fileName;
        let message = await $('.kUFFVQ input')
        await expect(message).toHaveValueContaining(fileName);
        // let btn = await $('.jTavlD input[value="direct"]');
        // await btn.isSelected();
        //await pages.createNewFile.CommitChangesbtn.click(); // ? если добавить в пейдж обжект  тест падает. 

        await pages.createNewFile.CreateNewBranchBTN.click();
        await browser.pause(3000);
        await pages.createNewFile.ProposeChangesBtn.click();
        await browser.pause(3000);
        await pages.createNewFile.CreatePullReqBtn.click();
        await browser.pause(3000);

        // await pages.createNewFile.MergePullReqBtn.waitForExist({ timeout: 10000 , interval : 10000});//????

        await pages.createNewFile.MergePullReqBtn.waitUntil(async function () {
            return (await pages.createNewFile.MergePullReqBtn.getText()) === 'Merge pull request'
        }, {
            timeout: 10000,
            timeoutMsg: 'expected text to be different after 5s'

        })

        await pages.createNewFile.MergePullReqBtn.click()

        await browser.pause(3000);
        await pages.createNewFile.ConfirmMergeBtn.click()
        await browser.pause(3000);
        await pages.createNewFile.DeleteBtv.click()


    })

});

// работает не стабильно, иногда тест падает, не находит селекторы
// таймаут в конфиге и таймаут тут они складываются? как работатет таумаут в конфиге?
// beforeeach? 