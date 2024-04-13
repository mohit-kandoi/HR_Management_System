// components/FormComponent.tsx
'use client';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';

interface FormData {
  name: string;
  email: string;
  role: string;
  team: string;
  status: string;
  age: number;
}

export default function InputForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-1 flex-col gap-4 sm:w-1/2"
      >
        <h2 className="text-black font-bold">Add Staff</h2>
        <Input
          variant="bordered"
          type="name"
          {...register('name')}
          label="Name"
        />
        <Input
          variant="bordered"
          type="email"
          {...register('email')}
          label="Email"
        />
        <Input
          variant="bordered"
          type="text"
          {...register('role')}
          label="Role"
        />
        <Input
          variant="bordered"
          type="text"
          {...register('team')}
          label="Team"
        />
        <Input
          variant="bordered"
          type="text"
          {...register('status')}
          label="Status"
        />
        <Input
          variant="bordered"
          {...register('age')}
          label="Age"
          type="number"
          min="0"
          max="150"
        />
        <Button className="bg-black text-white" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
