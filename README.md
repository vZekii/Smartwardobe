# Smart Wardrobe Frontend app code

This repository contains the frontend react-native powered app that we've built for our project.

## Get started

Firstly, ensure that both Node and npm are installed on the computer you wish to run the frontend server from. For our development, we used Node 21.7.3 and npm 10.5.0 (I reccomend using nvm to get the exact versions required).

Next, you'll need to install the dependencies with the command below.

```bash
npm install
```

After installing the dependencies, you can start the app with the following command

```bash
 npx expo start
```

## Using the app on a phone

While the app is cross-platform and should work across all devices, it is currently only optimised for Apple iPhones (as we all own them), so I'd reccomend running it on an iPhone if applicable.

Firstly, you'll need to download the Expo Go app from the app store (White icon with a triangle and little circle). After downloading the app, run the app code here by using the command above. When the app has started, it'll give you a QR code that you can scan on your device (Please make sure that both the computer running the frontend code and the phone using the app are on the same internet connection).

You can scan the QR code and it should open the Expo Go app automatically with the app.

## Fixes for the API

If you're running the API locally, you'll also need to change the API's address as it will need to point to your local computer or computer that is also running the API. In the file under `app/api.ts`, you will see some variables for the api urls.

```javascript
import { Picture } from "./types";

//const API_URL = 'https://colt-great-poorly.ngrok-free.app';
const API_URL = "http://192.168.20.15:8000";
```

Simply change the api url to your computer's local IP address, along with port 8000, and reload the app.
