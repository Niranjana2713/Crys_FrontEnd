
import { BASE_URL } from "./Base";

 const loginUser = async (username, password, rememberMe, navigate, setError) => {
    try {
      const response = await fetch(
        `${BASE_URL}/crystree/login?username=${username}&password=${password}`,
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
        }
      );
  
      const data = await response.json();
      console.log("API Response:", data);
      if (response.ok && data.success) {
        alert("Login Successful!");
        setError("");
  
        if (rememberMe) {
          localStorage.setItem("savedUsername", username);
        } else {
          localStorage.removeItem("savedUsername");
        }
        
        if (data.data && data.data.userId) {
          localStorage.setItem("userId", data.data.userId);
        } else {
          console.warn("userId is missing in API response");
        }
  
        localStorage.setItem("username", username);
        navigate("/home");
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred while logging in.");
      console.error("Login API Error:", error);
    }
  };
  export default loginUser;


// const loginApi = async (orderData) => {  // Ensure correct variable name
//     console.log('Data sent to API:', orderData);

//     try {
//         const response = await fetch(`${BASE_URL}/crystree/company/create`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(orderData)
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;

//     } catch (error) {
//         console.error('API Error:', error);
//         return null;  // Return null or handle error response
//     }
// };






// import { BASE_URL } from "../Base";
// const loginApi = async (date) => {
//     //   const setId = useParams(setId);
//     console.log('data', date);
  
//     try {
//       const responce = await fetch(`${BASE_URL}/crystree/company/create`, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(orderData)
//       })
//         .then((res) => res.json())
//         .then((data) => data)
//         .catch((err) => {
//           console.log('Api Error', err);
//         });
//       return responce;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//  export default loginApi;
  
