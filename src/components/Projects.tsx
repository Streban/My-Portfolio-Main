import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [hoveredGithub, setHoveredGithub] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Health Care Management App',
      description: 'A comprehensive healthcare platform enabling patients to book appointments, access medical records, and communicate securely with doctors. Features role-based authentication, secure data storage, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Nest.js', 'Real-time Notifications'],
      liveUrl: 'https://play.google.com/store/apps/details?id=com.devcodingcops.novavitacare&hl=en',
      githubUrl: '#',
    },
    {
      id: 0,
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations, dark/light theme toggle, and optimized performance. Showcases my projects, skills, and professional experience with an elegant design and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://portfolio-mateen-qazis-projects.vercel.app/',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Personalized Fitness App',
      description: 'AI-powered fitness application that generates personalized workout plans based on user preferences, health data, and available equipment. Integrated React Native for mobile support and MongoDB for scalable storage.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      technologies: ['React Native', 'Nest.js', 'MongoDB', 'AI/ML', 'Mobile App'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Employee Training System (ETS)',
      description: 'Led development of a comprehensive training system for 5 diverse clients, optimizing API response times by 30% and reducing page load times by 25% through advanced caching and lazy loading techniques.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop',
      technologies: ['React.js', 'Node.js', 'PostgreSQL', 'CI/CD', 'Performance Optimization'],
      liveUrl: 'https://ets.gosaas.io/',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'AR-Based Navigation App',
      description: 'Final Year Project - An Augmented Reality navigation app for GIKI campus using Unity ARCore. Overlays real-time AR markers on hand-drawn campus maps, providing interactive guidance for new students and parents.',
      image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=500&h=300&fit=crop',
      technologies: ['Unity', 'ARCore', 'C#', 'Augmented Reality', 'Mobile Development'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center mb-16">Featured Projects</h2>

          <div className="grid grid-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="card group overflow-visible"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-surface-light text-text-secondary text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </motion.a>
                    <div className="relative">
                      <motion.a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors duration-300 cursor-pointer"
                        whileHover={{ x: 5 }}
                        onMouseEnter={() => setHoveredGithub(project.id)}
                        onMouseLeave={() => setHoveredGithub(null)}
                        onClick={(e) => e.preventDefault()}
                      >
                        <Github size={18} />
                        Source Code
                      </motion.a>
                      
                      {/* Tooltip */}
                      {hoveredGithub === project.id && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 20, scale: 0.9 }}
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50"
                          style={{ zIndex: 9999 }}
                        >
                          <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                            Sorry, private repo
                            {/* Tooltip arrow */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                              <div className="border-4 border-transparent border-t-gray-900"></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
             
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="#"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 