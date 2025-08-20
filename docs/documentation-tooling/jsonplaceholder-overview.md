---
title: Overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Welcome! 

JSONPlaceholder is a free online REST API that you can use for **testing** and **prototyping**.  
It provides fake endpoints for common resources such as posts, comments, users, todos, and more.


## Base URL

```

[https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

````

## Resources

Here are the main resources you can interact with:

| Resource   | Endpoint                     | Description                              |
|------------|------------------------------|------------------------------------------|
| Posts      | `/posts`                     | Blog posts with title and body.          |
| Comments   | `/comments`                  | Comments tied to posts.                  |
| Albums     | `/albums`                    | Collections of photos.                   |
| Photos     | `/photos`                    | Photos inside albums.                    |
| Todos      | `/todos`                     | To-do tasks with completion state.       |
| Users      | `/users`                     | User profiles with details.              |

## How to Use

<Tabs>
<TabItem value="fetch" label="JavaScript (fetch)">
  
```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))
````

</TabItem>

<TabItem value="axios" label="JavaScript (Axios)">

```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log(response.data);
  });
```

</TabItem>

<TabItem value="python" label="Python (requests)">

```python
import requests

response = requests.get("https://jsonplaceholder.typicode.com/posts/1")
print(response.json())
```

</TabItem>
</Tabs>


## Example Response

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum..."
}
```

## Notes

<details>
  <summary>Limitations</summary>

* All data is **fake** (not persistent).
* POST, PUT, PATCH, DELETE requests **won’t actually change data** (they simulate success).
* Great for **mocking APIs** in front-end apps.

</details>


## Use Cases

* Testing API integrations.
* Learning REST API basics.
* Prototyping apps before real backend is ready.
* Mocking data in UI components.


:::success
Now you’re ready to start making requests to JSONPlaceholder!
:::
```
