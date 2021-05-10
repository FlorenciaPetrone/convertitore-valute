import axios from "axios";

export const getExchangeRate = async (url) => {
  return await (
    await axios.get(url)
  ).data;
};

export const updateUserData = async (data) => {
  const response = await axios.post(
    "https://hookb.in/OeMwMZJVMRHnzzlkQrDQ",
    data
  );
};

//Contact form data posted in "https://hookbin.com/OeMwMZJVMRHnzzlkQrDQ"
