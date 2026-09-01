### Commands

1. Create a folder 
  cd typescript
  npm init -y
  npm install typescript
  npx tsc --init => tsconfig.json
  touch .gitignore
  //commands=> 
  # Dependencies
node_modules/

# Build output
dist/
build/

# Environment variables
.env
.env.local
.env.*.local

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE / Editor
.vscode/
.idea/

# OS files
.DS_Store
Thumbs.db

# TypeScript
*.tsbuildinfo

  mkdir src 
  comment out these 

    "rootDir": "./src",
    "outDir": "./dist",

  to check output npx tsc -b