import config from "../config";

const getUrlWithParamsConfig = (endpointConfig: string, query: any) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[
      endpointConfig as keyof typeof config.client.endpoint
    ].uri,
    query: {},
  };

  const resultQuery = { ...query };

  const pathname = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete resultQuery[val];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = {
    ...query,
  };

  return url;
};

export default getUrlWithParamsConfig;
