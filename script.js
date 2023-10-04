let quote=document.querySelector('.content')
let quoteNumber=document.querySelector('#num')

fetch('https://api.adviceslip.com/advice')
.then(result=>{
    if(!result.ok){
        throw new Error(`Network response was not ok: ${result.status}`)
    }
    return result.json()
})
.then(data=>{
    console.log(data)
    quote.textContent ='"'+ data.slip.advice+'"';
    quoteNumber.textContent = data.slip.id;
})
.catch(error=>{
    console.error('error:',error)
})