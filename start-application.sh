cd backend && \
cp .env.example .env && \
# it will start the container in detached mode
docker-compose up -d --build && \
docker-compose run --rm composer composer install --ignore-platform-reqs && \
docker-compose run --rm composer composer update --ignore-platform-reqs && \
docker-compose run --rm php php artisan migrate --seed && \
docker-compose run --rm php ./vendor/bin/phpunit && \
cd ../frontend && \
yarn install && \
yarn upgrade && \
yarn start
