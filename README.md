Using sw-precache with create-react-app
=======================================

I'm trying to understand how `sw-precache` work, but it's not working how I
thought it would.

This example uses a basic skeleton from `create-react-app` which has a built in
build task which takes care of fingerprinting the filenames, etc.

I'm using the `build` directory and `http-server` to simulate how it would be
deployed because the built in dev server uses different mechanisms for live
reloading.


My (incorrect) understanding
----------------------------

- Clone this app and run:

```
yarn
yarn build
yarn sw-precache
http-server build
```

- Browse to http://localhost:8080
  - You should see `Content is now available offline!` in the console

- Reload the page
  - The message in the console should not appear again

- Go offline and reload the page
  - The page should still work

- Make a visible change to the source code
  - For example, change the visible text in `src/App.js`

- Rebuild by stopping the server and running those commands again:

```
yarn build
yarn sw-precache
http-server build
```

- Reload the page (This is where things go wrong)
  - The service worker should update the cache in the background
  - When its done, you should see `New or updated content is available.` in the console
  - The changes you made should not be visible until you reload

- Reload the page again
  - The changes you made should be visible now!
  - There shouldn't be any messages in the console


The problem
-----------

Once the app has been cached initially, it will never update unless you
unregister the service worker or force a reload.

I'm not sure how to make this work - any help would be greatly appreciated!
