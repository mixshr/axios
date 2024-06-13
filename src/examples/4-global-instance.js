import { useEffect } from 'react';
import axios from "axios";

const productsUrl = 'https://www.course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const response = await axios(productsUrl);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
