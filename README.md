
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
