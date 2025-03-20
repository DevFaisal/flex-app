import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { api } from "../../../utils/api";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import { motion } from "motion/react";

const Form = () => {
  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    const ContactObject = {
      properties: {
        email: data.email || "",
        firstname: data.fullname?.split(" ")[0] || "",
        lastname: data.fullname?.split(" ").slice(1).join(" ") || "",
        traffic_source: getSource() || "",
        channel: (await getChannel()) || "",
      },
    };
    try {
      const res = await api.post("create-contact", {
        ContactObject,
        Auth: accessToken,
      });
      setSubmitStatus({ type: "success", message: "Joined successfully!" });
      reset();
    } catch (error) {
      console.error("Error Occurred:", error.response?.data || error.message);
      setSubmitStatus({
        type: "error",
        message: error.response?.data?.message || "An error occurred while creating the contact",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {submitStatus?.type == "success" ? (
        <Success />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-6 bg-white p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
              Join the Waitlist & Get a Free Card Today!
            </h2>

            <div className="flex flex-col gap-4 mt-2">
              <div>
                <Controller
                  name="fullname"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => <Input label="Name" placeholder="Your Name" {...field} />}
                />
                {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
              </div>

              <div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => <Input label="Email" type="email" placeholder="you@example.com" {...field} />}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-2">
              FlexCard is preparing to enter the FCA Sandbox for regulatory approval. All sign-ups are for early access
              and product testing purposes. Credit issuance is subject to FCA approval and final licensing.
            </p>

            <div className="self-center mt-4">
              <Button
                htmlType="submit"
                type="secondary"
                isLoading={isSubmitting}
                disabled={isSubmitting}
                label="Join the waitlist"
                className="w-full md:w-auto px-8"
              />
            </div>
          </div>
          {submitStatus && (
            <div
              className={`mt-4 p-3 rounded ${
                submitStatus.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function getSource() {
  let source = localStorage.getItem("traffic_source");
  return capitalize(source);
}

async function getChannel() {
  let channel = localStorage.getItem("channel");

  if (!channel) return "";
  const channels = {
    "facebook.com": "Facebook",
    "twitter.com": "Twitter",
    "t.co": "Twitter",
    "instagram.com": "Instagram",
    "linkedin.com": "LinkedIn",
    "pinterest.com": "Pinterest",
    "reddit.com": "Reddit",
    "tiktok.com": "TikTok",
    "snapchat.com": "Snapchat",
    "youtube.com": "YouTube",
    "whatsapp.com": "WhatsApp",
    "t.me": "Telegram",
    "discord.com": "Discord",
    "quora.com": "Quora",
  };

  const normalizedChannel = channel.toLowerCase();

  for (const domain in channels) {
    if (normalizedChannel.includes(domain.toLowerCase())) {
      return channels[domain];
    }
  }
}
import { MdOutlineDone } from "react-icons/md";

function Success() {
  return (
    <motion.div
      animate={{
        x: -6,
        duration: 1.3,
      }}
      className="flex flex-col items-center gap-3 py-5 px-4 text-center"
    >
      <span className="flex justify-center items-center bg-green-300 p-4 rounded-full">
        <MdOutlineDone size={90} className="text-white" />
      </span>
      <h1 className="text-2xl font-bold">You're on the list!</h1>
      <h3 className="text-xl">You've successfully joined the FlexCard waitlist! </h3>
      <p className="text-sm font-light">Your estimated savings with FlexCard</p>
      <h4 className="text-5xl font-extrabold text-sky-700">${Math.floor(Math.random() * 6666)}</h4>
    </motion.div>
  );
}
