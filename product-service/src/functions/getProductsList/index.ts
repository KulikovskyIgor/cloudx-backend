import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.getProductsListMiddyfied`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products',
        cors: true
      },
    },
  ],
};
