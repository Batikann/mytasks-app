'use client'

import TaskForm from './TaskForm'
import TaskItem, { TaskItemProps } from './TaskItem'
import { useGlobalState } from '@/context/globalProvider'

export interface Task {
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
  const { tasks } = useGlobalState()

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl">All Tasks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-6">
        {tasks.length > 0
          ? tasks.map((task: Task) => {
              return <TaskItem key={task.id} task={task} />
            })
          : 'Loading....'}
        <TaskForm type="Create" title="Add New Task!" />
      </div>
    </div>
  )
}
export default Tasks
