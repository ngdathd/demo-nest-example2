import '@nestjs/common';

export const environment = {
    PORT: 3000,
    NODE_ENV: 'development',
    MONGO_URI: 'mongodb://127.0.0.1:27017/test?authSource=admin',
    REDIS_URI: 'redis://:9230627@127.0.0.1:6379',
    SERVICE_NAME: 'service'
};
