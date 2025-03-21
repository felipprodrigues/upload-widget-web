# Upload Widget Web

## Description
This is an image upload widget application. In addition to the main upload flow for storage in Cloudflare R2, it explores several other features to make the widget highly functional. These include compression, conversion, resizing, animations, cancellation, retry mechanisms, downloading, and sharing links. Finally, we handle most of these processes entirely on the front-end, reducing the load on the back-end and storage systems.

## UI Preview
![Screenshot 2025-03-21 at 8 51 59 AM](https://github.com/user-attachments/assets/e245d8fa-31ca-4dac-a76a-bee59a304239)
![Screenshot 2025-03-21 at 8 52 23 AM](https://github.com/user-attachments/assets/f5c0cbdf-cd05-44fd-bce0-ee8c9869b462)
![Screenshot 2025-03-21 at 8 49 39 AM](https://github.com/user-attachments/assets/3c804900-55b6-4290-8b4b-6376006cd514)
![Screenshot 2025-03-21 at 8 50 12 AM](https://github.com/user-attachments/assets/616fd739-112f-42de-84b7-1439ee606226)

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



