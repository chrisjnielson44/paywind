import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import {sql} from '@vercel/postgres'

export async function POST(request: Request) {
    try {
        const {email, password, first_name, family_name} = await request.json();
        //Validate Email and password
        console.log({email, password});
        const hashedPassword = await hash(password, 10);

        const response = await sql`
        INSERT INTO users (email, password, first_name, family_name)
        VALUES (${email}, ${hashedPassword}, ${first_name}, ${family_name})
        `;

    } catch (e) {
        console.log({e});
    }
    

    return NextResponse.json({message: 'success'})
}