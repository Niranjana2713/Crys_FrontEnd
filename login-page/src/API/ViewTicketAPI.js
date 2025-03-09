import { BASE_URL } from "./Base";

const getTicketById = async (ticketId) => {
    try {
      const response = await fetch(`${BASE_URL}/crystree/ticket/get/${ticketId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch ticket details");
      }
  
      const data = await response.json();
      console.log("API Response Data:", data);
      return data; // Return ticket data
    } catch (error) {
      console.error("Error fetching ticket:", error);
      return null; // Return null in case of an error
    }
  };
  
  export default getTicketById;
  