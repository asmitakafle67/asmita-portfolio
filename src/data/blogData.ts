import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'understanding-apis-and-web-apis',
    slug: 'understanding-apis-and-web-apis',
    title: 'Understanding APIs and Web APIs: A Practical Guide for Frontend Developers',
    author: 'Asmita Kafle',
    date: 'November 2026',
    readTime: '8 min read',
    category: 'Web Development',
    topics: ['JavaScript', 'React', 'APIs', 'HTTP', 'HTTPS', 'Backend Development'],
    excerpt: 'An in-depth, practical guide exploring what APIs really are, how Web APIs work, Browser APIs vs Backend Web APIs, and how a React application communicates with a backend and database.',
    content: `# Understanding APIs and Web APIs: A Practical Guide for Frontend Developers

**Author:** Asmita Kafle  
**Category:** Web Development  
**Topics:** JavaScript, React, APIs, HTTP, HTTPS, Backend Development

## Introduction

APIs are an essential part of modern software development. Whether we are building a simple React application or a complex enterprise application, we frequently interact with APIs to exchange data, access functionalities, and communicate with other software systems.

However, the term API is broader than many developers initially realize. Not every API is a Web API, and not every API involves communication between a frontend and a backend.

In this article, we will explore what APIs are, how Web APIs work, the different types of APIs, and how a React application communicates with a backend and database.

## 1. What Is an API?

API stands for **Application Programming Interface**.

An API is a defined interface that allows one software application or component to interact with another software application or component.

In simple terms, an API defines how different software components can communicate and use each other's functionalities without needing to understand their internal implementation.

### A practical example

Consider an e-commerce application:

- The frontend displays products to users.
- The backend handles business logic.
- The database stores product information.

When a user opens the product page, the frontend needs product information from the backend.

The frontend sends a request through an API, and the backend processes that request and returns the required information.

The API defines how this interaction takes place.

### Key characteristics of an API

- It provides a defined interface for interaction.
- It enables communication between software components.
- It hides internal implementation details.
- It defines available operations, inputs, and expected outputs.
- It can be used in different environments, not just web applications.

## 2. Different Types of APIs

API is a broad concept. It is not limited to communication between frontend and backend applications.

Let's explore some common examples.

### 2.1 Browser APIs

Browser APIs are interfaces provided by web browsers that allow JavaScript applications to interact with browser capabilities.

For example:

| Browser API | Purpose |
|---|---|
| Fetch API | Send HTTP requests |
| localStorage API | Store data in the browser |
| Geolocation API | Access the user's location |
| DOM API | Access and manipulate HTML elements |
| Notification API | Display browser notifications |
| WebSocket API | Enable real-time communication |

Example:

\`\`\`javascript
// Store data in the browser
localStorage.setItem("username", "Asmita");

// Retrieve data
const username = localStorage.getItem("username");

// Send an HTTP request
const response = await fetch("/api/users");

// Access browser geolocation
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.latitude);
});
\`\`\`

An important point is that not every Browser API requires communication with a backend.

For example, \`localStorage\` stores information directly in the browser.

### 2.2 Operating System APIs

Operating System APIs allow applications to interact with operating system functionalities and resources.

Examples include:

- File system operations
- Process management
- Memory management
- Network communication
- Hardware and device access

For example, Python provides file-handling functionality:

\`\`\`python
with open("example.txt", "w") as file:
    file.write("Hello World")
\`\`\`

This code uses Python's file-handling interface to create a file on the operating system.

### 2.3 Database APIs

Database APIs provide interfaces through which applications communicate with databases.

They allow applications to:

- Insert records
- Retrieve information
- Update existing records
- Delete records
- Manage database transactions

For example, a Python backend can use a PostgreSQL database driver to execute SQL queries:

\`\`\`python
cursor.execute(
    "SELECT * FROM users WHERE email = %s",
    ("test@gmail.com",)
)
\`\`\`

Here, the backend uses a database driver to execute a query against PostgreSQL.

In a typical React application, the frontend does not directly connect to PostgreSQL. Instead, the backend manages database connections and exposes the required functionality through its API.

### 2.4 Library APIs

A library API consists of the functions, methods, classes, or components that a software library exposes for developers to use.

For example, React provides APIs such as:

- \`useState()\`
- \`useEffect()\`
- \`useRef()\`
- \`useMemo()\`
- \`useCallback()\`

Example:

\`\`\`jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
\`\`\`

Here, \`useState()\` is part of React's API.

We can use it without understanding its internal implementation.

## 3. What Is a Web API?

A Web API is an API exposed through web technologies and communication mechanisms, commonly HTTP or HTTPS.

In frontend development, Web APIs frequently allow browser-based applications to communicate with backend services.

For example, imagine we have:

- React as our frontend framework.
- FastAPI as our backend framework.
- PostgreSQL as our database.

Our backend might expose the following endpoint:

\`\`\`http
GET https://myapp.com/api/products
\`\`\`

The React application can request product information using Fetch API:

\`\`\`javascript
const response = await fetch(
  "https://myapp.com/api/products"
);

const products = await response.json();

console.log(products);
\`\`\`

The backend receives the request, retrieves the required information, and returns a response.

### How does this communication work?

1. React uses Fetch API to send a request.
2. The request travels through HTTP or HTTPS.
3. The backend receives and processes the request.
4. The backend retrieves information from PostgreSQL if required.
5. The backend prepares an HTTP response.
6. The response is returned to the frontend.
7. React uses the received data to update the UI.

This is one of the most common ways frontend and backend applications communicate.

## 4. API vs Web API

Although these terms are related, they do not have exactly the same scope.

| API | Web API |
|---|---|
| Stands for Application Programming Interface | An API exposed through web technologies |
| A broad software development concept | A more specific category of API |
| Can work through different interfaces and mechanisms | Commonly uses HTTP/HTTPS |
| Can exist without internet or web communication | Designed for web-based access |
| Examples: OS APIs, library APIs, database interfaces | REST APIs and GraphQL APIs over HTTP |

**Remember:** Every Web API is an API, but not every API is a Web API.

For example, React's \`useState()\` is a library API. It does not require an HTTP request to work.

## 5. Browser API vs Backend Web API

These two terms are especially important in frontend development.

| Browser API | Backend Web API |
|---|---|
| Provides browser-related capabilities | Provides backend application functionality |
| Available through the browser environment | Exposed by a backend service |
| Can work without a server request | Usually accessed through a network request |
| Examples: localStorage, DOM, Geolocation | Examples: \`/api/users\`, \`/api/login\` |

Consider this example:

\`\`\`javascript
fetch("https://myapp.com/api/users");
\`\`\`

There are two different things happening here:

- \`fetch()\` is a browser-provided Fetch API.
- \`https://myapp.com/api/users\` is an endpoint exposed by the backend Web API.

One provides the functionality to send a request, while the other provides the functionality being requested.

**A terminology note:** In web standards, the term "Web APIs" is also commonly used for browser-provided APIs such as DOM, Fetch, and Geolocation. In this article, Backend Web API refers specifically to APIs exposed by backend services.

## 6. What Is Fetch API?

Fetch API is a JavaScript Web Platform API used to make HTTP requests and receive HTTP responses.

It is commonly used in React applications to communicate with backend services.

Fetch returns a Promise and supports different HTTP methods, request headers, request bodies, and response handling.

### Example 1: GET Request

A GET request retrieves information from the backend.

\`\`\`javascript
const response = await fetch(
  "https://myapp.com/api/users"
);

const users = await response.json();

console.log(users);
\`\`\`

### Example 2: POST Request

A POST request can be used to create a new user.

\`\`\`javascript
const response = await fetch(
  "https://myapp.com/api/users",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Asmita",
      email: "asmita@example.com"
    })
  }
);

const result = await response.json();

console.log(result);
\`\`\`

Let's understand the important properties:

- \`method\`: Defines the HTTP method.
- \`headers\`: Provides additional request information.
- \`body\`: Contains the data being sent to the backend.
- \`JSON.stringify()\`: Converts a JavaScript value into a JSON string.
- \`response.json()\`: Parses the JSON response body into a JavaScript value.

### Example 3: Error Handling

One important detail about Fetch API is that HTTP errors such as 404 and 500 do not automatically reject the Promise.

Therefore, we should check \`response.ok\`.

\`\`\`javascript
try {
  const response = await fetch(
    "https://myapp.com/api/users"
  );

  if (!response.ok) {
    throw new Error(\`HTTP Error: \${response.status}\`);
  }

  const users = await response.json();

  console.log(users);

} catch (error) {
  console.error("Request failed:", error);
}
\`\`\`

For responses with no body, such as \`204 No Content\`, we should not attempt to parse the response using \`response.json()\`.

## 7. What Is HTTP?

HTTP stands for **Hypertext Transfer Protocol**.

It is an application-layer protocol used for communication between clients and servers.

In a typical web application, the browser sends an HTTP request to the backend, and the backend returns an HTTP response.

### HTTP Request

An HTTP request commonly contains:

- HTTP method
- URL
- Headers
- Optional request body

Example:

\`\`\`http
GET /api/users HTTP/1.1
Host: myapp.com
Accept: application/json
\`\`\`

### HTTP Response

An HTTP response commonly contains:

- Status code
- Headers
- Optional response body

Example:

\`\`\`http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "Asmita"
}
\`\`\`

HTTP itself does not provide encryption or transport security.

## 8. What Is HTTPS?

HTTPS stands for **Hypertext Transfer Protocol Secure**.

It is HTTP communication secured using TLS (Transport Layer Security).

HTTPS protects communication between the client and server through:

1. **Encryption:** Helps prevent unauthorized parties from reading transmitted data.
2. **Integrity:** Helps detect unauthorized changes to transmitted data.
3. **Authentication:** Helps verify the server's identity through its TLS certificate.

### HTTP vs HTTPS

| HTTP | HTTPS |
|---|---|
| Hypertext Transfer Protocol | Hypertext Transfer Protocol Secure |
| No TLS protection by itself | Uses TLS |
| Default port 80 | Default port 443 |
| Does not encrypt HTTP communication | Encrypts HTTP communication through TLS |

HTTPS is essential for production web applications, especially when handling login credentials, personal information, and payment-related data.

## 9. Complete Communication Flow: React → Backend → Database

Let's connect all these concepts through a practical example.

Imagine we are developing a user management application with React, FastAPI, and PostgreSQL.

When a user clicks the Login button, the following process takes place:

**Step 1: React Frontend**

The user enters their email and password and clicks Login.

React uses Fetch API to send an HTTPS request:

\`\`\`javascript
const response = await fetch(
  "https://myapp.com/api/login",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: "asmita@example.com",
      password: "example-password"
    })
  }
);
\`\`\`

**Step 2: Backend Web API**

FastAPI exposes a login endpoint:

\`\`\`python
@app.post("/api/login")
def login(user: LoginRequest):
    # Validate credentials
    # Process authentication
    # Return an appropriate response
    return {"message": "Login successful"}
\`\`\`

**Step 3: Database Communication**

The backend uses a PostgreSQL driver or database library to retrieve the required user information and perform database operations.

**Step 4: Response**

The backend sends an HTTP response to React.

React processes the response and updates the UI based on the result.

### Understanding the role of each component

| Component | Responsibility |
|---|---|
| React | Displays the user interface |
| Fetch API | Sends HTTP requests |
| HTTPS | Secures communication |
| Backend Web API | Processes incoming requests |
| Database driver | Connects the backend to PostgreSQL |
| PostgreSQL | Stores application data |

This architecture separates frontend responsibilities, backend business logic, and database operations.

## 10. Other Tools Used for API Development

As frontend developers, we often work with different tools for API integration, testing, and debugging.

| Tool | Purpose |
|---|---|
| Fetch API | Native JavaScript HTTP requests |
| Axios | HTTP client library |
| Postman | API testing and request inspection |
| Swagger / OpenAPI | API documentation and specifications |
| Browser DevTools | Inspect network requests and responses |
| Insomnia | API testing and debugging |

Each tool serves a different purpose. For example, Fetch and Axios are used in application code, whereas Postman helps developers test APIs independently of the frontend.

## Conclusion

Understanding APIs is fundamental to becoming a strong frontend developer.

An API is a broad interface that allows software components to interact. A Web API makes functionality accessible through web technologies, commonly HTTP or HTTPS.

In modern frontend development, we frequently use browser-provided APIs such as Fetch API to communicate with backend services.

Understanding the difference between the request mechanism, the backend endpoint, the communication protocol, and the database connection makes it much easier to understand how a complete web application works.

The most important concept to remember is:

**React uses Fetch API to send an HTTP/HTTPS request to a backend Web API. The backend processes the request and communicates with the database through an appropriate database driver or library.**

That is the foundation of API integration in modern web development.

---

**Key Takeaways**

- API is a broad software development concept.
- Web API is an API exposed through web technologies.
- Browser APIs provide browser capabilities.
- Fetch API is used to send HTTP requests.
- HTTP defines client-server communication.
- HTTPS secures that communication using TLS.
- Backend services communicate with databases through database drivers or libraries.
- React applications typically communicate with databases through a backend rather than connecting directly to them.

**Further Reading:** This article is part of my learning journey in web development, focusing on JavaScript, React, backend communication, and API integration.`,
  },
];

