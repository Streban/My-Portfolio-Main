import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import CV from '../assets/MateenQazi_CV.pdf';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Software Engineer (MERN Stack Developer)',
      company: 'CodingCops',
      location: 'Remote',
      period: 'Feb 2025 - Current',
      description: 'Designed and implemented a Health Care Management App and Personalized Fitness App. Led development of AI-powered workout plans, implemented role-based authentication, and optimized application performance. Collaborated with product owners to improve user experience, resulting in 30% increase in user retention.',
      technologies: ['React', 'React Native', 'Nest.js', 'MongoDB', 'AI/ML', 'CI/CD'],
    },
    {
      id: 2,
      title: 'Senior Software Engineer (MERN Stack Developer)',
      company: 'GoSaaS Inc',
      location: 'Remote',
      period: 'July 2022 - Feb 2025',
      description: 'Led development of ETS (Employee Training System) for 5 diverse clients. Decreased API response times by 30%, reduced page load times by 25%, and enhanced database performance by 40%. Boosted development efficiency by 20% through CI/CD pipelines and managed 2000+ concurrent users.',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Git'],
    },
    {
      id: 3,
      title: 'Software Engineer Intern',
      company: 'Wateen Telecom',
      location: 'Lahore, Pakistan',
      period: 'Aug 2021 - Oct 2021',
      description: 'Engineered scalable backend infrastructure with Node.js, reducing server response times by 20% and enabling 1M+ API requests per day. Led server-side logic and API development projects, improving system efficiency by 25% and reducing downtime by 40%.',
      technologies: ['Node.js', 'React.js', 'JavaScript', 'API Development', 'Database Management'],
    },
  ];

  return (
    <section id="experience" className="relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-16">Work Experience</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  className="relative pl-20"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                  {/* Experience Card */}
                  <motion.div
                    className="card"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex-1 flex-grow" style={{ flexGrow: 1 }}>
                          <h3 className="text-xl font-bold text-text-primary">{experience.title}</h3>
                          <div className="flex items-center gap-4 text-text-secondary mt-1">
                            <div className="flex items-center gap-1">
                              <Building size={16} />
                              <span>{experience.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-primary font-medium">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary leading-relaxed">{experience.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-surface-light text-text-secondary text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download CV Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={CV}
              download="MateenQazi_CV.pdf"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Full Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 