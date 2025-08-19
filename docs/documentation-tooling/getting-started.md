---
id: getting-started
title: Getting Started
---

# Getting Started

Welcome! This guide will help you quickly start using the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) fake REST API.

## What is JSONPlaceholder?

JSONPlaceholder is a free online REST API for testing and prototyping.  
You can use it to simulate typical CRUD operations without authentication.

## Base URL

| Base URL                          |
|------------------------------------|
| `https://jsonplaceholder.typicode.com/` |

## Documented Endpoints

| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| GET    | `/users/1`          | Get a single user     |
| POST   | `/posts`            | Create a post         |

## Example: Fetching a User

You can retrieve a user with a simple GET request:

```bash
curl https://jsonplaceholder.typicode.com/users/1
```

## Example: Creating a Post

To create a new post, send a POST request to `/posts` with the required fields:

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "foo",
    "body": "bar",
    "userId": 1
  }'
```

### Request Body Fields

| Field    | Type    | Required | Description            |
|----------|---------|----------|------------------------|
| title    | string  | Yes      | Title of the post      |
| body     | string  | Yes      | Content of the post    |
| userId   | number  | Yes      | ID of the user         |

## No Authentication Required

| Requirement      | Value      |
|------------------|------------|
| Authentication   | Not needed |

## Next Steps

- See the [API Reference](./api-reference/get-user.md) for more details on the documented endpoints.

---

For visit [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/).