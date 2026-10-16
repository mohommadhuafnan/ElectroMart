# Contributing to ElectroMart

Thank you for contributing to ElectroMart! Please adhere to the following workflow for all collaborative development:

## 1. Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/mohommadhuafnan/ElectroMart.git
   cd ElectroMart
   ```
2. Set up Backend:
   ```bash
   cd backend
   npm install
   cp .env.example .env
   npm run dev
   ```
3. Set up Frontend:
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   npm run dev
   ```

## 2. Commit Message Guidelines
Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation updates
- `style:` for styling/UI improvements
- `refactor:` for code restructuring without behavior change
- `chore:` for config and dependency updates

## 3. Pull Request Process
1. Create a feature branch: `git checkout -b feature/your-feature-name`
2. Commit your changes with descriptive messages.
3. Push to your branch and open a PR into `main`.
4. Ensure both frontend and backend start with no build errors before merging.
