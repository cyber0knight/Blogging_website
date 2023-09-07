import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useAuth } from "./auth";
import { warningNote } from "../components/toast";

const PhotoContext = createContext();
const PhotoProvider = ({ children }) => {
  const [photo, setPhoto] = useState(null);
  const [auth] = useAuth();

  useEffect(() => {
    // Make sure the user is authenticated before fetching the photo
    if (auth.user) {
      // Assuming you have an API endpoint to get the user's photo
      // You can replace 'your-photo-api-endpoint' with the actual API endpoint
      axios.get(`/api/v1/photo/getPhoto/${auth.user._id}`)
        .then((response) => {
          // Check if the response contains a photo
          if (response) {
            setPhoto(response.data);
          }
        })
        .catch((error) => { 
          // Handle any errors
          // console.error("Error fetching user photo:", error);
          warningNote();
        });
    }
  }, [auth.user]); // Add auth.user as a dependency

  return (
    <PhotoContext.Provider value={photo}>
      {children}
    </PhotoContext.Provider>
  );
};

// Custom hook to use the user's photo
const usePhoto = () => useContext(PhotoContext);

export { usePhoto, PhotoProvider };