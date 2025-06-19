import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log('isInView:', isInView);

  const skills = [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'Node.js', level: 90, color: '#339933' },
    { name: 'JavaScript', level: 95, color: '#F7DF1E' },
    { name: 'MongoDB', level: 85, color: '#47A248' },
    { name: 'PostgreSQL', level: 80, color: '#336791' },
    { name: 'AWS', level: 75, color: '#FF9900' },
  ];

  const technologies = [
    'Nest.js', 'Next.js', 'HTML/CSS', 'C++', 'SQL', 'Docker', 
    'Kubernetes', 'Git', 'Oracle', 'Express.js', 'REST APIs', 'CI/CD'
  ];

  return (
    <section id="skills" className="relative">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-16">Skills & Technologies</h2>

          <div className="grid grid-2 gap-12">
            {/* Progress Bars */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-text-primary">{skill.name}</span>
                      <span className="text-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-3 min-h-[12px] border border-gray-400 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color, minHeight: '12px' }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technology Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8">Technologies & Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    className="glass-light p-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                    }}
                  >
                    <span className="text-text-primary font-medium">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 