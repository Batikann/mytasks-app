'use client'

import { useEffect, useState } from 'react'
import AddTask from './AddTask'
import TaskItem, { TaskItemProps } from './TaskItem'
import axios from 'axios'
import { toast } from '../ui/use-toast'

interface TaskItems {
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

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskItems[]>([])
  const getAllTasks = async () => {
    try {
      const res = await axios.get('/api/tasks')
      setTasks(res.data)
    } catch (error) {
      console.log(error)
      toast({
        description: 'Something went wrong!',
      })
    }
  }

  useEffect(() => {
    getAllTasks()
  }, [setTasks])
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl">All Tasks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-6">
        {tasks.length > 0
          ? tasks.map((task) => {
              return <TaskItem key={task.id} task={task} />
            })
          : 'Loading....'}
        <AddTask />
      </div>
    </div>
  )
}
export default Tasks
