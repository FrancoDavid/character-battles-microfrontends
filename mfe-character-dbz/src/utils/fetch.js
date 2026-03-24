const API_URL = "https://dragonball-api.com/api/";

export default async (urlParams) => {
  try {
    const response = await fetch(`${API_URL}${urlParams}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // No necesitas Promise.resolve()
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Lanza el error en lugar de Promise.reject()
  }
};
