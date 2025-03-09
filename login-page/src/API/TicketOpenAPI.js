import { BASE_URL } from "./Base";

 const getInProgressTickets = async () => {
    try {
      const response = await fetch(`${BASE_URL}/crystree/count/open`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch in-progress tickets");
      }
  
      const data = await response.json();
      return data; // Assuming API returns just the count number
    } catch (error) {
      console.error("Error fetching in-progress tickets:", error);
      return 0; // Return 0 in case of an error
    }
  };
  export default getInProgressTickets;