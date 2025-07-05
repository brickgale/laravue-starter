import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z.string().max(100),
    password: z.string().min(8).max(30),
    remember: z.boolean().optional(),
});

export type LoginForm = z.infer<typeof loginFormSchema>;