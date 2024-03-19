'use client'

import TaskForm from '@/components/shared/TaskForm'
import TaskItem from '@/components/shared/TaskItem'
import { Task } from '@/components/shared/Tasks'
import { useGlobalState } from '@/context/globalProvider'

const CompletedTasksPage = () => {
  const { completedTasks } = useGlobalState()

  return (
    <div>
      <div className="flex flex-col gap-8 px-6">
        <h1 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl mt-6">
          Completed Tasks
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-6">
          {completedTasks.length > 0
            ? completedTasks.map((task: Task) => {
                return <TaskItem key={task.id} task={task} />
              })
            : 'Loading....'}
          <TaskForm type="Create" title="Add New Task!" />
        </div>
      </div>
    </div>
  )
}
export default CompletedTasksPage
