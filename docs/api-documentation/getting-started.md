# Getting Started

This guide helps you quickly get started with the Chimoney API. You'll learn how to authenticate your requests and make your first API call.


## 1\. API User Requirements

To use the Chimoney API, you'll need:

  * **A Chimoney Developer Account**: Sign up on the [Chimoney Developer Portal](https://chimoney.io/) to get your API keys.
  * **API Key**: This key grants you access to the API. Keep it secret\!


## 2\. API Base URL

All requests to the Chimoney API should start with this base URL:

`https://api.chimoney.io/v0`


## 3\. Authentication Process

The Chimoney API uses an **API Key** for authentication. You need to include your API key in the `X-API-KEY` header of every request.

> **Note:** Replace `{YOUR_API_KEY}` with your actual API key.

## 4\. Required Headers

Here are the standard headers you'll need for most requests:

| Header        | Value              | Description                         |
| :------------ | :----------------- | :---------------------------------- |
| `Content-Type`| `application/json` | Specifies the request body format.  |
| `X-API-KEY`   | `{YOUR_API_KEY}`   | Your unique API key for authentication. |


## 5\. Sample cURL Request

Let's make a simple `GET` request to the `/info` endpoint to check the API's status. This endpoint doesn't require any additional parameters.

```bash
curl --location 'https://api.chimoney.io/v0/info' \
--header 'Content-Type: application/json' \
--header 'X-API-KEY: {YOUR_API_KEY}'
```

### Expected JSON Response

If your request is successful, you'll get a response similar to this:

```json
{
  "data": {
    "chimoney": {
      "name": "Chimoney",
      "version": "1.0.0"
    }
  },
  "error": null,
  "status": "success"
}
```

This response confirms that your API key is valid and the API is reachable. You're now ready to explore other endpoints\! Click the *next* button below to continue.