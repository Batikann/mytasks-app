'use client'

import { FilePenLine, Ghost, Trash } from 'lucide-react'
import { Button } from '../ui/button'
import formatDate from '@/utils/formatDate'
import { toast } from '../ui/use-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useGlobalState } from '@/context/globalProvider'
import TaskForm from './TaskForm'
import { useState } from 'react'

export interface TaskItemProps {
  task: {
    id: string
    title: string
    description: string
    date: string
    isCompleted: boolean
    isImportant: boolean
    createdAt: Date
    updatedAt: Date
    userId: string
  }
}

export interface UpdateItemProps {
  id: string
  isCompleted: boolean
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { updateTask, deleteTask } = useGlobalState()

  return (
    <div className="border rounded-lg  w-full p-4 flex flex-col gap-5  border-gray-700 justify-between">
      <h2 className="uppercase font-bold text-xl">{task.title}</h2>
      <p>{task.description}</p>
      <dt className="font-medium">{formatDate(task.date)}</dt>
      <div className="flex items-center justify-between">
        <Button
          onClick={() => {
            const val = {
              id: task.id,
              isCompleted: !task.isCompleted,
            }
            updateTask(val)
          }}
          variant={'ghost'}
          className={` p-1 px-2 text-sm font-semibold rounded-md text-white ${
            task.isCompleted
              ? 'bg-green-600 hover:bg-green-500'
              : 'bg-red-600 hover:bg-red-500'
          }`}
        >
          {task.isCompleted ? 'Completed' : 'Not Completed'}
        </Button>
        <div className="flex items-center ">
          {/* <TaskForm type="Update" id={task.id} /> */}
          <Button onClick={() => deleteTask(task.id)} variant={'ghost'}>
            <Trash />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default TaskItem
