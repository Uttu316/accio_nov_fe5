export const api = async ({ endpoint }) => {
  const URL = "https://fakestoreapi.com" + endpoint;
  try {
    const res = await fetch(URL);
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("Error fetching products:", err);
    throw err;
  }
};
