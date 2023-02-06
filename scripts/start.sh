source .env

# Install pnpm & packages
curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
pnpm install

echo Env is set to $FRONTEND_ENVIRONMENT

# Start
if [ $FRONTEND_ENVIRONMENT = "development" ]; then
    pnpm run dev
elif [ $FRONTEND_ENVIRONMENT = "production" ]; then
    pnpm run prod
else
    echo \n ======= \n Envrionment variable is not set correctly
fi
