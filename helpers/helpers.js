export async function fetchData(url, headers, payload) {
  let response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });

  let status = response.status;
  response = await response.json();

  return new Promise((resolve, reject) => {
    let json_response = {
      status: status,
      message: response.message,
      token: response.token ? response.token : '',
    };
    resolve(json_response);
  });
}
