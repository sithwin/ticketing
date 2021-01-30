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

## To call Auth Service from Nest Server

## Ingress Cluster URL

Below Domain name is to reach out to ingress-nginx
http://ServiceName.NameSpace.svc.cluster.local

To find it get the name of the ingress-nginx

```
kubectl get namespace
```

To get the ingress-nginx name and run

```
kubectl get service -n ingress-nginx
```

Your url should be

```
http://ingress-nginx.ingress-nginx.svc.cluster.local/[yourEndPoint]
```
