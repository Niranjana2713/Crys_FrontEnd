
import { BASE_URL } from "./Base";


 const getTotalTickets = async () => {
  try {
    const response = await fetch(`${BASE_URL}/crystree/total/count`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch total tickets");
    }

    const data = await response.json();
    return data; // Assuming API returns just the count number
  } catch (error) {
    console.error("Error fetching total tickets:", error);
    return 0; // Return 0 in case of an error
  }
};


export default getTotalTickets;

