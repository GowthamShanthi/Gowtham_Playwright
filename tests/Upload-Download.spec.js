//Namachivaya

const { test, expect } = require('@playwright/test');

const Exceljs = require('exceljs');



async function writeexceltest(searchtext, replacetext, change, excelpath) {


    const workbook = new Exceljs.Workbook();
    await workbook.xlsx.readFile(excelpath);
    const worksheet = workbook.getWorksheet('Sheet1');

    const output = await readexcel(worksheet, searchtext);



    if (output.row === 0) {
        console.log(`"${searchtext}" not found in the sheet.`);
        return;
    }

    const cell = worksheet.getCell(output.row + change.rowChange, output.column + change.colChange);
    cell.value = replacetext;



    await workbook.xlsx.writeFile(excelpath);




}


async function readexcel(worksheet, searchtext) {

    let output = { row: 0, column: 0 };
    worksheet.eachRow((row, rowNumber) => {


        row.eachCell((cell, colNumber) => {


            if (cell.value === searchtext) {


                output.row = rowNumber;
                output.column = colNumber;

            }


        }

        )



    }

    );

    return output;



}


//writeexceltest("Papaya", 300, { rowChange: 0, colChange: 2 }, 'C:/Users/gowthamv/Desktop/Project_Docs/Playwright/Exceldownload.xlsx',);

test('upload download excel validation ', async ({ page }) => {


    const searchtext = "Mango";
    const updateValue = '500';


    await page.goto('https://rahulshettyacademy.com/upload-download-test/');






    const downloadpromise = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadpromise;
    await download.saveAs('C:/Users/gowthamv/Downloads/download.xlsx');

    await writeexceltest(searchtext, updateValue, { rowChange: 0, colChange: 2 }, 'C:/Users/gowthamv/Downloads/download.xlsx');

    await page.locator('#fileinput');
    await page.locator('#fileinput').setInputFiles('C:/Users/gowthamv/Downloads/download.xlsx');

    //const textlocator = page.getByText('Mango');

    const desiredrow = page.getByRole('row').filter({ hasText: searchtext });

    await expect(desiredrow.locator('#cell-4-undefined')).toContainText(updateValue);






















});


