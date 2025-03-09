import { BASE_URL } from "./Base";

const getAllTickets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/crystree/getall`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch tickets");
    }

    const data = await response.json();
    return data; // API now returns status names directly
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return []; // Return an empty array in case of an error
  }
};

export default getAllTickets;

 