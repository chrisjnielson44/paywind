import { PrismaClient } from '@prisma/client/edge';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const advisors = await prisma.test_table.findMany();
  return NextResponse.json(advisors);
}

export async function POST(request: Request) {
  const body = await request.json();
  const advisor = await prisma.test_table.create({
    data: {
      name: body.name,
      age: body.age,
      
    },
  });

  return NextResponse.json(advisor);
}

export async function PUT(request: Request) {
  const body = await request.json();
  const advisor = await prisma.test_table.update({
    where: { id: body.id },
    data: {
      name: body.name,
      age: body.age,
    },
  });

  return NextResponse.json(advisor);
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const advisor = await prisma.test_table.delete({
    where: { id: body.id },
  });

  return NextResponse.json(advisor);
}