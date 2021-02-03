# Create secret key

```
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=ticketing
```

# Setup Test

```
npm install --save-dev @types/jest @types/supertest jest ts-jest supertest mongodb-memory-server
```

## run test with coverage

```
npm test -- --coverage
```

## To update the common module

```
npm update @vmticketing/common
```
