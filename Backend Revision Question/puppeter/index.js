const { default: axios } = require('axios');
const puppeteer = require('puppeteer');
 


(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=react+jobs&ei=4duYYpLRJYq94-EPqfK90AE&uact=5&oq=react+jobs&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMggIABCABBDJAzIFCAAQkgMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgQIABBHOgUIABCRAjoUCC4QgAQQsQMQgwEQxwEQ0QMQ1AI6CAguEIAEELEDOgUILhCABDoLCAAQgAQQsQMQgwE6BAgAEEM6DgguEIAEELEDEMcBEKMCOgsILhDHARCvARCRAjoHCAAQyQMQQzoOCC4QgAQQsQMQxwEQ0QM6CAgAEIAEELEDOggILhCABBDUAjoLCC4QgAQQsQMQ1AI6DQgAELEDEIMBEMkDEEM6CAgAELEDEIMBOgoIABCxAxCDARANOgQIABANOgcIABDJAxANSgQIQRgASgQIRhgAUJseWIgzYOczaANwAngAgAGmAYgB5AqSAQQwLjExmAEAoAEBsAEAyAEIwAEB&sclient=gws-wiz&ibp=htl;jobs&sa=X&ved=2ahUKEwi546uOj4_4AhXh6zgGHQlPDQYQutcGKAF6BAgHEAY#htivrt=jobs&htidocid=DNXJc0LPw_4AAAAAAAAAAA%3D%3D&fpstate=tldetail');
  //await page.screenshot({ path: 'example.png' });

  const grabRole = await page.evaluate(()=>{
     let arr=[]
      const Role= document.querySelectorAll(".BjJfJf.PUpOsf")

      const companyName = document.querySelectorAll(".vNEEBe")

      const address = document.querySelectorAll(".Qk80Jf")
  
      for(let i=0; i<Role.length; i++){
        arr.push({
          role:Role[i].innerHTML,
          company:companyName[i].innerHTML,
          add:address[i].innerHTML
        })
      }
      return arr
  })
   //console.log(grabRole)
    axios.post("http://localhost:3001/info",grabRole)
    //module.exports= grabRole
  await browser.close();
})();