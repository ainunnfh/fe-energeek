"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  category: z.string().min(2, { message: "Category can not be empty" }),
});

const NewTodoForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      category: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="p-10">
      <div className="flex flex-cols justify-between">
        <div className="text-black">To Do List</div>
        <button
          className="bg-[#FFE2E5] text-[#F1416D] p-1 rounded-sm"
          // onClick={handleClick}
        >
          + Tambah To Do
        </button>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex flex-cols gap-2 justify-between items-center">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Judul To Do</FormLabel>
                  {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
                  <FormControl>
                    <Input
                      className="bg-white py-2 px-80 w-full text-black"
                      placeholder="Contoh: Perbaikan api master"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Kategori</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-[180px] text-black">
                        <SelectValue placeholder="Choose Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="todo">To Do</SelectItem>
                        <SelectItem value="dark">In Progress</SelectItem>
                        <SelectItem value="testing">Testing</SelectItem>
                        <SelectItem value="done">Done</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-8">
              <button
                type="submit"
                className="text-sm bg-[#F1416D]  p-3 rounded-sm "
              >
                <svg
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  height="15"
                  width="15"
                  className="text-white"
                >
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32l21.2 339c1.6 25.3 22.6 45 47.9 45h245.8c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-600 p-2 rounded-sm mt-3 w-full text-white"
          >
            Simpan
          </button>
        </form>
      </Form>
    </div>
  );
};

export default NewTodoForm;
