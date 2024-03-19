import prisma from '@/utils/connect'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth()
    const { id } = params
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized', status: 401 })
    }

    const task = await prisma.task.findMany({
      where: {
        id,
      },
    })

    return NextResponse.json(task)
  } catch (error) {
    console.log('ERROR DELETING TASK: ', error)
    return NextResponse.json({ error: error, status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth()
    const { id } = params
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized', status: 401 })
    }

    const task = await prisma.task.delete({
      where: {
        id,
      },
    })

    return NextResponse.json(task)
  } catch (error) {
    console.log('ERROR DELETING TASK: ', error)
    return NextResponse.json({ error: error, status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = auth()
    const { isCompleted, id, isImportant, title, description, date } =
      await req.json()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized', status: 401 })
    }

    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
        isImportant,
        title,
        description,
        date,
      },
    })
    return NextResponse.json(task)
  } catch (error) {
    console.log('ERROR DELETING TASK: ', error)
    return NextResponse.json({ error: error, status: 500 })
  }
}
