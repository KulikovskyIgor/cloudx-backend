import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import products from '@db/products';

const getProductsList: ValidatedEventAPIGatewayProxyEvent<void> = async () => {
  return formatJSONResponse(200, products);
};

export const getProductsListMiddyfied = middyfy(getProductsList);
