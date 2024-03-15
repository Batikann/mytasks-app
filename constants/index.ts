import { Check, ClipboardList, Home, ListTodo } from 'lucide-react'

export const headerLinks = [
  {
    label: 'All Tasks',
    route: '/',
    icon: Home,
  },
  {
    label: 'Important!',
    route: '/tasks/important',
    icon: ListTodo,
  },
  {
    label: 'Completed!',
    route: '/tasks/completed',
    icon: Check,
  },
  {
    label: 'Do it Now',
    route: '/tasks/do-it-now',
    icon: ClipboardList,
  },
]
