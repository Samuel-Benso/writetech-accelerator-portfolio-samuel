---

slug: beginner-guide-to-yaml-and-openapi
title: Beginner’s Guide to YAML and OpenAPI with Real-Life Examples
authors: samuel-benson
tags: [openapi, yaml, api documentation, beginners guide, software development]
description: Learn YAML and OpenAPI through simple real-life examples. This guide walks beginners step by step with clear explanations, stories, and practical demonstrations.
keywords: [yaml tutorial for beginners, openapi guide, api documentation yaml, learn yaml step by step, openapi beginners guide, yaml examples]
---

<!-- truncate -->


# Learning OpenAPI - Writing Your First YAML Spec

If you’re brand new to OpenAPI and YAML, don’t worry. I’ll take you by the hand. Imagine you’ve never heard of either, but by the end of this post, you’ll be able to read and even write a simple OpenAPI spec for a real API endpoint. Let’s make it fun, practical, and clear.


## Objects in Real Life and in YAML

Think about a **person**. A person is an **object**. Something that contains information about itself. For example, a person might have:

* A **name**
* An **age**
* A list of **skills**

If we wanted to describe this person in plain English, we might say:

> This is John. He is 30 years old. His skills are writing, coding, and singing.

But computers don’t understand English the way we do. They prefer structured formats. That’s where **YAML** comes in.

Here’s how the same “person” object looks in YAML:

```yaml
person:
  name: John
  age: 30
  skills:
    - writing
    - coding
    - singing
```

Notice how:

* `person` is like a label (an object).
* Under `person`, we have **attributes**: `name`, `age`, and `skills`.
* `skills` is a list, written with dashes `-`.

YAML is basically a clean way to describe objects. And OpenAPI uses YAML to describe the “objects” that make up an API.


## From Person to API

Now, instead of describing a person, let’s describe an **API**. An API is just a system that offers some services. For example, **Chimoney** is a platform that lets you send money, airtime, or gift cards to people worldwide.

So if a person has attributes like name and age, an API spec has attributes like:

* **openapi** (the version of the specification)
* **info** (details about the API)
* **servers** (where the API lives)
* **paths** (the actual endpoints you can call)

Let’s start building one step by step.


## The OpenAPI Version

First, every OpenAPI file starts by declaring the version of OpenAPI it uses. Just like you might say:

> John is using Microsoft Word 2021.

The API spec says:

```yaml
openapi: 3.0.0
```

This simply means: “Hey, this file follows the OpenAPI 3.0.0 rules.”


## Info About the API

Remember how a person has a **name** and maybe a short **bio**? An API also needs basic details about itself. We put this under the `info` section:

```yaml
info:
  title: Chimoney API
  description: This is the Chimoney API that allows you to send value globally.
  version: 1.0.0
```

Here:

* `title` is like the person’s **name**.
* `description` is like their **bio**.
* `version` is the **version of the API** (not the OpenAPI spec itself).


## Servers – Where the API Lives

Think of servers like **addresses**. If a person lives in Lagos or London, that’s their location. For an API, the server tells us where the API is hosted.

```yaml
servers:
  - url: https://api.chimoney.io
    description: Production server
```

This says: “If you want to interact with this API, send your requests to `https://api.chimoney.io`.”


## Paths – The API’s Actions

If a person can **sing**, **dance**, or **code**, those are their actions. For an API, the actions are called **endpoints**, and they live inside `paths`.

Let’s describe just one action: **sending Chimoney**. The endpoint for that is `/v0.2/payouts/chimoney`.

Here’s how it looks in YAML:

```yaml
paths:
  /v0.2/payouts/chimoney:
    post:
      summary: Send Chimoney to recipients
      description: This endpoint allows you to send Chimoney to one or more recipients.
```

Here:

