### This is sharing bookshelf app to borrow co-people's books each other.

## system

### backend
- Node.js
- Express
- Google App Engine
  - Standard Environment (beta)
  - runtime: Node.js v8.9.1

### frontend
- React
- [WIP] Redux
- [WIP] GraphQL

## Deploy

### 1. Go to GCP Cloud Shell

### 2. Command

```
PROJECT_APP=src/project-ID/sharing_bookshelf
git clone https://github.com/samuraikun/sharing_bookshelf.git PROJECT_APP
cd $PROJECT_APP

npm install

cd client
npm install
npm run build

cd ..
gcloud app deploy --project project-ID
```