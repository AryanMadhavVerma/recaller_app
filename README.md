# recaller app
Can use directly [here](https://recaller.live) 

### Description
Write your thoughts down and schedule them to come to you later! The app builds over the concept of [spaced reptiiton](https://en.wikipedia.org/wiki/Spaced_repetition). It reminds you to revisit your learnings and thoughts in a spaced interval of time so that you can **retain and recall** things efficiently.

### How to run locally?

Create a [Courier account](https://www.courier.com) as we will be using it to send and recieve emails. After creating a account(its free), get a [test/prod API key](https://help.courier.com/en/articles/4677510-using-environments-api-keys-and-migrating-assets) which will be used to communicate with Courier API. This will be the `AUTH_KEY` to be used. Read [courier API documentation](https://www.courier.com/docs/) for more details.

Once you have the `AUTH_KEY`, create a `.env` file inside`app_server` folder.

Example env file(you can use any port)
```bash
PORT: 4000
AUTH_KEY: "pk_prod_sjkdnfksjdfkj323j"
```

When you do an `npm start`, these scripts will run. 
```
        "start": "npm run client_build && npm start --prefix app_server",
        "client_build": "cd app_server && rm -rf build && cd ../app_client && npm run build && cp -r build ../app_server/build"
```

The static build from the `app_client` folder gets created and copied to the `app_server` folder. The whole app then renders on the `PORT` communciating with the Courier API using `AUTH_KEY` you mention in the `.env` file. 

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.




## Feedback

If you have any feedback, please reach out to me on [Twitter](https://twitter.com/aryanmadhaverma)


## Authors

- [@aryanmadhavverma](https://www.github.com/aryanmadhavverma)

