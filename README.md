# BukuKu 📕

BukuKu is a digitalized library book on web. BukuKu created with framework and tools such as :

- [React.JS](https://beta.reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Vite.JS](https://vitejs.dev/)
- [pnpm](https://pnpm.io/)
- [SWC](https://swc.rs/)

## Getting Started

This app require Node.js version 16+. I'd recommend you to use pnpm as the package manager to run this app ([reason detail](https://pnpm.io/pnpm-vs-npm)).

### Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```

## API Feedback

This is a list of feedback for [API](https://asia-southeast2-sejutacita-app.cloudfunctions.net) that was used on this app.

- I think it would be nice to have if the API return the pageInfo cotaining data such as total data, current data length/size, and page number. For example :

```sh
{
    items : [],
    pageInfo : {
        totalItems: 0,
        itemPerPage: 10,
        pageNumber: 0,
    }
}
```

This would help the the FE to create a pagination that able to show more available pages instead of just showing current page.

- On `/fee-assessment-books` endpoint, when I set the query param `page` to any number that bigger than available page. It would return a blank response with status `404`. I find it kinda inconsistent, because the endpoint does exist but it return a `404` status. I think, It would be better to return a response that indicate there is no data(s) available(just like the example previous point) on `page=x` with status `200`.
- I'm facing a `CORS` issue on this API. Everytime I'm trying to hit the API on `localhost`, I got CORS issue. I have to deploy my own CORS Proxy to resolve this issue and wrap the API endpoint with my CORS Proxy. However it works fine, when I tried to hit the API on Postman. Perhaps before making it public, make sure the API works on other origin 😀.

While there is few things to improve, I have to admit the API quite fast (before I'm wrapping it with CORS Proxy), kudos to the developer 👏🏽. (Although maybe I'm the only who uses the API currently).
