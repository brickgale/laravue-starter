import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { toast } from 'vue-sonner'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleError (msg: string, error: any) {
    toast.error(msg)
    console.error('An error occurred:', error)
}
