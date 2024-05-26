
// const API_URL = 'https://colt-great-poorly.ngrok-free.app';
const API_URL = 'http://192.168.20.15:8000';

export async function detectImage(photo: string) {
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
  const response = await fetch(`${API_URL}/predict/`, {
    method: 'POST',
    body: formData,
    headers: headers
  });

  if (response.status !== 200) {
    throw new Error('Failed to generate styles');
  }

  return response.json();
}