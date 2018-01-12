# Expensify app

Simple react redux CRUD app.

[App demo](https://expensify1521.herokuapp.com/ "Expensify Demo")

## How to run

Clone the repo, cd into folder and run this command.

```
npm install
```

## Firebase configuration

This app requires Firebase database. To set it up, go to this url and login with your google account.

[https://firebase.google.com](https://firebase.google.com "Google firebase")

Click on the Add project button on your dashboard. When the database is created, clickon it to configure authentication settings.

### Authentication

Select Authentication from the Develop sub menu and click on the SIGN-IN METHOD tab. Enable Google authentication. For production, be sure to add your domain under Authorized domain list, located at the bottom of SIGN-IN METHOD tab.

### Database rules

Select Database from the Develop sub menu and choose Realtime Database. Then, click on the RULES tab and Replace default Firebase rules with the code snippet provided below. Click on a PUBLISH button at the top of the RULES text area.

```javascript
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
    		".write": "$user_id === auth.uid",
        "expenses": {
          "$expense_id": {
            ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
            "description": {
              ".validate": "newData.isString() && newData.val().length > 0"
            },
            "note": {
              ".validate": "newData.isString()"
            },
            "createdAt": {
              ".validate": "newData.isNumber()"
            },
            "amount": {
              ".validate": "newData.isNumber()"
            },
            "$other": {
          		".validate": false
        		}
          }
        },
        "$other": {
          ".validate": false
        }
      }
    }
  }
}
```

### Firebase API key

Select Project Overview from the menu and click on Add Firebase to your web app. Copy the code snippet into your favorite text editor and continue with configuration.

## Run the app in development mode

To run the app in development mode, cd into project folder and edit the .env.development.sample file. Replace the values with Firebase API authentication data provided in previous step. Save changes and rename the file from ".env.development.sample" to ".env.development" and run this command from your terminal.

```
npm run dev-server
```
Open your browser and go to this address:

http://localhost:8080/

## Run the app in production mode

Depending on your OS you need to setup environment variables. On Linux edit the .bashrc file and export these keys. Replace the key values with Firebase API authentication data.

```
export FIREBASE_API_KEY=YOUR_API_KEY
export FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
export FIREBASE_DATABASE_URL=YOUR_DATABASE_URL
export FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
export FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
export FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
```

Open your terminal, cd into project folder and run these commands.

```
npm run build:prod
npm start
```

Open your browser and go to this address:

http://localhost:3000/
