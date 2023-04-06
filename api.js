function api(path, method, body) {
  const url = "http://localhost:9090" + path;

  const options = {
    method,

    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "X-Requested-With": "XMLHttpRequest",
    },
  };

  if (body !== null) {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options);
}

async function getConstruction() {
  let data = await api("/api/v1/constructions/all", "GET", null);
  return data.json();
}

async function getSortedBy(field) {
  let constructions = await api(
    "/api/v1/constructions/sort/" + field,
    "GET",
    null
  );
  return constructions.json();
}

async function postConstruction(construction) {
  let constructionResponse = await api(
    "/api/v1/constructions/add",
    "POST",
    construction
  );

  return constructionResponse.json();
}
