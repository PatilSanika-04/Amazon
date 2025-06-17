'use server';

import  prisma  from "@/lib/prisma";

export async function createUser(formData) {
  const name = formData.get('name');
  const price = formData.get('price');

  if (!name || !price) return;

  await prisma.product.create({
    data: { 
     name,price
     },
  });
}

export async function getproduct() {
  const users = await prisma.product.findMany({
    orderBy: { id: 'desc' },
  });
  return users;
}