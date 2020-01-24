### Simple Calculator with Elmish [Demo](https://fable-elmish.github.io/sample-react-calc/)

![example.gif](https://cloud.githubusercontent.com/assets/13316248/24982293/122bbe7e-1fe1-11e7-9dfd-7618688ab8df.gif)

## Build and running the app

1. Install npm dependencies: `yarn install` or `npm install`
2. Install dotnet dependencies: `.paket/paket.exe install`
3. In one shell, start fable daemon: `cd src && dotnet fable start`
4. In another shell, start Webpack dev server: `npm start`   
5. In your browser, open: http://localhost:8080/

Any modification you do to the F# code will be reflected in the web page after saving.
