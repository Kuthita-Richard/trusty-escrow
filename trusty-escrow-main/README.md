# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Docker Setup

This project includes Docker support for containerized development and deployment.

### Build and run with Docker

**Production build (nginx):**
```sh
docker build -t trusty-escrow .
docker run -p 3000:80 trusty-escrow
```

Then visit `http://localhost:3000` in your browser.

### Using Docker Compose

**Production container:**
```sh
docker-compose up app
```

This starts the production-optimized nginx container on `http://localhost:5173`.

**Development with hot reload:**
```sh
docker-compose up dev
```

This starts the dev server with hot-reload on `http://localhost:5174`. Changes to your code will automatically refresh.

**Both services:**
```sh
docker-compose up
```

### Files included

- `Dockerfile` - Multi-stage build: Node build → nginx serve
- `.dockerignore` - Excludes unnecessary files from Docker context
- `docker-compose.yml` - Service definitions for prod and dev
- `nginx.conf` - nginx configuration with SPA routing and caching

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

Alternatively, deploy the Docker image to any container registry (Docker Hub, ECR, GCR, etc.) and run it on your preferred platform (Kubernetes, ECS, App Engine, etc.).

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
