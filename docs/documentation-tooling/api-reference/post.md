---
id: post
title: Create Post
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Create a new post by sending a POST request with the required fields.

## Endpoint

`POST https://jsonplaceholder.typicode.com/posts`

## Request Body Fields

| Name    | Type    | Required | Description         |
|---------|---------|----------|---------------------|
| title   | string  | ✅        | Title of the post   |
| body    | string  | ✅        | Content of the post |
| userId  | number  | ✅        | ID of the user      |

## 🔹 Example Requests

<Tabs>
  <TabItem value="cURL" label="cURL">

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "foo",
    "body": "bar",
    "userId": 1
  }'
```

  </TabItem>

  <TabItem value="JavaScript" label="JavaScript (fetch)">

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

  </TabItem>

  <TabItem value="Python" label="Python (requests)">

```python
import requests

response = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    json={
        "title": "foo",
        "body": "bar",
        "userId": 1
    }
)
print(response.json())
```

  </TabItem>
</Tabs>

## ✅ Successful Response

```json
{
  "title": "foo",
  "body": "bar",
  "userId": 1,
  "id": 101
}
```

## ⚠️ Error Responses

| Status Code | Description                  |
| ----------- |-----------------------------|
| 400         | Invalid request body         |
| 500         | Internal server