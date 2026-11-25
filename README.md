# Lending Book

Money lent, monthly interest and repayments. Offline-first phone web app (English / Tamil) with sync.

## Run on this computer
    npm start        # http://localhost:3001
    npm test         # loan maths

## Put it online (Netlify)
Deploy this folder, and set the environment variable `SYNC_KEY` to a long secret (sync refuses to work without it).
Optional: `VIEW_KEY` for read-only sync: a phone using it sees everything but cannot change anything (enforced by the server).
Enter either key in the app under Settings. Interest reminders need the edit key.
Interest reminders (push notifications) work only on the Netlify site.

## How interest is calculated
See the comment at the top of `public/calc.js`.
