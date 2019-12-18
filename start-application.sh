cd backend && \
docker-compose up -d --build && \
docker-compose run --rm composer update && \
docker-compose run --rm php php artisan migrate && \
docker-compose run --rm php ./vendor/bin/phpunit
