import { PrismaClient } from '@prisma/client/edge';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const advisors = await prisma.super_admins.findMany();
  return NextResponse.json(advisors);
}

export async function POST(request: Request) {
  const body = await request.json();
  const advisor = await prisma.super_admins.create({
    data: {
        first_name: body.first_name,
        family_name: body.family_name,
        email: body.email,
        password_hash: body.password_hash,
        phone_number: body.phone_number,
        created_at: body.created_at,
        updated_at: body.updated_at,
        two_factor_auth: body.two_factor_auth,
    },
  });

  return NextResponse.json(advisor);
}
