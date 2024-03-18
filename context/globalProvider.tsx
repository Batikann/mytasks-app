'use client'

import { UpdateItemProps } from '@/components/shared/TaskItem'
import { toast } from '@/components/ui/use-toast'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

export interface TaskItems {
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

export interface SortedProps {
  createdAt: Date
}

export const GlobalContext = createContext<any>(null)

export const GlobalProvider = ({ children }: any) => {
  const [tasks, setTasks] = useState<TaskItems[]>([])
  const getAllTasks = async () => {
    try {
      const res = await axios.get('/api/tasks')
      const sorted = res.data.sort((a: SortedProps, b: SortedProps) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      })
      setTasks(sorted)
    } catch (error) {
      console.log(error)
      toast({
        description: 'Something went wrong!',
      })
    }
  }

  const updateTask = async (value: UpdateItemProps) => {
    try {
      const res = await axios.put(`/api/tasks`, value)
      toast({
        description: 'Task Updated',
      })
      getAllTasks()
    } catch (error) {}
  }

  const deleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`)
      toast({
        description: 'Task Deleted ',
      })
      getAllTasks()
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

  const completedTasks = tasks.filter((task) => task.isCompleted === true)
  const importantTasks = tasks.filter((task) => task.isImportant === true)
  const incompleteTasks = tasks.filter((task) => task.isCompleted === false)

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        completedTasks,
        importantTasks,
        incompleteTasks,
        getAllTasks,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalState = () => useContext(GlobalContext)
