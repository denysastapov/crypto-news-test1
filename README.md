# Crypto Price Ticker

A super simple WordPress plugin that displays a live ticker for 5 popular cryptocurrencies.

---

![2](https://github.com/user-attachments/assets/27e6ee79-b40d-4a23-9ce6-be3647f44313)


## Features

- Pure JavaScript, no dependencies.
- Updates prices automatically every minute.
- Works with any WordPress theme (output is added via a footer hook).

---

## Installation

1. Copy the plugin folder crypto-ticker-plugin to `wp-content/plugins/`.
2. Activate the plugin in the WordPress admin panel.
3. The crypto ticker will be displayed in the footer of your website.

---

## API

Prices are fetched from a custom API, which should provide endpoints like:
- `http://localhost:3000/price/bitcoin`
- `http://localhost:3000/price/ethereum`
- `http://localhost:3000/price/litecoin`
- etc.

The API should return data in the following format:
```json
{
  "name": "Litecoin",
  "symbol": "LTC",
  "price": 87.32
}
