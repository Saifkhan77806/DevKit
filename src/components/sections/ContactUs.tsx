import { useTransition } from "react";
import { useForm } from "react-hook-form";
import {
  contactSchema,
  type ContactFormValues,
} from "../../schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import Overlay from "../blocks/Overlay";

const ContactUs = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    startTransition(() => {
      console.log("form data", data);
    });
  };

  return (
    <section className="min-h-screen pb-20 poppins">
      <div className="flex flex-col min-[940px]:flex-row px-6 gap-x-10 items-center max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex-1">
          <div className="w-96 h-80 my-7 flex-1 relative">
            <img src="/images/landing/contactus.jpg" alt="" />
            <Overlay />
          </div>
          <div className="my-14 px-6 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-neutral-900 dark:text-white">
              We're Here to Help -
              <br />
              Let's Connect
            </h1>
            <p className="max-lg:mx-auto mt-4 max-w-lg">
              Whether you're exploring APIs for the first time or already part
              of our community, this is the place to get in touch.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-12 mt-16 rounded-xl flex-1"
        >
          <div className="grid gap-6 md:grid-cols-2">
            {/* First Name */}
            <div className="space-y-2">
              <Label>First Name</Label>
              <Input {...form.register("firstName")} />
              {form.formState.errors.firstName && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.firstName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label>Last Name</Label>
              <Input {...form.register("lastName")} />
              {form.formState.errors.lastName && (
                <p className="text-xs text-red-500">
                  {form.formState.errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label>Email</Label>
            <Input type="email" {...form.register("email")} />
            {form.formState.errors.email && (
              <p className="text-xs text-red-500">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label>Message</Label>
            <Textarea rows={5} {...form.register("message")} />
            {form.formState.errors.message && (
              <p className="text-xs text-red-500">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isPending}
            size={"lg"}
            className="bg-gradient cursor-pointer w-fit"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
