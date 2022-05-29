fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  (async function Resp(){
    const resp = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    const resp1=await resp.json()
    console.log(resp1)
    console.log('Async function')
    const cyr=document.querySelector('.Curency')
    for (const pr of resp1){
        cyr.innerHTML+=`
        <article class="card">
        <div class="many">
        <div class="ccy">${pr.ccy}</div>
        <div class='base'>${pr.base_ccy}</div>
        <div class='buy'>${pr.buy}</div>
        <div>${pr.sale}</div>
        </div>
        </article>
        `
    }

  })()