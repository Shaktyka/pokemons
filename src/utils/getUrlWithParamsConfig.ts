import config from "../config";

const getUrlWithParamsConfig = (endpointConfig: string) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[
      endpointConfig as keyof typeof config.client.endpoint
    ].uri,
  };

  return url;
};

export default getUrlWithParamsConfig;
