import { FilePenLine, Trash } from 'lucide-react'
import { Button } from '../ui/button'

const TaskItem = () => {
  return (
    <div className="border rounded-lg  w-full p-4 flex flex-col gap-4  border-gray-700">
      <h2 className="uppercase font-bold text-xl">Spora Git</h2>
      <p>Bugün antremanın var çekiş günü çantanı hazırla ve git unutma!</p>
      <dt className="font-medium">15.03.2024</dt>
      <div className="flex items-center justify-between">
        <span className="bg-green-600 p-1 px-2 text-sm font-semibold rounded-md">
          Completed
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