* `paths` is like saying “Here are the actions this person (API) can perform.”
* `/v0.2/payouts/chimoney` is the action’s name.
* `post` means the action uses an HTTP **POST** method (like saying: “I’m giving something to the API”).
* `summary` is a quick description.
* `description` is a longer explanation.


## Parameters and Request Body

When you ask a person to sing, you might also say: “Sing this specific song.” That’s extra information you provide. APIs also need extra information when you call an endpoint. This is passed in the **request body**.

Here’s how we define it:

```yaml
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                recipients:
                  type: array
                  items:
                    type: object
                    properties:
                      email:
                        type: string
                      valueInUSD:
                        type: number
              required:
                - recipients
```

This looks long, but let’s break it down:

* `requestBody`: The input the API expects.
* `required: true`: You must send this, or the API won’t work.
* `content`: The format. It accepts `application/json`.
* `schema`: A blueprint of the input.
* `recipients`: An array (list) of objects.

  * Each object must have an `email` (string) and `valueInUSD` (number).

So if you were calling this API, you’d send something like:

```json
{
  "recipients": [
    { "email": "alice@example.com", "valueInUSD": 10 },
    { "email": "bob@example.com", "valueInUSD": 20 }
  ]
}
```


## Responses – The API Talks Back

When you tell a person, “Sing,” they respond with a song. When you tell an API, “Send Chimoney,” it responds with a message too.

Here’s how we describe responses:

```yaml
      responses:
        '200':
          description: Chimoney sent successfully
        '400':
          description: Bad request (e.g., missing recipients)
        '500':
          description: Server error
```

This says:

* If everything goes well, the API returns `200` (success).
* If you made a mistake, it returns `400` (bad request).
* If the API itself crashes, it returns `500`.


## Security – Locking the Door

Think of your house. You don’t let just anyone walk in—you use a **key**. APIs also use keys, usually called **API keys**, to make sure only authorized people can use them.

Here’s how we describe security in OpenAPI:

```yaml
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-API-KEY

security:
  - ApiKeyAuth: []
```

This means:

* The API expects a key in the request header.
* The header name is `X-API-KEY`.
* Every request must include this key, or the API will reject it.

For example, when calling the endpoint, your request might look like this:

```
POST /v0.2/payouts/chimoney
Host: api.chimoney.io
X-API-KEY: your_api_key_here
Content-Type: application/json
```


## Putting It All Together

Now let’s combine everything into a full OpenAPI spec:

```yaml
openapi: 3.0.0
info:
  title: Chimoney API
  description: This is the Chimoney API that allows you to send value globally.
  version: 1.0.0
servers:
  - url: https://api.chimoney.io
    description: Production server
paths:
  /v0.2/payouts/chimoney:
    post:
      summary: Send Chimoney to recipients
      description: This endpoint allows you to send Chimoney to one or more recipients.
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                recipients:
                  type: array
                  items:
                    type: object
                    properties:
                      email:
                        type: string
                      valueInUSD:
                        type: number
              required:
                - recipients
      responses:
        '200':
          description: Chimoney sent successfully
        '400':
          description: Bad request (e.g., missing recipients)
        '500':
          description: Server error
components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-API-KEY
security:
  - ApiKeyAuth: []
```

## Conclusion

If you followed along, you’ve gone from describing a simple person in YAML to writing a real OpenAPI spec for Chimoney. Each piece, `info`, `servers`, `paths`, `requestBody`, `responses`, and `security`, works together to describe how the API behaves.

OpenAPI is just a structured way of telling the story of an API. And YAML is the language that makes the story clean and readable. Once you master these basics, you can describe any API you want.


Next, try writing another endpoint on your own. For example, what if you wanted to “check the balance” of a Chimoney account? Start with `paths`, give it a summary, and imagine what the request and response would look like. That’s how you’ll get comfortable.

You don’t invent details. You pull them from existing documentation, developer conversations, or testing tools. Just like a waiter checks with the chef before telling customers what’s available.

You’ve just written your first OpenAPI spec in YAML. congratulations! 
