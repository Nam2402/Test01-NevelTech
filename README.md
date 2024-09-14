### Project Structure

    .
    ├── assets
    │   ├── data                # Data source
    │   ├── fonts               # Font icons
    │   ├── icons               # Favicon files
    │   ├── images              # Image files ( SVG, PNG, JPG )
    ├── i18n                    # Translate languages
    │   ├── en.json
    │   ├── vi.json
    ├── public                  # Build folder for deploy production
    ├── src
    │   ├── api                 # API Request
    │   ├── components          # React Components
    │   ├── config              # Config app ( router, constants, i18n ...)
    │   ├── modals              # Modal view
    │   ├── containers          # Container subview for page ( include by component view, modal view, etc... )
    │   ├── pages               # Page view for each routes
    │   ├── store               # Root store for app
    │   ├── styles
    │   ├── types               # Define types for each module
    │   ├── enums               # Define enums for each module
    │   ├── utils
    │   ├── app.tsx
    ├── .env                    # ENV config for webpack builder ( API, APP_URL, NODE_ENV, PORT, etc... )
    ├── .env.development        # ENV config info ( helpful clone to .env file )
    ├── .eslintignore           # Ignore validate EsLint some files
    ├── .eslintrc               # EsLint config
    ├── .nvmrc                  # Project nodejs version
    ├── .prettierignore         # Ignore validate Prettier some files
    ├── .prettierrc             # Prettier config
    ├── .stylelintrc            # Stylelint config
    ├── index.html
    ├── package.json
    ├── tsconfig.json           # Typescript config
    ├── vite.config.ts          # Vite config
    ├── pnpm-lock.yaml
    └── ...

### Run project

- Use nodejs version 18
- `Config for development .env.development`

```
APP_URL=
NODE_ENV=development
PORT=3000
```
![Screenshot 2024-09-14 at 22 35 29](https://github.com/user-attachments/assets/1036da94-10d9-4ecb-b57d-8eca06fbde01)
![Screenshot 2024-09-14 at 22 35 17](https://github.com/user-attachments/assets/f93ad611-9c69-4120-a240-7a20f769b3dc)
