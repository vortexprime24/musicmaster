'use client'

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PhoneInput } from "@/components/ui/phone-input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useForm } from "react-hook-form"

type TrialForm = {
  phone: string;
  name: string;
  gender: string;
  category: string;
  referral: string;
};

const categories = {
  "Instruments": [
    { "value": "piano", "label": "Piano" },
    { "value": "guitar", "label": "Acoustic Guitar" },
    { "value": "electric_guitar", "label": "Electric Guitar" },
    { "value": "keyboard", "label": "Electronic Keyboard" },
    { "value": "flute", "label": "Flute" },
    { "value": "violin", "label": "Violin" },
    { "value": "ukulele", "label": "Ukulele" },
    { "value": "tabla", "label": "Tabla" },
    { "value": "harmonium", "label": "Harmonium" }
  ],
  "Singing": [
    { "value": "western_vocals", "label": "Western Vocals" },
    { "value": "indian_vocals", "label": "Hindustani Classical Vocals (North India)" },
    { "value": "carnatic_vocals", "label": "Carnatic Classical Vocals (South India)" },
    { "value": "film_music", "label": "Bollywood & Light Vocals (North India)" },
    { "value": "malayalam_film_music", "label": "Malayalam Film Music" },
    { "value": "tamil_film_music", "label": "Tamil Film Music" },
    { "value": "telugu_film_music", "label": "Telugu Film Music" },
    { "value": "kannada_film_music", "label": "Kannada Film Music" }
  ],
  "Dancing": [
    { "value": "bharatanatyam_dance", "label": "Bharatanatyam Dance" },
    { "value": "bollywood_dance", "label": "Bollywood Dance" },
    { "value": "kathak_dance", "label": "Kathak Dance" }
  ]
}

export default function CalToAction() {
  const form = useForm<TrialForm>({
    defaultValues: {
      phone: "",
      name: "",
      gender: "",
      category: "",
      referral: ""
    },
  })

  function onSubmit(values: TrialForm) {
    console.log(values);
  }

  return (
    <div className="container mx-auto px-4 my-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
        Book your demo now!
      </h2>
      <div className="grid place-items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-2xl w-full">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <FormLabel>Phone Number</FormLabel>
                      </TooltipTrigger>
                      <TooltipContent>
                        <FormDescription className="text-white">Student&apos;s guardian&apos;s mobile or phone number where we will contact you to tell about the trial class</FormDescription>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <FormControl>
                    <PhoneInput
                      defaultCountry={"IN"}
                      placeholder="6534567890"
                      {...field}
                      minLength={11}
                      maxLength={13}
                      limitMaxLength={true}
                      required
                      title="Please enter a valid 10-digit phone number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <FormLabel>Student Name</FormLabel>
                      </TooltipTrigger>
                      <TooltipContent>
                        <FormDescription className="text-white">The student who will attend the trial class</FormDescription>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <FormControl>
                    <Input required placeholder="Enter the full name of student" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => {
                return (
                  <FormItem>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <FormLabel>Gender</FormLabel>
                        </TooltipTrigger>
                        <TooltipContent>
                          <FormDescription className="text-white">The student&apos;s gender</FormDescription>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <FormControl>
                      <Select onValueChange={field.onChange} value={field.value} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )
              }}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <FormLabel>
                          Choose your category <span className="text-red-500">*</span>
                        </FormLabel>
                      </TooltipTrigger>
                      <TooltipContent>
                        <FormDescription className="text-white">This is a required field. Choose the category of class you want.</FormDescription>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(categories).map(([group, items]) => (
                          <SelectGroup key={group}>
                            <SelectLabel>{group}</SelectLabel>
                            {items.map(item => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="referral"
              render={({ field }) => (
                <FormItem>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <FormLabel>Referral Code (Optional)</FormLabel>
                      </TooltipTrigger>
                      <TooltipContent>
                        <FormDescription className="text-white">If you have a referral code, please enter it here.</FormDescription>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <FormControl>
                    <Input placeholder="Enter referral code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full text-lg p-6">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
