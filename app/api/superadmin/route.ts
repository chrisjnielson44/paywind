// app/api/superadmin.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req: any) {
  try {
    const { name, age } = req.body;

    const newEntry = await prisma.test_table.create({
      data: {
        name,
        age,
      },
    });
    
    return NextResponse.json(newEntry);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to create Super Admin' }, { status:   500 });
  }
}