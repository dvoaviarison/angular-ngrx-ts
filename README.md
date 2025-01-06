# AngularTs
This project provides with the simplest template for using Angular built-in tools as a comparison to React + Redux + React-Router + Vite using typescript.

Demo available here:
- Angular: [angular-ngrx-ts.vercel.app](https://angular-ngrx-ts.vercel.app/)
- React Version: [react-redux-vite-ts.vercel.app](https://react-redux-vite-ts.vercel.app/)

## How to run the app
Make sure dependencies are installed: npm install

- Dev Mode: Run `npm start`
- Prod Preview: Run `npm run build` to build then `npm run preview`

## Code scaffolding
Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

## How to create docker image?

- Build: `docker buildx build --platform linux/amd64 -t username/angular-ngrx-ts:tag .`
- Publish using: `docker push username/ngular-ngrx-ts:tag`
- Run: `docker run -d -p 3020:3020 username/angular-ngrx-ts:tag`

## About this project
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.
```sh
npm install -g @angular/cli
ng new angular-ts
```