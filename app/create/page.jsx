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
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Add a New Product in your Bucket list: </h1>
      

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register('name')} placeholder="Name of product" className="w-full p-2 border rounded" />
        <input {...register('price')} placeholder="price of product" className="w-full p-2 border rounded" />
        <button type="submit" className="bg-black-500 text-black px-4 py-2 rounded">Submit</button>
      </form>

      
    </div>
  );
}