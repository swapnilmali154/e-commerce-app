import axios from "axios";
import { API_URL } from "../Utilities/Constants";

const getData = async (endpoint) => {
  try {
    const result = await axios.get(`${API_URL}${endpoint}`);
    return result.data.data;
  } catch (error) {
    alert(error);
  }
};

const getDataById = async (endpoint) => {
  try {
    const result = await axios.get(`${API_URL}${endpoint}`);
    return result.data.data;
  } catch (error) {
    alert(error);
  }
};

const postData = async (endpoint, body) => {
  try {
    const result = await axios.post(`${API_URL}${endpoint}`, body);
    return result.data;
  } catch (error) {
    alert(error);
  }
};

const deleteData = async (endpoint, id) => {
  try {
    const result = await axios.get(`${API_URL}${endpoint}${id}`);
    return result.data;
  } catch (error) {
    alert(error);
  }
};

export { getData, postData, deleteData, getDataById };
