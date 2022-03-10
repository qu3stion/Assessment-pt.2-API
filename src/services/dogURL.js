import axios from 'axios';

export async function dogURL() {
  const response = await axios.get('https://dog.ceo/api/breeds/image/random')
  console.log(response);
  return response
}
