      let counter=1;
      function getdata(){

          let text= `request in ${counter++} time`
          let p=document.createElement("p")
          let div1=document.getElementById("div1")
        
        p.innerText=text
        div1.append(p)
    }

   let  debounce=function (getdata,delay){
       let timer
       return function(){
           let context=this,
           args=arguments
        clearTimeout(timer)
        timer= setTimeout(()=>{
            getdata.apply(context,arguments)
         },delay)
       }
    }



    let betterFunction = debounce(getdata,500)