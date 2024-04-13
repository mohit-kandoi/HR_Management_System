// components/FormComponent.tsx
'use client';
import { useForm } from 'react-hook-form';
import { Button, Input } from '@nextui-org/react';

interface FormData {
  startTime: string;
  endTime: string;
}

export default function InputShift() {
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
          type="text"
          {...register('startTime')}
          label="Start Time"
        />
        <Input
          variant="bordered"
          type="text"
          {...register('endTime')}
          label="End Time"
        />
        <Button className="bg-black text-white" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
