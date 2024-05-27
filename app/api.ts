import { Picture } from "./types";

// const API_URL = 'https://colt-great-poorly.ngrok-free.app';
const API_URL = 'http://192.168.20.15:8000';

export async function detectImage(photo: string, gender: string) {
  let formData: FormData = new FormData();

  const headers = new Headers();
  headers.set('Content-Type', 'multipart/form-data');

  // Append the photo to the form data
  formData.append('image', {
    uri: photo,
    type: 'image/jpeg', // or your image type
    name: 'photo.jpg', // or your image name
  });

  // Call the API to generate styles
  const response = await fetch(`${API_URL}/predict/?gender=${gender}`, {
    method: 'POST',
    body: formData,
    headers: headers
  });

  if (response.status !== 200) {
    throw new Error('Failed to generate styles');
  }

  return response.json();
}

export const fetchItems = async (page = 1, type="", color="", gender="") => {
    try {
      // const response = await fetch(`${API_URL}/pictures/?color=${color}&type=${type}&gender=${gender}&page=${page}`);
      const response = await fetch(`${API_URL}/pictures/?color=black&type=coat_jacket&gender="male"&page=1`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data:', data);
      return data;
    } catch (error) {
      console.error("Error fetching items:", error);
      throw error;
    }
  };