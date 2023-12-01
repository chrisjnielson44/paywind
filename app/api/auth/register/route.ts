import { NextResponse } from "next/server";
import { hash } from 'bcrypt';
import {sql} from '@vercel/postgres'

export async function POST(request: Request) {
    try {
        const { email, password, first_name, family_name, phone, role} = await request.json();

        // Check if email already exists
        const existingUserResult = await sql`
            SELECT 1 FROM users WHERE email = ${email}
        `;

        if (existingUserResult.rowCount > 0) {
            // Email already exists in the database
            return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
        }

        // Hash the password
        const hashedPassword = await hash(password, 10);

        // Insert new user
        await sql`
            INSERT INTO users (email, password, first_name, family_name, phone, role)
            VALUES (${email}, ${hashedPassword}, ${first_name}, ${family_name}, ${phone}, ${role})
        `;

        return NextResponse.json({ message: 'success' });

    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: 'An error occurred', error: e }, { status: 500 });
    }
}