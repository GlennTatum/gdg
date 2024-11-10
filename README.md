# Google Student Developer Groups Workshop 0
**Get Started**

Windows:
1. Enable Virtualization (Intel VT-x)
2. Download WSL: Microsoft Store -> "Ubuntu"
3. Download Docker Desktop
4. Launch Ubuntu

MacOS:
1. Download Docker Desktop

### Setup Guide
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

nvm install 20.18.0

git clone https://github.com/GlennTatum/gdg.git

cd gdg/base

npm install -g @ionic/cli
npm install -g @angular/cli
npm install

docker compose up
```
