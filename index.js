const api = require('./api');
const symbol = process.env.SYMBOL;

setInterval(async () => {
    /*const result = await api.depth();
    let buy, sell;
    
    if(result.bids && result.bids.length){
        console.log('Highest Buy: ' + result.bids[0][0]);
        buy = parseFloat(result.bids[0][0]);
    }

    if(result.asks && result.asks.length){
        console.log('Lower Sell: ' + result.asks[0][0])
        sell = parseFloat(result.asks[0][0]);
    }

    const account = await api.accountInfo();


    const coins = carteira.balances.filter(b => b.asset === 'BNB' || b.asset === 'BUSD');
    console.log(coins);
    */
   
    console.log('Mercado');
    const mercado = await api.depth('BNBBUSD');
    console.log(mercado.bids.length ? `Compra: ${mercado.bids[0][0]}` : 'Sem Compras');
    console.log(mercado.asks.length ? `Venda: ${mercado.asks[0][0]}` : 'Sem Vendas');


    console.log('Carteira');
    console.log(await api.accountInfo());
    
}, process.env.CRAWLER_INTERVAL);