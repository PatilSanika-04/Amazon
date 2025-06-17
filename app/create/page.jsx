'use client';

import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { createUser, getproduct } from './actions';

export default function UserPage() {
  const { register, handleSubmit, reset } = useForm();
  const [products, setproducts] = useState([]);

  async function loadproducts() {
    const allproducts = await getproduct();
    setproducts(allproducts);
  }

  useEffect(() => {
    loadproducts();
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);

    await createUser(formData);
    await loadproducts();
    reset();
  };


 
  return (
    
      
    // </div>
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Add a New Product to Your Bucket List:</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name')}
            placeholder="Name of product"
            className="w-full p-2 border rounded text-black placeholder-black focus:text-red-500 focus:outline-none"
          />
        </div>
        <div>
          <input
            {...register('price')}
            placeholder="Price of product"
            className="w-full p-2 border rounded text-black placeholder-black focus:text-red-500 focus:outline-none"
          />
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}