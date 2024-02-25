import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { all } from 'express/lib/application'

const prisma = new PrismaClient()

export async function GET(request, { params }) {
    const id = parseInt(params.id)
    try {
        const allUsers = await prisma.user.findUnique({
            where: {
              id: id,
            },
          })
          return NextResponse.json(allUsers)
      } catch (error) {
        console.log('Error guery user:',error)
        return NextResponse.error('internal Server Error',500)
      }
}

export async function PUT(request, { params }) {
    const data = await request.json()
    console.log(data)
    const { name, email } = data
    const id = parseInt(params.id)
    try {
        const updateUsers = await prisma.user.update({
            where: { id },
            data: {
              name,
              email
            }
          })
          return NextResponse.json(updateUsers)
      } catch (error) {
        console.log('Error updating user:',error)
        return NextResponse.error('internal Server Error',500)
      }
}

export async function DELETE(request, { params }) {
    const data = await request.body
    console.log(data)
    const { name, email } = data
    const id = parseInt(params.id)
    try {
        const deleteUsers = await prisma.user.delete({
            where: { id }
          })
          return NextResponse.json(deleteUsers)
      } catch (error) {
        console.log('Error updating user:',error)
        return NextResponse.error('internal Server Error',500)
      }
}