import AddTask from './AddTask'
import TaskItem from './TaskItem'

const Tasks = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-bold 2xl:text-4xl xl:text-3xl text-2xl">All Tasks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-6">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <AddTask />
      </div>
    </div>
  )
}
export default Tasks
