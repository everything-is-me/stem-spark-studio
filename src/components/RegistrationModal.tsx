import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRegistration } from "@/context/RegistrationContext";
import { toast } from "sonner";
import { CheckCircle2, Sparkles, Rocket } from "lucide-react";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  school: z.string().min(2, "School name is required"),
  grade: z.string().min(1, "Please select your grade"),
  track: z.enum(["arise", "ignite", "general"]),
  interest: z.string().optional(),
});

const RegistrationModal = () => {
  const { isOpen, closeModal, selectedTrack } = useRegistration();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      school: "",
      grade: "",
      track: "general",
      interest: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      form.reset({
        fullName: "",
        email: "",
        school: "",
        grade: "",
        track: selectedTrack,
        interest: "",
      });
      setIsSubmitted(false);
    }
  }, [isOpen, selectedTrack, form]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form Submitted:", values);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success("Registration Successful!", {
        description: "We've received your application and will contact you soon.",
      });
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[500px] bg-slate-950 text-white border-slate-800 shadow-2xl backdrop-blur-xl">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                {selectedTrack === "arise" ? (
                  <Rocket className="text-blue-400 w-6 h-6" />
                ) : (
                  <Sparkles className="text-emerald-400 w-6 h-6" />
                )}
                Register for Competition
              </DialogTitle>
              <DialogDescription className="text-slate-400">
                Join the largest STEM movement in India. Fill out the details below to start your journey.
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" className="bg-slate-900 border-slate-700" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="grade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Grade</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-900 border-slate-700">
                              <SelectValue placeholder="Select Grade" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-900 border-slate-800 text-white">
                            {[6, 7, 8, 9, 10, 11, 12].map((g) => (
                              <SelectItem key={g} value={g.toString()}>Grade {g}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="track"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Track</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-slate-900 border-slate-700">
                              <SelectValue placeholder="Select Track" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-900 border-slate-800 text-white">
                            <SelectItem value="general">General</SelectItem>
                            <SelectItem value="arise">ARISE (9-12)</SelectItem>
                            <SelectItem value="ignite">IGNITE (6-8)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="school"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">School Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your school name" className="bg-slate-900 border-slate-700" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="your@email.com" type="email" className="bg-slate-900 border-slate-700" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Brief Project Idea (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us what you want to build..." 
                          className="bg-slate-900 border-slate-700 resize-none h-20" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-500 hover:to-emerald-500 font-bold py-6 text-lg rounded-xl mt-4"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Processing..." : "Complete Registration"}
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center animate-bounce">
              <CheckCircle2 className="text-emerald-500 w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Awesome!</h2>
              <p className="text-slate-400">
                You've successfully registered for the competition. Check your email for next steps and project guidelines.
              </p>
            </div>
            <Button 
              onClick={closeModal}
              className="bg-white text-black hover:bg-slate-200 rounded-full px-8"
            >
              Close Window
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
