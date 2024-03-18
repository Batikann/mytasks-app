import prisma from '@/utils/connect'
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized', status: 401 })
    }
    const { title, description, date, isCompleted, isImportant } =
      await req.json()
    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted,
        isImportant,
        userId,
      },
    })
    console.log(task)
    return NextResponse.json({
      task,
    })
  } catch (error) {
    console.log('Error Creating Task: ', error)
    return NextResponse.json({ error: 'error Creating Task', status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized', status: 401 })
    }
    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    })
    console.log(tasks)
    return NextResponse.json(tasks)
  } catch (error) {
    console.log('Error GETTING Tasks: ', error)
    return NextResponse.json({ error: 'error Update Task', status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const { userId } = auth()
    const { isCompleted, id } = await req.json()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized', status: 401 })
    }
    const task = await prisma.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
      },
    })

    return NextResponse.json(task)
  } catch (error) {
    console.log('Error UPDATING Task: ', error)
    return NextResponse.json({ error: 'error Update Task', status: 500 })
  }
}
