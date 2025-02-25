"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { countries, educationLevels } from "@/constants";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { DesiredPrograms } from "../DesiredPrograms";

// Define Zod Schema with phone number validation
const FormSchema = z.object({
	firstName: z
		.string()
		.min(2, { message: "First name must be at least 2 characters." }),
	lastName: z
		.string()
		.min(2, { message: "Last name must be at least 2 characters." }),
	dob: z.date({
		required_error: "A date of birth is required.",
	}),
	education: z.string({
		required_error: "Highest level of education is required.",
	}),
	email: z
		.string({ required_error: "Email is required." })
		.email("Invalid email address."),
	phone: z.string().refine(isValidPhoneNumber, {
		message: "Invalid phone number",
	}),
	country: z.string({
		required_error: "Please select a subject.",
	}),
	confirm: z.boolean().default(false),
});

const ApplicationForm = () => {
	const [value, setValue] = useState<string | undefined>(undefined);

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			education: "",
			confirm: false,
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}

	return (
		<div className="shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] px-6 py-8 lg:col-span-3 rounded-md bg-[#F8F9FA] mt-10 mb-16">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="firstName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>First name</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your first name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastName"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Last name</FormLabel>
									<FormControl>
										<Input
											placeholder="Enter your last name"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email Address</FormLabel>
								<FormControl>
									<Input
										placeholder="Enter your email"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<PhoneInput
											placeholder="Enter phone number"
											value={value}
											onChange={(phone) => {
												setValue(phone);
												field.onChange(phone); // Ensure form gets updated
											}}
											defaultCountry="NG"
											className="flex h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-base sm:text-sm"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="dob"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel className="mb-2.5">
										Date of birth
									</FormLabel>
									<Popover>
										<PopoverTrigger
											asChild
											className="mt-10"
										>
											<FormControl>
												<Button
													variant={"outline"}
													className={cn(
														"w-full h-14 pl-3 text-left font-normal",
														!field.value &&
															"text-muted-foreground"
													)}
												>
													{field.value ? (
														format(
															field.value,
															"PPP"
														)
													) : (
														<span>Pick a date</span>
													)}
													<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent
											className="w-auto p-0"
											align="start"
										>
											<Calendar
												mode="single"
												selected={field.value}
												onSelect={field.onChange}
												disabled={(date: any) =>
													date > new Date() ||
													date <
														new Date("1900-01-01")
												}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="country"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Country of Residence</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a country" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{countries.map((country, index) => (
											<SelectItem
												key={index}
												value={country}
											>
												{country}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<DesiredPrograms />
					<FormField
						control={form.control}
						name="education"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Highest level of Education
								</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select highest level of Education" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{educationLevels.map(
											(education, index) => (
												<SelectItem
													key={index}
													value={education}
												>
													{education}
												</SelectItem>
											)
										)}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* <FormField
						control={form.control}
						name="confirm"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className="flex items-center justify-start gap-4 py-4">
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
										<FormLabel>
											I confirm that the information
											provided is accurate.
										</FormLabel>
									</div>
								</FormControl>
							</FormItem>
						)}
					/> */}
					<FormField
						control={form.control}
						name="confirm"
						render={({ field }) => (
							<FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4">
								<FormControl>
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
								<div className="space-y-1 leading-none">
									<FormLabel>
										I confirm that the information provided
										is accurate.
									</FormLabel>
								</div>
							</FormItem>
						)}
					/>

					<Button
						className="w-full md:w-auto"
						size={"lg"}
						type="submit"
					>
						Submit application
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default ApplicationForm;
