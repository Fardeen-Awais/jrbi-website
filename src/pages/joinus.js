'use client'
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { headTextAnimation } from "@/utils/motion";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
} from "antd";
import generatePDF from "@/components/PDFdocument";



function Joinus() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("formSubmitted");
    if (storedData) {
      const { submitted, timestamp } = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      const twentyFourHours = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

      if (submitted && currentTime - timestamp < twentyFourHours) {
        setSubmitted(true);
      } else {
        localStorage.removeItem("formSubmitted");
      }
    }
  }, []);

  const onFinish = async (values) => {
    generatePDF(values);

    try {

      setSubmitted(true);
      const response = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        console.log("ok response 200");
        setSubmitted(true);
        localStorage.setItem(
          "formSubmitted",
          JSON.stringify({
            submitted: true,
            timestamp: new Date().getTime(),
          })
        );
      } else {
        console.error("Something wrong");
      }
    } catch (error) {
      console.error(error);
      // Handle the error
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex flex-col min-h-screen my-5 relative  ">
      <div className="h-96 flex justify-center items-center bg-pink-200 dark:text-black">
        <motion.h1
          initial={headTextAnimation.initial}
          animate={headTextAnimation.animate}
          transition={headTextAnimation.transition}
          className="font-poppins text-4xl font-semibold"
        >
          Who can Join us
        </motion.h1>
      </div>
      <div className="flex flex-col justify-between items-center mx-auto max-w-xl h-full p-10">
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          omnis inventore nam eos? Omnis quia quos sit delectus ex laudantium,
          reprehenderit nostrum eveniet quasi sapiente aspernatur vel aperiam
          esse atque praesentium non, possimus eaque quidem soluta voluptates
          veritatis doloremque consectetur? Quibusdam, id inventore! Architecto
          praesentium officia laborum neque magnam ipsam.
        </span>
        <br />
        <br />
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
          facilis quisquam repudiandae similique aspernatur quasi, dicta
          possimus distinctio asperiores laudantium nisi libero illum
          consectetur itaque delectus dolore aperiam eaque deserunt.
        </span>
      </div>
      <div className="dark:text-black bg-pink-200 h-full p-10 ">
        
  {submitted ? ( <div className="bg-pink-50 w-96 h-20 flex justify-center items-center mx-auto p-5 max-w-xs text-sm">Thanks for joining us on our study. We will contact you in 48 hours via email </div> ):(
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          className="max-w-lg mx-auto px-6"
          layout="horizontal"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Name"
            name="name"
            
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="rounded-md" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input className="rounded-md" />
          </Form.Item>
          <Form.Item name={'Service'} label="Select" className="rounded-md px-1">
            <Select>
              <Select.Option value="alcohol consumption">
                alcohol consumption
              </Select.Option>
              <Select.Option value="smoking & vaping behavior">
                smoking & vaping behavior
              </Select.Option>
              <Select.Option value="illicit drug use">
                illicit drug use
              </Select.Option>
              <Select.Option value="risky sexual behavior">
                risky sexual behavior
              </Select.Option>
              <Select.Option value="gambling">gambling</Select.Option>
              <Select.Option value="unhealthy dietary behavior">
                unhealthy dietary behavior
              </Select.Option>
            </Select>
            
          </Form.Item>{" "}
          <Form.Item>
            <Radio.Group className="px-8">
              <Radio value="genY">Gen Y</Radio>
              <Radio value="genZ">Gen Z</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item className="px-8">
            <Checkbox.Group>
              <Checkbox value="yes">Are you 18+</Checkbox>
            </Checkbox.Group>
            <Checkbox.Group>
              <Checkbox value="true">English Speaker</Checkbox>
            </Checkbox.Group>
            </Form.Item>

          <Form.Item className="flex justify-center items-centr  w-full">
            <Button  className="flex justify-center items-center  px-44 bg-slate-700 w-full" type="primary" htmlType="submit">
              Submit
            </Button>
          <p className="flex justify-center items-center text-[12px] p-4 w-full">By clicking you agree with Terms & condition</p>
          </Form.Item>
        </Form>
        )}
      </div>
    </div>
  );
}

export default Joinus;
