import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import products from '@db/products';

const getProductsById: ValidatedEventAPIGatewayProxyEvent<void> = async (event) => {
  const id = event.pathParameters.id;
  const prooduct = products.find((product) => (product.id === id));

  if (products) {
    return formatJSONResponse(200, prooduct);
  }
  return formatJSONResponse(404, undefined);
};

export const getProductsByIdMiddyfied = middyfy(getProductsById);
