// components/sections/Profile.tsx
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import profile1 from "../../assets/image.png";
import profile2 from "../../assets/image1.jpg";
import profile3 from "../../assets/image2.jpg";

const profiles = [profile1, profile2, profile3];

export default function Profile() {
  return (
    <section id="profile" className="py-24 dark:text-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Who I Am" subtitle="A quick glimpse of me" />

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {profiles.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Profile ${index + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="h-32 w-32 rounded-full object-cover shadow-lg border-4 border-gray-200 dark:border-gray-800"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
