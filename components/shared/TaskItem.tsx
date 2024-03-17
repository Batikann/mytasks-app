import { FilePenLine, Trash } from 'lucide-react'
import { Button } from '../ui/button'
import formatDate from '@/utils/formatDate'

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

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className="border rounded-lg  w-full p-4 flex flex-col gap-2  border-gray-700 justify-between">
      <h2 className="uppercase font-bold text-xl">{task.title}</h2>
      <p>{task.description}</p>
      <dt className="font-medium">{formatDate(task.date)}</dt>
      <div className="flex items-center justify-between">
        <span
          className={` p-1 px-2 text-sm font-semibold rounded-md text-white ${
            task.isCompleted ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {task.isCompleted ? 'Completed' : 'Not Completed'}
        </span>
        <div className="flex items-center ">
          <Button variant={'ghost'}>
            <FilePenLine />
          </Button>
          <Button variant={'ghost'}>
            <Trash />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default TaskItem
