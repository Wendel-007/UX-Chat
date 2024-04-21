import axios from 'axios';

export const baseUrl = "http://localhost:3333/api";

export const postRequest = async (url, body) => {
  try {
    const response = await axios.post(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    let message = 'Ocorreu um erro na requisição.';
    if (error.response && error.response.status === 400) {
      message = error.response.data;
    }

    return { error: true, message };
  }
};


export const getRequest = async (url) =>{

  const response = await axios.get(url)

  const data = await response.data

  if(response.status != 200){
    let message = "Ocorreu um erro..."

    if(data?.message){
      message = data.message
    }

    return {error: true, message}
  }

  return data
}