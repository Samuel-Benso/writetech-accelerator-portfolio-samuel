# Getting Started

Follow these steps to start using the JSONPlaceholder API:

## 1. Access the API
Visit [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) to explore endpoints.

## 2. Fetch Sample Data
Example using `fetch` in JavaScript:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data));
