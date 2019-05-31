# SparkAR-CryptoKittis
Make a selfie with your lovely CryptoKitties

## Fetch blockchain data
- Load CryptoKitties by using [CK API](https://api.cryptokitties.co/kitties?owner_wallet_address=0x12a0E25E62C1dBD32E505446062B26AECB65F028&limit=100&offset=0)
```
https://api.cryptokitties.co/kitties?owner_wallet_address=[YOUR-PUBLIC-ETH-WALLET-ADDRESS]&limit=[NUMBER-OF-KITTIES]&offset=[START-FROM-WHICH-KITTY]
```
- You can also use [OpenSea API](https://api.opensea.io/api/v1/assets/?format=json&order_by=current_price&order_direction=asc&owner=0x12a0E25E62C1dBD32E505446062B26AECB65F028)
```
https://api.opensea.io/api/v1/assets/?format=json&order_by=current_price&order_direction=asc&owner=[YOUR-PUBLIC-ETH-WALLET-ADDRESS]
```
- Also consider to show how rich this user is by [Etherscan API](https://api.etherscan.io/api?module=account&action=balance&address=0x12a0E25E62C1dBD32E505446062B26AECB65F028)
```
https://api.etherscan.io/api?module=account&action=balance&address=[YOUR-PUBLIC-ETH-WALLET-ADDRESS]
```

### Example in file 
```
const url = 'https://api.cryptokitties.co/kitties?owner_wallet_address=0x12a0E25E62C1dBD32E505446062B26AECB65F028&limit=4&offset=1';
```

## MUST DO
Don't forget to Whitelist the **api.cryptokitties.co** or other api domain in Capabilities.
If you want to display Kitties PNG as externalTexure source, remember to Whitelist the **img.cryptokitties.co** as well.
