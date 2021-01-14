## Install Google Cloud SDK

get from website

Alternatively, open a PowerShell terminal and run the following PowerShell commands.

```
(New-Object Net.WebClient).DownloadFile("https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe", "$env:Temp\GoogleCloudSDKInstaller.exe")

& $env:Temp\GoogleCloudSDKInstaller.exe
```

## Run gcloud container

gcloud container clusters get-credentials <cluster name>

```
gcloud container clusters get-credentials ticketing-dev
```

## Steps to create ingress-nginx

1. Change in skaffold file
2. Change image name in deployment file
3. run

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.43.0/deploy/static/provider/cloud/deploy.yaml

https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/provider/cloud-generic.yaml
```

4. Go to Loadbalacer in GCP and get ip address of LB
5. change the host file
6. Run

```
skaffold dev
```

if error in credential then type

```
gcloud auth application-default login
```

7. go to ticketing.dev
8. type

```
thisisunsafe
```

# Creating a Secret

```
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=ticketing

kubectl get secret
```
