#RESTful API Activity - Rodel Anoche

## Best Practices Implementation

**1. Environment Variables:**

- Why did we put `BASE_URI` in `.env` for our routes?
  -Answer: This is to keep the codes flexible and allows different values for development.

**2. Resource Modeling:**

- Why did we use plural nouns (e.g., `/dishes` )for our route?
- Answer : Plural names like /dishes represents the compilation of resources, this makes the API look clearer.

**3. Status Codes:**

- When do we use 201 Created vs 200 OK?
- Answer : We use 201 when we do POST request and creates a new resource, while 200 is for successfull request that does not create a new resource.

- Why is it important to return `404` instead of just an empy array or a generic error?
- Answer : Showing a 404 tells the client that the resource does not exist, which gives a clear feedback instead of just showing an empty result or screen.

**4. Testing:**

- (Paste a screenshot of a successful GET request here)
  <img width="1366" height="738" alt="Screenshot 2026-01-28 135108" src="https://github.com/user-attachments/assets/a710a4db-2c9b-4c8a-a039-3bb44fcf31bd" />
  <img width="1366" height="738" alt="Screenshot 2026-01-28 135123" src="https://github.com/user-attachments/assets/3db45a09-2f6a-4521-ac18-b57d6ea7e776" />

"Why did I choose to Embed the [Review/Tag/Log]?"
I choose to embed the review because it is dependent from the dish. If the dish is removed from the menu, the review loses its context and value, making it a natural part of the dish’s data structure.

"Why did I choose to Reference the [Chef/User/Guest]?"
I choose to reference the Chef because if a chef changes their name or bio, I only have to update it in one place rather than editing hundreds of individual dish documents.


Submission Checklist & README.md 
Update your README.md with the following questions to prove your 
understanding: 
1. [ / ] Code runs via npm run dev with no errors. 
2. [ / ] Registration and Login endpoints are functional. 
3. [ / ] Middleware correctly blocks unauthorized users. 
4. [ / ] GitHub Repo link submitted. 
5. [ / ] README.md updated with the following answers: 

README.md Questions: 
1. Authentication vs Authorization: 
o What is the difference between Authentication and Authorization in our 
code? 
o Answer: Authentication is the process of verifying the identity of the user, while Authorization determines what the verified user is allowed to do in your system.
2. Security (bcrypt): 
o Why did we use bcryptjs instead of saving passwords as plain text in 
MongoDB? 
o Answer: We used bcrypt to store the passwords as salted hashes rather than plain text, this ensures that even if the database is breached, the original passwords remain unreadable and protected.
3. JWT Structure: 
o What does the protect middleware do when it receives a JWT from the 
client? 
o Answer: The protect middleware checks the user's digital key to make sure it is real and hasn't expired, then it finds out which user is calling so the server can help them.