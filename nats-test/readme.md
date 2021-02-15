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
kubectl port-forward nats-deployment-67557c9697-kws9z 4222:4222
```
