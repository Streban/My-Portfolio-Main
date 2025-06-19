import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mateen-qazi/',
      color: 'hover:text-blue-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/mateenqazi',
      color: 'hover:text-gray-400',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/mateenqazi',
      color: 'hover:text-blue-400',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mateenqazi8@gmail.com',
      url: 'mailto:mateenqazi8@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 308 4806445',
      url: 'tel:+923084806445',
    },
    { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan', url: '#' },
  ];

  return (
    <section id="contact" className="relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-16">Get In Touch</h2>

          <div className="grid grid-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6">Send a Message</h3>
              <form className="space-y-6" action="https://formsubmit.co/mateenqazi8@gmail.com" method="POST">
                <div className="grid grid-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-text-secondary mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-surface-light border border-surface rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-text-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-text-secondary mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-surface-light border border-surface rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-text-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-text-secondary mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-surface-light border border-surface rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-text-primary"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-text-secondary mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-surface-light border border-surface rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 resize-none text-text-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6">Contact Information</h3>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.url}
                    className="flex items-center gap-4 p-4 glass-light rounded-lg hover:bg-surface-light transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <info.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-text-secondary text-sm">
                        {info.label}
                      </div>
                      <div className="text-text-primary font-medium">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-light rounded-lg hover:bg-surface-light transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon
                        size={24}
                        className={`text-text-secondary ${social.color} transition-colors duration-300`}
                      />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
