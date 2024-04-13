// pages/index.tsx
'use client';
import React, { useEffect, useState } from 'react';
import DropdownComponent from './dropdown';
import CustomPieChart from './piechart';
import { Card, CardBody } from '@nextui-org/react';
import UserTable from './usertable';

const Dashboard: React.FC = () => {
  const onDuty = 50;
  const onLeave = 50;
  const applications = 50;
  const totalApplications = 50;

  const [rows, setRows] = useState([]);

  async function fetchProducts() {
    let response: any = await fetch('https://dummyjson.com/products');
    response = await response.json();
    const products = response.products.map((product: any) => {
      // console.log(product);
      const newProduct = {
        key: product.id,
        name: product.brand,
        department: product.category,
        status: product.price,
      };
      return newProduct;
    });
    setRows(products);
    // console.log(response);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full h-screen grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2">
      <div className="col-span-3 ">
        <Card className=" shadow-small">
          <CardBody>
            <p className=" text-center">Staff on Duty</p>
            <p className=" text-center">{onDuty}</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-3 ">
        <Card className="shadow-small">
          <CardBody>
            <p className="text-center">Staff on Leave</p>
            <p className="text-center">{onLeave}</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-3 ">
        <Card className=" shadow-small">
          <CardBody>
            <p className=" text-center ">Applications</p>
            <p className=" text-center">{applications}</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-3 ">
        <Card className="shadow-small">
          <CardBody>
            <p className=" text-center">Total Applications</p>
            <p className=" text-center">{totalApplications}</p>
          </CardBody>
        </Card>
      </div>
      {/* Second row */}
      <div className="col-span-8 ">
        <Card className="shadow-small">
          <CardBody>
            <div className="flex-col">
              <div className="flex justify-end">
                <DropdownComponent />
              </div>
              <div>
                <CustomPieChart value1={125} value2={5} />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-4">
        <Card className="shadow-small h-full">
          <CardBody>
            <p className="text-center mb-2">NOTICES</p>
            <ul className="list-disc">
              <li>CoffeeAliquam tincidunt mauris eu risus.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
              <li>Aliquam tincidunt mauris eu risus.</li>
            </ul>
          </CardBody>
        </Card>
      </div>

      {/* Third row */}
      <div className="col-span-full ">
        <UserTable rows={rows} />
      </div>
    </div>
  );
};

export default Dashboard;
