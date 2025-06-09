const coins = [
  { symbol: "BTC", url: "http://localhost:3000/price/bitcoin" },
  { symbol: "ETH", url: "http://localhost:3000/price/ethereum" },
  { symbol: "LTC", url: "http://localhost:3000/price/litecoin" },
  { symbol: "SOL", url: "http://localhost:3000/price/solana" },
  { symbol: "XRP", url: "http://localhost:3000/price/ripple" },
];

async function fetchAll() {
  const results = await Promise.all(
    coins.map(async (coin) => {
      try {
        const response = await fetch(coin.url);
        if (!response.ok) return null;
        const data = await response.json();
        return {
          name: data.name,
          symbol: data.symbol,
          price: data.price,
        };
      } catch {
        return null;
      }
    })
  );
  return results.filter(Boolean);
}

function renderList(data) {
  const ul = document.getElementById("crypto-ticker-list");
  if (!ul) return;
  ul.innerHTML = "";
  data.forEach((coin) => {
    const li = document.createElement("li");
    li.textContent = `${coin.name} (${coin.symbol}): $${coin.price}`;
    ul.appendChild(li);
  });
}

async function updateTicker() {
  const data = await fetchAll();
  renderList(data);
}

updateTicker();
setInterval(updateTicker, 60000);
