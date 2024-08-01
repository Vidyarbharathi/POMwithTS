
import path from "path";
import fs from 'fs'
import { test } from "../fixture/mycustomFixture";
import { parse } from "csv-parse/sync";
import { expect } from "@playwright/test";


const loginData = parse(fs.readFileSync(path.join(__dirname, "../data/credentials.csv")), {
    columns: true,
    skip_empty_lines: true,
    skip_records_with_empty_values: true
});

test.use({storageState:"./storagestate/login.json"})
test(`Leads test`,async({welcomePage,homePage,leadsPage})=>{
     await welcomePage.clickCRM();       
})

