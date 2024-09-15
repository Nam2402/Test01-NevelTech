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

![Screenshot 2024-09-15 at 17 15 41](https://github.com/user-attachments/assets/0af06dc2-f924-400e-811c-315a457a4d31)
![Screenshot 2024-09-15 at 17 08 16](https://github.com/user-attachments/assets/5d6f16f9-cc3f-474f-a523-87a64cd13bf9)
![Screenshot 2024-09-15 at 17 08 31](https://github.com/user-attachments/assets/7c849512-4e81-4124-8140-9fee281717dd)
![Screenshot 2024-09-15 at 17 09 15](https://github.com/user-attachments/assets/04a58dec-041e-471f-9520-08a168f2cc2d)
![Screenshot 2024-09-15 at 17 09 35](https://github.com/user-attachments/assets/f36f4b7c-cf08-4590-8868-1863d0cf9a86)
![Screenshot 2024-09-15 at 17 09 43](https://github.com/user-attachments/assets/1685a828-7a3e-4995-b54a-7a9a18bd8ad7)
