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

- port forward for listener

```
kubectl port-forward nats-deployment-67557c9697-kws9z 8222:8222
```

- look at the listener localhost:8222/streaming
- looking at the channel http://localhost:8222/streaming/channelsz?subs=1
