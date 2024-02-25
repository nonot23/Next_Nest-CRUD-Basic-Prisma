import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);   
    const { name, email } = data
    const addUser = await prisma.user.create({
        data: {
            name,
            email
        }
    })   
    return NextResponse.json(addUser) 
  } catch (error) {
    console.log('Error create user:',error)
    return NextResponse.error('internal Server Error',500)
  }
}

export async function GET() {
  try {
    const allUsers = await prisma.user.findMany()
    return NextResponse.json(allUsers)
  } catch (error) {
    console.log('Error create user:',error)
    return NextResponse.error('internal Server Error',500)
  }
}



POST()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })