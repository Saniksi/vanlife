export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : '/api/vans';
  const responsive = await fetch(url);

  if (!responsive.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: responsive.statusText,
      status: responsive.status,
    };
  }

  const data = await responsive.json();

  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
  const response = await fetch(url);

  if (!response.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: response.statusText,
      status: response.status,
    };
  }

  const data = await response.json();

  return data.vans;
}

export async function loginUser(credits) {
  const response = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(credits),
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      message: data.message,
      statusbar: response.statusText,
      status: response.status,
    };
  }

  return data;
}

// fetch(`/api/vans/${parameter.id}`)
//   .then((resolve) => resolve.json())
//   .then((result) => setVan(result.vans));

// fetch('/api/vans')
//   .then((response) => response.json())
//   .then((result) => {
//     for (let van of result.vans) {
//       setVans((prev) => [...prev, van]);
//     }
//   });
