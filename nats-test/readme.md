# Setup project

```
npm install node-nats-streaming ts-node-dev typescript @types/node
```

## init typescript

```
tsc --init
```

# Port forwarding

- get name of the nats deployment

```
kubectl port-forward nats-deployment-5f547cf8c8-tbr2g 4222:4222
```
