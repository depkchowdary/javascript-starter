
/*Assesertion library from chai*/
import {expect} from 'chai';

var jsdom = require('jsdom');
const { JSDOM } = jsdom; //eslint-disable-line no-unused-vars


describe('my first unit test',() => {
    it('should always pass', () => {
        expect(true).to.equal(true)
    })
})

  /*done is callback passed to indicate to finish the test in case of async operations. Vi*/
  
  /*visit UI tests later */

/*describe('DOM element should say Hello world', () => {
  
    it('should pass if DOM element says Hello world', (done) => {
        JSDOM.fromFile("./src/index.html").then(dom => {
            expect(dom.window.document.querySelectorAll('h1').innerHTML).to.equal("Hello World!!!")
            done();
            dom.close();
        })
        
        
    })
})*/