
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-16 bg-secondary dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 section-heading">Get in Touch</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to discuss how we can work together? Reach out and let's start a conversation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold mb-6 section-heading">Send a Message</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:text-white"
                    placeholder="Tell us about your project or inquiry"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-card rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-semibold mb-6 section-heading">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-gray-200">Email</h3>
                      <p className="text-gray-600">contact@parmarsons.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-gray-200">Phone</h3>
                      <p className="text-gray-600">+1 (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium dark:text-gray-200">Location</h3>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-4 section-heading">Business Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600 business-hours-text">Monday - Friday</span>
                    <span className="font-medium dark:text-gray-200">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 business-hours-text">Saturday</span>
                    <span className="font-medium dark:text-gray-200">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 business-hours-text">Sunday</span>
                    <span className="font-medium dark:text-gray-200">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
