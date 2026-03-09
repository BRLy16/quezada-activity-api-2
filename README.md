1. Markdown
2. # RESTful API Activity - [Beverly Quezada]
3. ## Best Practices Implementation
4. **1. Environment Variables:**
5. - Why did we put `BASE_URI` in `.env` instead of hardcoding it?
6. - Answer: We placed `BASE_URI` in the `.env` file to keep configuration values separate from the source code. This improves security, makes the application easier to maintain, and allows us to change the base URL depending on the environment (development, testing, or production) without modifying the actual code.

7. **2. Resource Modeling:**
8. - Why did we use plural nouns (e.g., `/dishes`) for our routes?
9. - Answer: Plural nouns are used because RESTful APIs represent collections of resources. Using plural naming conventions makes the API more consistent, readable, and aligned with REST standards, especially when performing CRUD operations on multiple items.
10. **3. Status Codes:**
11. - When do we use `201 Created` vs `200 OK`?
    - Answer: `201 Created` is used when a new resource is successfully created, such as after a POST request. `200 OK` is used when a request is successful but does not create a new resource, like fetching or updating data.  
12. - Why is it important to return `404` instead of just an empty array or a generic error?
13. - Answer: Returning a `404 Not Found` status code is important because it clearly informs the client that the requested resource does not exist. This improves error handling, debugging, and ensures proper communication between the server and the client.
14.
15. **4. Testing:**
16. - (![alt text](<Screenshot 2026-01-28 184359.png>))


**--**
17. "Why did I choose to Embed the Review?"
- Answer: I chose to embed the review so it can be directly displayed within the application or webpage without requiring users to leave the platform, making the content more seamless and user-friendly. Also 1 user can can have few reviews, making it to be small data.
18. "Why did I choose to Reference the Chef?"
- Answer: I referenced the chef in the code to properly attribute the source of the data or content, maintain credibility, and follow ethical coding practices by acknowledging the original creator. It has an unique id that is linked for every chef.


**--**
Submission Checklist & README.md
Update your README.md with the following questions to prove your
understanding:
1. [/] Code runs via npm run dev with no errors.
2. [/] Registration and Login endpoints are functional.
3. [/] Middleware correctly blocks unauthorized users.
4. [/] GitHub Repo link submitted.
5. [/] README.md updated with the following answers:

README.md Questions:
1. Authentication vs Authorization:
 What is the difference between Authentication and Authorization in our
code?
 - Answer: Authentication verifies the identity of a user (e.g., checking username and password), while Authorization determines what actions or resources that authenticated user is allowed to access.

2. Security (bcrypt):
 Why did we use bcryptjs instead of saving passwords as plain text in
MongoDB?
- Answer: We used bcryptjs to hash passwords before storing them in MongoDB, making them secure. This prevents attackers from seeing the actual passwords if the database is compromised, unlike plain text passwords which can be easily read. 

3. JWT Structure:
 What does the protect middleware do when it receives a JWT from the
client?
- Answer: The protect middleware verifies the JWT token sent by the client. If the token is valid, it authenticates the user and allows access to protected routes; if not, it denies the request and returns an error. 
