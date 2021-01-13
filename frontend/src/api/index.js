export async function createItem(data) {
  const response = await fetch("http://localhost:8080/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function storeItem(data) {
  // [id1, id2, id3]
  //
  const response = await fetch("http://localhost:8080/api/products/store", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: data }),
  });
  return await response.json();
}

export async function deleteItem(id) {
  const response = await fetch(`http://localhost:8080/api/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json;
}

// export async function updateItem() {
//   const response = await fetch(`http://localhost:8080/api/products/store`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   return await response.json;
// }
