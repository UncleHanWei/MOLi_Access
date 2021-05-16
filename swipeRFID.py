from evdev import InputDevice, categorize, ecodes

import requests

def main() :
    dev = InputDevice('/dev/input/event0')
    data = ''
    for event in dev.read_loop() :
        if event.type == ecodes.EV_KEY :
            raw = str(categorize(event))
            if 'down' in raw :
                start = raw.index('KEY_') + 4
                data += raw[start:start+1]
        if len(data) == 11 :
            data = data[:10]
            url = 'http://127.0.0.1:3000/api/newAccess?id='+data
            res = requests.get(url)
            data = ''

if __name__ == '__main__' :
    main()