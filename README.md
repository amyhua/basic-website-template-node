### This is an example website that you can use to get your own website up and running!

# Let's get started!

----

**In your Cloud9 Workspace**: hit *Run* (green play button above) and wait for the web server to start.
Then go to the link in the light blue box (the "terminal") shown below. It will look something like this:

```
Your code is running at https://girls-who-code-website-template-amyhua.c9users.io.
```

Click on the link.

----

**On your Local Computer**: in your terminal, type in the following command after the dollar sign ($):

```
$ npm install
```

and then hit ENTER. This will download a number of files. Wait a while for that to finish. Then, type in the command:

```
$ npm start
```

and hit ENTER to start a web server that will serve your webpage! Then you can go to [http://localhost:8080](http://localhost:8080) to see your new website in action!

## Development

Using this template, you can
* write your HTML in `client/index.html`. This is the content of your website.
* write any other `html` pages you want to include inside the `client/` folder.
* create CSS stylesheets in `client/css`
* create Javascript files in `client/js`
* Include your `css` file, `my-file.css` inside your webpage by including
  
  ```
  <link type="text/css" rel="stylesheet" href="css/your-file.css" />
  ``` 

  inside the `<head>...</head>` in `client/index.html`.

* Include your `js` file, `my-file.js` inside your webpage by including

  ```
  <script src="my-file.js" />
  ```

  at the bottom of the `<body>...</body>` in `public/index.html`

## File Structure

```
client/               Folder you will be working out of
----
----index.html        Main HTML Page of entire website
----                     includes reference to .js & .css files
----                     that it wants to load as well when this
----                     webpage is loaded
----
----js/               Folder of .js javascript files
--------app.js        Javascript file. Included in index.html
----
----css/              folder of .css stylesheet files
--------style.css     CSS stylesheet. Included in index.html
----
server.js             DO NOT TOUCH. Serves up index.html on a web server
package.json          DO NOT TOUCH. Node-js package.json file that
                           recognizes this project as a Node-js app
```

Create a webpage on `index.html`
