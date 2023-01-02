## Getting Started

Update Packages:
```bash
sudo apt update && sudo apt upgrade -y
```

Install PostgreSQL:
```bash
sudo apt install postgresql postgresql-contrib -y
```

//buat akun dan database, baru backup

Install NodeJs:
```bash
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Install PM2
```bash
sudo npm install pm2 -g
```

Clone this repository to server.
Move inside the backend repository and install node dependencies:
```bash
git clone https://github.com/Sanjeev-Thiyagarajan/PERN-STACK-DEPLOYMENT.git
cd backend
npm install
```

Migrate and Backup Database:
```bash
npm install -g sequelize-cli
sequelize db:migrate
```

Configure PM2 (still inside backend repository):
```bash
pm2 start npm --name server -- run 'start-prod'
```