import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema.js'
import fs from 'fs';
import chalk from 'chalk';
import faker from "faker"

jsf.extend("faker", function() {
  return faker
})

jsf.resolve(schema).then(function(result) {
    fs.writeFile("./src/api/db.json", JSON.stringify(result, null, 2), function(err){
        if (err) {
            return console.log((err));
        } else {
            console.log(`Mock Data Generated Here: ./src/api/db.json`);
        }
    });
});

