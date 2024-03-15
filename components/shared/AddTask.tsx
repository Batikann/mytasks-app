import { Plus } from 'lucide-react'

const AddTask = () => {
  return (
    <div className="border border-dashed rounded-lg border-gray-500 flex items-center justify-center">
      <div className="flex items-center gap-x-2">
        <Plus />
        <p>Add New Task!</p>
      </div>
    </div>
  )
}
export default AddTask
