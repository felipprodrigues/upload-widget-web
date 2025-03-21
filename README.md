# Upload Widget Web

## Description
This is an image upload widget application. In addition to the main upload flow for storage in Cloudflare R2, it explores several other features to make the widget highly functional. These include compression, conversion, resizing, animations, cancellation, retry mechanisms, downloading, and sharing links. Finally, we handle most of these processes entirely on the front-end, reducing the load on the back-end and storage systems.

## UI Preview
![Screenshot 2025-03-21 at 8 48 32 AM](https://github.com/user-attachments/assets/0a5f7218-8cf6-421c-b602-17afa29e183c)
![Screenshot 2025-03-21 at 8 37 12 AM](https://github.com/user-attachments/assets/37d17320-a17d-44a8-b872-a5a269eacd66)
![Screenshot 2025-03-21 at 8 41 55 AM](https://github.com/user-attachments/assets/bc0aa590-55fb-464a-89cc-b9353faaded8)
![Screenshot 2025-03-21 at 8 39 02 AM](https://github.com/user-attachments/assets/38c578b7-a888-48c8-8e51-659f2a566ef7)

## Overview
This project is a web application built using React, Vite, and TailwindCSS. It is managed using `pnpm` and includes ESLint for linting. The application follows a modular structure with Zustand for state management and Radix UI for UI components.

## Prerequisites
Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Recommended version: LTS)
- [pnpm](https://pnpm.io/) (Package Manager)

### Node.js Version
This project requires Node.js version **20.18.2**. The `.nvmrc` file ensures the correct version is used. If you use `nvm`, you can run the following command to automatically switch to the required version:

```sh
nvm use
```

If you don’t have the correct version installed, run:

```sh
nvm install 20.18.2
```

## Installation
Clone the repository and install dependencies using `pnpm`:

```sh
pnpm install
```

## Running the Development Server
To start the development server, use:

```sh
pnpm run dev
```

## Building for Production
To create a production build, run:

```sh
pnpm run build
```

## Previewing the Build
To preview the production build locally:

```sh
pnpm run preview
```

## Dependencies
The project includes the following key dependencies:

- **React**: Frontend library
- **Vite**: Development and build tool
- **TailwindCSS**: Utility-first CSS framework
- **Zustand**: State management
- **Radix UI**: UI primitives
- **Axios**: HTTP client
- **Lucide React**: Icon library
- **Immer**: Immutable state management



