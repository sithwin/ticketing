# Init Project

```
npm init -y
```

## Install Read and DOM with NextJS

```
npm install react react-dom next
```

## Build Docker Image

```
docker build -t sithu83/client .
```

## Auto refresh Next Server

add next.config.js

## Http Calling

```
npm install axios
```

# Troubleshotting

## error when creating "STDIN"

- Error from server (InternalError): error when creating "STDIN": Internal error occurred: failed calling webhook "validate.nginx.ingress.kubernetes.io": Post https://ingress-nginx-controller-admission.ingress-nginx.svc:443/networking/v1beta1/ingresses?timeout=10s: no endpoints available for service "ingress-nginx-controller-admission"
  exiting dev mode because first deploy failed: kubectl apply: exit status 1

run

```
kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
```
