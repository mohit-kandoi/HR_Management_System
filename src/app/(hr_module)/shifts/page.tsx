'use client';
import React from 'react';
import App from './Table/App';
import { NextUIProvider } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const Shifts = () => {
  const router = useRouter();
  function addShift() {
    router.push('shifts/addshift');
  }
  return (
    <NextUIProvider>
      <div>
        <h1 className="text-center font-semibold">SHIFTS</h1>
        <div className="flex justify-end mb-2">
          <Button size="md" className="bg-gray-200" onClick={addShift}>
            Add Shift
          </Button>
        </div>
        <App />
      </div>
    </NextUIProvider>
  );
};

export default Shifts;
