# gladiatorial
e-tournament for video games
basic functionality of the user register and login and make a database also make authenticaiton of the page and use flash to show error message

## Setup
* npm start
- check for port, mongoDB, GOOGLE_APPLICATION_CREDENTIALS status...
* creating 200 players: '/addPlayers'
* creating score: '/addScores'
* rank calculation: '/evaluateRank/:batchId'
* Bonus Calculation: '/evaluateBonus/:batchId'

## Backlog
* Archive data to google cloud Storage or some place else
* Also the archived data <b>Images</b> etc should be stored as a cryptographic hash (e.g., SHA or MD5) of the raw data should be generated and distributed with the data. 'These hashes ensure that the dataset has not suffered any silent corruption and/or manipulation while being stored or transferred'
* Create and complete checklist for all sections