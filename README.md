# Project Assessment Documentation

## Clone the Repository

First, clone the repository from the provided link:

```bash
git clone https://github.com/saqib-nb/pb-assessment.git
cd pb-assessment
```

## Create a New Public Repository

1. Log in to your GitHub account.
2. Create a new public repository.
3. Add the new repository remote to the cloned repository:
    ```bash
    git remote add new-origin <new-repo-link>
    ```
5. Push the initial code to the new repository and commit:
    ```bash
    git add .
    git commit -m "initialized"
    git push new-origin main
    ```

## Build and Run the Code

1. Install the necessary dependencies: `npm install`
2. Build the project: `npm run build`
3. Start the development server: `npm start`

## Assessment Tasks

Follow the Figma
design: [Figma Design](https://www.figma.com/design/ykTJaLkb1pTKXVy029Gp9m/Assessment?node-id=0-1&t=1XcOiB4rFklozwvr-0)

API Base URL: `https://paybag-backend.nb-live.com/api/v1`

### Task Requirements

1. **Fixes in Design as per Figma**: Implement the necessary design changes to match the Figma design.

2. **Add Skeleton Loader**: Implement a skeleton loader for the loading state of the home page.

3. **API Implementation**: Integrate the provided APIs with the frontend.

4. **Follow the API Integration Ethics**: Ensure that the API integration follows best practices and handles errors
   gracefully.

5. **Using Redux for Caching the Home Page API**: Implement Redux to cache the data fetched from the home page API.

## Final Commit

After completing all the tasks, commit your final changes:

```bash
git add .
git commit -m "Final commit: Completed all assessment tasks"
git push new-origin main
```
