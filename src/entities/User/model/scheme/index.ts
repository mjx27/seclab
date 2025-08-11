import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['admin', 'user']),
  age: z.number().min(18, 'Must be at least 18 years old'),
});

export type UserFormData = z.infer<typeof userSchema>;
