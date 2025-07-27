// src/pages/Contact.jsx
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-white dark:bg-green-950 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 dark:text-green-100 mb-10">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-green-100 dark:bg-green-900 p-6 rounded-md shadow">
            <Mail className="h-8 w-8 mx-auto text-green-800 mb-2" />
            <p className="text-green-800 dark:text-green-100">
              support@fintrack.com
            </p>
          </div>
          <div className="bg-green-100 dark:bg-green-900 p-6 rounded-md shadow">
            <Phone className="h-8 w-8 mx-auto text-green-800 mb-2" />
            <p className="text-green-800 dark:text-green-100">
              +91 98765 43210
            </p>
          </div>
          <div className="bg-green-100 dark:bg-green-900 p-6 rounded-md shadow">
            <MapPin className="h-8 w-8 mx-auto text-green-800 mb-2" />
            <p className="text-green-800 dark:text-green-100">
              Bhubaneswar, Odisha
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
