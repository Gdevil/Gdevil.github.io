import { createBaseClient, createMapiClient } from './request';

const PLATFORM = {
  plat: "wa",
  plat_name: "51wj"
}

const apiClient = {
  base: {
    city: createBaseClient('GET', '/v1/city'),
    brand: createBaseClient('GET', '/v1/brand')
  },
  localRequest: createMapiClient('GET')
}

export default apiClient;
