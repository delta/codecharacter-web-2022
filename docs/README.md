# CodeCharacter Web 2022

### Code Generation Process

From solution root run

```sh
$ openapi-generator-cli generate \
    -g typescript-fetch \
    -i docs/spec/CodeCharacter-API.yml \
    -c docs/spec/generator-config.yml \
    -o packages/client
```

### API Docs:

- [Specification](spec/index.html)

### Project Coverage:

- [Lcov Coverage Summary](coverage/index.html)

## Test Deployments:

- [Github Pages deployment of build output](deployment/index.html)
- [Github Pages deployment of component storybook](storybook/index.html)
