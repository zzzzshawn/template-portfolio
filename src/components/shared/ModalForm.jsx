import {
  CloseIcon,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "../ui/animated-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "../ui/input";
import emailjs from '@emailjs/browser';
import { useToast } from "../ui/use-toast";
import { useRef } from "react";



const formSchema = z.object({
  user_name: z.string().min(2),
  user_email: z.string().email(),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

const ModalForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const { toast } = useToast()


  const formRef = useRef(null); // Use a form reference

  function onSubmit() {
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLICKEY
      )
      .then(
        () => {
          toast({title: 'Appreciate it!', variant:"destructive"})
          form.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast({title: 'Sigh! Server Error', variant:"destructive"})
          form.reset();
        }
      );
  }

  return (
    <ModalBody className="border-none">
      <ModalContent className="bg-dark-2 flex flex-col h-full">
        <FormProvider {...form}>
          <form
            ref={formRef} // Assign the form reference
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex-grow flex flex-col"
          >
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-grow flex flex-col">
                  <FormControl className="flex-grow flex flex-col">
                    <Textarea
                      {...field}
                      placeholder="Type here..."
                      className="bg-dark-2 flex-grow border-none text-2xl resize-none cursor-none"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-center gap-10 items-center">
              <FormField
                control={form.control}
                name="user_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="w-full">
                      <Input
                        {...field}
                        placeholder="Name"
                        className="bg-dark-2 flex-grow border border-dark-4 text-xl resize-none w-full cursor-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="user_email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="w-full">
                      <Input
                        {...field}
                        placeholder="Email"
                        className="bg-dark-2 w-full flex-grow border border-dark-4 text-xl resize-none cursor-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="bg-dark-2 w-max border border-dark-5 rounded-full text-lg p-7 absolute bottom-4 right-5 cursor-none"
            >
              Send!
            </Button>
          </form>
        </FormProvider>
      </ModalContent>
      <ModalFooter className="gap-4 bg-dark-2">
        <CloseIcon />
      </ModalFooter>
    </ModalBody>
  );
};

export default ModalForm;
