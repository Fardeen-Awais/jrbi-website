"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  headTextAnimation,
  headContentAnimation,
  headContainerAnimation,
} from "@/utils/motion";
import { Button, Checkbox, Form, Input, Radio, Select } from "antd";
import generatePDF from "@/components/PDFdocument";
import { Disclosure } from '@headlessui/react'

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
      <motion.div className="h-96 flex flex-col gap-3 justify-center items-center bg-pink-200">
        <motion.h1
          initial={headTextAnimation.initial}
          animate={headTextAnimation.animate}
          transition={headTextAnimation.transition}
          className="font-poppins text-4xl font-semibold"
        >
          Who can Join us
        </motion.h1>
        <motion.p
          initial={headContentAnimation.initial}
          animate={headContentAnimation.animate}
          transition={headContentAnimation.transition}
          className="max-w-md  text-center"
        >
          Hello there in join us page. We appreciate you to become the part of
          our research.{" "}
        </motion.p>
      </motion.div>
      <div className="flex flex-col justify-center items-center mx-auto gap-7 max-w-2xl  w-full p-10 prose-p:max-w-sm md:prose-p:max-w-xl">
        <div className="flex flex-col gap-2">
          <h2 className="font-poppins text-3xl font-semibold">Introduction</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            laudantium libero, quod error eum explicabo repellendus accusamus
            placeat doloribus architecto alias praesentium modi, facilis natus
            recusandae impedit, nulla consectetur. Fugit sapiente molestiae
            porro excepturi quidem consequatur cupiditate deleniti maxime
            obcaecati!
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-poppins text-2xl font-semibold">Purpose</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            laudantium libero, quod error eum explicabo repellendus accusamus
            placeat doloribus architecto alias praesentium modi, facilis natus
            recusandae impedit, nulla consectetur. Fugit sapiente molestiae
            porro excepturi quidem consequatur cupiditate deleniti maxime
            obcaecati!
          </p>
        </div>
        <div className="flex flex-col gap-2 benefits">
          <h3 className="font-poppins text-2xl font-semibold">Benefits</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            laudantium libero, quod error eum explicabo repellendus accusamus
            placeat doloribus architecto alias praesentium modi, facilis natus
            recusandae impedit, nulla consectetur. Fugit sapiente molestiae
            porro excepturi quidem consequatur cupiditate deleniti maxime
            obcaecati!
          </p>
        </div>
        <div className="flex flex-col gap-2 eligibility">
        <h3 className="font-poppins text-2xl font-semibold">Eligibility</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            laudantium libero, quod error eum explicabo repellendus accusamus
            placeat doloribus architecto alias praesentium modi, facilis natus
            recusandae impedit, nulla consectetur. Fugit sapiente molestiae
            porro excepturi quidem consequatur cupiditate deleniti maxime
            obcaecati!
          </p>
        </div>
        <div className="FAQ flex flex-col items-center  mx-auto max-w-6xl m-20 p-6  ">
        <h2 className="flex justify-start text-4xl font-serif font-medium">
          Frequently asked Questions
        </h2>
        <div>
        <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-start rounded-lg bg-gray-100 px-5 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy? </span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If youre unhappy with your purchase for any reason, email us
                within 90 days and well refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2 ">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-5 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
               
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2 ">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-5 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>Do you have Whatsapp Support</span>
               
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                Absolutely
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
        </div>
      
      </div>
      </div>

      <div className="dark:text-black bg-pink-200 h-full p-10 ">
        {submitted ? (
          <div className="bg-pink-50 w-96 h-20 flex justify-center items-center mx-auto p-5 max-w-xs text-sm">
            Thanks for joining us on our study. We will contact you in 48 hours
            via email{" "}
          </div>
        ) : (
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
            <Form.Item
              name={"Service"}
              label="Select"
              className="rounded-md px-1"
            >
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
              <Button
                className="flex justify-center items-center  px-44 bg-slate-700 w-full"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
              <p className="flex justify-center items-center text-[12px] p-4 w-full">
                By clicking you agree with Terms & condition
              </p>
            </Form.Item>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Joinus;
