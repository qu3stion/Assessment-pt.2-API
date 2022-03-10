import axios from 'axios';

export async function catURL() {
  const response = await axios.get('https://api.thecatapi.com/v1/images/search/api_key=309f040a-0791-426b-a0f7-9b02f6b2851e')
  console.log(response);
  return response
}
