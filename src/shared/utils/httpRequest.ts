export const generateUrlParams = (params: Record<string, string>) => new URLSearchParams(params).toString();

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? '';
export const httpGet = async <T = unknown>(url: string, options?: Request) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'GET',
    ...options
  });

  if (!response.ok) {
    throw new Error(`HTTP error, status = ${response.status}`);
  }

  return response.json() as T;
};

export const httpPost = async <T = unknown, K = unknown>(url: string, body: T, options?: Request) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    ...options
  });

  if (!response.ok) {
    throw new Error(`HTTP error, status = ${response.status}`);
  }

  return response.json() as K;
};
