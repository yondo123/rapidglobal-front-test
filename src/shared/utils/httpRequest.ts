export const generateUrlParams = (params: Record<string, string>) => new URLSearchParams(params).toString();

export const httpGet = async <T>(url: string, options?: Request) => {
  const response = await fetch(`http://localhost:3000${url}`, {
    method: 'GET',
    ...options
  });

  if (!response.ok) {
    throw new Error(`HTTP error, status = ${response.status}`);
  }

  return response.json() as T;
};
