# Accessiblity Workshop

Provide examples.

## Quick Start

-   `npm run build` creates static assets
-   `npm start` serves the assets

## VS Code Launch Config

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "DEV Server",
            "program": "${workspaceFolder}/src/http-server/http-server.mjs",
            "runtimeArgs": ["--experimental-modules"],
            "env": {
                "NODE_ENV": "development"
            }
        },
        {
            "type": "node",
            "request": "launch",
            "name": "PROD Server",
            "program": "${workspaceFolder}/src/http-server/http-server.mjs",
            "runtimeArgs": ["--experimental-modules"],
            "env": {
                "NODE_ENV": "production"
            }
        }
    ]
}
```
