import config from "../config";

const getUrlWithParamsConfig = (endpointConfig: string, query: object) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[
      endpointConfig as keyof typeof config.client.endpoint
    ].uri,
    query: {
      name: "Pikachu",
    },
  };

  return url;
};

export default getUrlWithParamsConfig;
