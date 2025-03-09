
import { BASE_URL } from "./Base";
 const getClosedTickets = async () => {
    try {
      const response = await fetch(`${BASE_URL}/crystree/count/closed`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch closed tickets");
      }
  
      const data = await response.json();
      return data; // Assuming API returns just the count number
    } catch (error) {
      console.error("Error fetching closed tickets:", error);
      return 0; // Return 0 in case of an error
    }
  };
export default getClosedTickets;

