import axios from "axios";

export const updateUserData = async (data) => {
  return await axios.post("https://hookb.in/OeMwMZJVMRHnzzlkQrDQ", data);
};

//Contact form data posted in "https://hookbin.com/OeMwMZJVMRHnzzlkQrDQ"
