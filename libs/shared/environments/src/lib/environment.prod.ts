import '@nestjs/common';

export const environment = {
    PORT: 3000,
    NODE_ENV: 'development',
    MONGO_URI: 'mongodb://localhost:27017/test?authSource=admin',
    REDIS_URI: 'redis://localhost:6379',
    SERVICE_NAME: 'service'
};
