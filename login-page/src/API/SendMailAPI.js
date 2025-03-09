import { BASE_URL } from "./Base";

const sendUserIdApi = async (input, setError) => {
    try {
      const response = await fetch(
        `${BASE_URL}/crystree/send-user-id?input=${input}`,
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const text = await response.text();  
      console.log("Raw API Response:", text);

      let data;
      try {
        data = JSON.parse(text);  // Parse JSON safely
      } catch (error) {
        console.error("JSON Parse Error:", error);
        setError("Invalid server response format.");
        return;
      }

      console.log("Parsed API Response:", data);

      if (response.ok && data.success) {
        alert("User ID has been sent successfully!");
        setError("");
      } else {
        setError(data.message || "Failed to send user ID.");
      }
    } catch (error) {
      setError("An error occurred while sending user ID.");
      console.error("Send User ID API Error:", error);
    }
};
  

  
  export default sendUserIdApi;
  