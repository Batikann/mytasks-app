'use client'

import { CalendarIcon, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { taskFormSchema } from '@/lib/validator'
import { taskDefaultValues } from '@/constants'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import axios from 'axios'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '../ui/calendar'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { Checkbox } from '../ui/checkbox'
import { toast } from '../ui/use-toast'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
const AddTask = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof taskFormSchema>>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: taskDefaultValues,
  })

  async function onSubmit(values: z.infer<typeof taskFormSchema>) {
    try {
      const res = await axios.post('/api/tasks', values)
      if (res.data.error) {
        toast({
          description: `${res.data.error}`,
        })
      }
      toast({
        description: 'Task created successfully.',
      })
      form.reset()
      router.refresh()
      setOpen(false)
    } catch (error) {
      toast({
        description: 'Something went wrong.',
      })
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className="border border-dashed rounded-lg border-gray-500 flex items-center justify-center w-full h-full "
      >
        <Button variant="ghost">
          <div className=" flex items-center justify-center">
            <div className="flex items-center gap-x-2">
              <Plus />
              <p>Add New Task!</p>
            </div>
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>ADD Task</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Task Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Task Title"
                      {...field}
                      className="bg-zinc-50 h-[44px] focus:border-none placeholder:text-gray-500  p-regular-16 px-4 py-3 text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Task Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Task Description"
                      {...field}
                      className="bg-zinc-50 h-[44px] focus:border-none placeholder:text-gray-500  p-regular-16 px-4 py-3 text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date of task</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-[240px] pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground'
                          )}
                        >
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isCompleted"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="isCompleted"
                        className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Toggle Completed
                      </label>
                      <Checkbox
                        id="isCompleted"
                        className="mr-2 h-5 w-5 border-2 border-indigo-500"
                        onCheckedChange={field.onChange}
                        checked={field.value}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isImportant"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="isImportant"
                        className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Toggle Important
                      </label>
                      <Checkbox
                        id="isImportant"
                        className="mr-2 h-5 w-5 border-2 border-indigo-500"
                        onCheckedChange={field.onChange}
                        checked={field.value}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              disabled={form.formState.isSubmitting}
              className="button col-span-2 w-full bg-indigo-600 hover:bg-indigo-500 !rounded-md text-white"
            >
              {form.formState.isSubmitting
                ? 'Submitting...'
                : `Creating Task...`}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
export default AddTask
