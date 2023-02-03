
const ERROR_STATUS = [404, 429, 401]

const jsonizeData = async (response: Response) => {
  if (
    /^2[0-9][0-9]/.test(response.status.toString())
  ) {
    // Is an OK response
    const data = await response.json();
    return { data, status: response.status };
  }
  return { data: response, status: response.status };
};

const _fetch: any = async (url: string) => {
  let response;
  try {
    response = await fetch(url);
  } catch (error: any) {
    throw response;
  }
  if (ERROR_STATUS.includes(response.status)) {
    throw response;
  }
  return response;
};

const getRequest = async (url: string) => {
  return await _fetch(url);
};

const getDataRequest = async (url: string) => {
  const response = await getRequest(url);
  return await jsonizeData(response);
};


export {
  _fetch,
  getRequest,
  getDataRequest,
};
