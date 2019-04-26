#!/usr/bin/env node

const mdLinks = require("./src/md-links");

mdLinks.mdLinks(process.argv[2])
.then((links)=>{
  links.forEach(function (link) {
    /*Impresion de los links de acuerdo al formato solicitado, ademas que el texto no es superior a 
    50 carácteres*/
    console.log(`${link.file} ${link.href} ${link.text.substring(0,50)}`);
  }); 
  
})
.catch((err)=>{
  console.log(err);
});
/*
mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }]
  })
  .catch(console.error);
*/

