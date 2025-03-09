
import { BASE_URL } from "./Base";

const resetPasswordApi = async (userId, newPassword, confirmPassword) => {
    if (!userId) {
      console.error("❌ User ID is missing");
      return null; // Return null to prevent undefined errors
    }
  
    try {
      console.log("🔍 Sending request with:", { userId, newPassword, confirmPassword });
  
      const response = await fetch(`${BASE_URL}/crystree/reset-password`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, newPassword, confirmPassword }),
      });
  
      console.log("📩 API Response Received:", response);
  
      return response; // ✅ Return the response so it can be used in `handleSubmit`
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      return null; // Prevent further errors
    }
  };
  
  export default resetPasswordApi;
  
// const resetPasswordApi = async (userId, newPassword, confirmPassword) => {
//     if (!userId) {
//       console.error("User ID is missing");
//       return;
//     }
  
//     try {
//       const response = await fetch(`${BASE_URL}/crystree/reset-password`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userId, newPassword, confirmPassword }),
//       });
  
//       const data = await response.json();
//       console.log("Response:", data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
  
// const resetPasswordApi = async (userId, password, setError) => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/crystree/reset-password?userId=${userId}&password=${password}`,
//         {
//           method: "POST",
//           headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//           },
//         }
//       );
  
//       const data = await response.json();
  
//       if (response.ok && data.success) {
//         alert("Password reset successful!");
//         setError("");
//       } else {
//         setError(data.message || "Failed to reset password");
//       }
//     } catch (error) {
//       setError("An error occurred while resetting password.");
//       console.error("Reset Password API Error:", error);
//     }
//   };
  
  