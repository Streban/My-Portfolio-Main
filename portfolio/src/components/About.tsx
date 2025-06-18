import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="container">
        <motion.div
          className="grid grid-2 items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">About Me</h2>
            <p className="mb-6">
              I'm a Senior Software Engineer with over 3 years of experience specializing in MERN stack development. 
              I graduated from Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI) with a 
              Bachelor's degree in Computer Engineering.
            </p>
            <p className="mb-6">
              My expertise lies in building scalable applications and optimizing system performance. I've successfully 
              reduced API response times by 30%, improved page load times by 25%, and enhanced database performance 
              by 40% across various projects. I'm passionate about creating efficient, user-centric solutions that 
              make a real impact.
            </p>
            <p>
              Beyond coding, I've led teams of 150+ members as Vice President of Project Topi, organized international 
              workshops, and received the BOG Gold medal for my Final Year Project - an Augmented Reality Based 
              Navigation App.
            </p>
          </motion.div>

          {/* Stats/Info Cards */}
          <motion.div
            className="grid grid-3 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="card text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-text-secondary">Years Experience</div>
            </motion.div>

            <motion.div
              className="card text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-secondary mb-2">10+</div>
              <div className="text-text-secondary">Projects Completed</div>
            </motion.div>

            <motion.div
              className="card text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl font-bold text-accent mb-2">15+</div>
              <div className="text-text-secondary">Technologies</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 