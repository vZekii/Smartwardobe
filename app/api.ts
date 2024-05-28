import { Picture } from "./types";

//const API_URL = 'https://colt-great-poorly.ngrok-free.app';
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

export const fetchItems = async (page = 1, clothing_type="", color="", gender="", testing=false) => {
  if (!testing) {  
    try {
        const response = await fetch(`${API_URL}/pictures/?color=${color}&type=${clothing_type}&gender=${gender}&page=${page}`);
        //const response = await fetch(`${API_URL}/pictures/?color=black&type=coat_jacket&gender="male"&page=1`);
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
  } else {
    return {
      "count": 3, 
      "next": null, 
      "previous": null, 
      "results": 
        [
          {
            "brand": "Staple Superior", 
            "color": "black", 
            "gender": "male", 
            "image_url": "https://static.theiconic.com.au/p/staple-superior-9955-0153402-1.jpg", 
            "picture_id": 1, 
            "product_name": "Jackson Jacket", 
            "purchase_link": "https://www.theiconic.com.au/jackson-jacket-2043510.html", 
            "type": "coat_jacket"
          }, 
          {
            "brand": "The North Face", 
            "color": "black", 
            "gender": "male", 
            "image_url": "https://static.theiconic.com.au/p/the-north-face-0996-1118241-1.jpg", 
            "picture_id": 3, 
            "product_name": "Hydrenalite Down Hoodie", 
            "purchase_link": "https://www.theiconic.com.au/hydrenalite-down-hoodie-1428111.html", 
            "type": "coat_jacket"
          }, 
          {
            "brand": "Stussy", 
            "color": "black", 
            "gender": "male", 
            "image_url": "https://static.theiconic.com.au/p/stussy-7871-8269381-1.jpg", 
            "picture_id": 4, 
            "product_name": "Work Sherpa Zip Crew", 
            "purchase_link": "https://www.theiconic.com.au/work-sherpa-zip-crew-1839628.html", 
            "type": "coat_jacket"
          }
        ]
      }
    }
  };