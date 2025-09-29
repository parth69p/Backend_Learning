# Here are my Learnings 

## Backend Learning 

```
1. Today I learn about backend and Front Connecting.
```
### Command Used in Backend
```
1. npm init
2. npm install express 
3. npm run/start 
```
```
1. In backend maily today i have written code of Creating an api and serving it. 
```


### <strong>CORS Policy</strong> : Cross-Origin Resource Sharing
```
Note: This policy allows only those request which are running on same URL and same PORT
```
```

1.  This Policy is bassically used to protect backend data from the other request. it's ristrict the access of Api Data.
```
```
2.  For solving this there are two methods we can use :
* WHITELISTING : this means adding Port/URL of frontend to the backend. (it's not always a good Approach)
* USING PROXY : This means adding the proxy on front-end. it gives a Illusion to the backend that the request is comming from the same PORT
```

### <span style="color:red">Bad Practice</span> we Used:
``` 
*Here in our code we use 'dist' folder for serving static files which is not good Practice for backend . 
```
```
*it's basically means writing front-end and backend both in single file.
```
```
In line no 6 : app.use(express.static("dist"));

this line of code is tels to serve the static files from the server itself. (html,css,js)
```
#
#
# Front-End Learning

```
1. In front end I learn about Creating React application using 'Vite'.

2. Sending request to the api via 'Axios'

3. Learning of Proxy : We have added a proxy in 'vite.config.js' file. 
```
### Command Used

```
1. npm init
2. npm create vite@latest . 
3. npm install express
4. npm install axios 
5. npm run dev
```
#
### <strong>Axios :</strong>
```
Axios is a JavaScript library used to make HTTP requests (like GET, POST, PUT, DELETE) 
```
#### why use Axios ?
```
1. Simpler syntax than fetch
2. Automatically converts JSON data
```

### Proxy :
```
Note: this is not always good practice in front end.
```
```
1. This functionality is done on frontend part to avoid 'CORS' policy.

```
#### How Proxy performed : 
``` 
this is done by adding a path and replacing the backend Url in front end.
```
as in Our frontend in vite.config.js :

```javascript
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000' // backend url
    }
  },
  plugins: [react()],
})
```
```
This above line of code will replace the url of every request with 'backend url' having '/api' in thier path.
```

## Topics need to be covered :
``` 
1. UseStates()

2. Use Effect ()
```
#
<h2 style="text-align:center">End of Reading </h2>