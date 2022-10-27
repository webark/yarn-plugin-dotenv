# yarn-plugin-dotenv
A Yarn Berry plugin that adds .env contents to you environment

## Installation

```sh
$ yarn plugin import https://raw.githubusercontent.com/webark/yarn-plugin-dotenv/main/bundles/%40yarnpkg/plugin-dotenv.js
```

## Usage

This will load up any .env* at the root of the directory
```typescript
readdirSync(project.cwd).filter(file => /\.env.*/.test(file));
```
and load them into you environment variable which the yarn script is run in.

### Note

This does not load these vars if the `NODE_ENV` is set to production. To override this behavior you can set `READ_ENV_FILES` to true.

```typescript
scriptEnv.NODE_ENV !== 'production' || scriptEnv.READ_ENV_FILES === 'true'
```
 
