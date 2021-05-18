# MOLi_Access
## About
為因應新冠肺炎(COVID-19)的爆發，MOLi 實施登記進入。利用 RFID Reader 供進入者刷卡登記，並推播訊息到 MOLi_Access Telegram Channel。

本專案也可用於其他地方的出入登記，如果有需要建置類似的系統，只需要修改部分內容即可。

## Installation
### Needed Equipment
- Raspberry Pi
    - 3 代或 4 代皆可，但 4 代較佳
    - 至少 16G 容量大小的 MicroSD Card
- RFID Reader
    - 本專案使用 R20D USB RFID Reader
- USB 延長線(optional)
    - 如果 Pi 跟門口有一段距離便需要延長線

### Needed Software
- Telegram
    - 除了要有使用者帳號，還需要
        1. Telegram Bot
        2. Telegram Channel
- Raspbian OS
    - 本專案使用的是 Raspberry Pi OS Lite
- Node.js
    - 作為主要開發環境，提供以下服務
        1. Telegram Bot 的 Server
        2. 讓讀取 RFID 的程式戳的 API
        3. 簡易的網頁供使用者操作介面
    - 相關套件
        - `express`
        - `node-telegram-bot-api`
        - `dotenv`
- Python
    - 3.6 以上的版本
    - 相關套件
        - `requests`
        - `evdev`


## Reference
- 你才機器人 [YouAreTheOneWhoBot](https://github.com/ast850328/YouAreTheOneWhoBot)
- Get solution of reading data from RFID reader problem  from here: [how-to-direct-dev-hidraw-output-to-python-application-and-not-terminal](https://unix.stackexchange.com/questions/596619/)
- Doc of evdev [Official Doc](https://python-evdev.readthedocs.io/en/latest/apidoc.html#module-evdev.device)