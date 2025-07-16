import { motion } from 'framer-motion';
import { useState } from 'react';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillBadges = [
    { name: 'React', level: 95, color: 'primary' },
    { name: 'Node.js', level: 90, color: 'accent' },
    { name: 'TypeScript', level: 88, color: 'secondary' },
    { name: 'MongoDB', level: 85, color: 'primary' },
    { name: 'AWS', level: 80, color: 'accent' },
    { name: 'Docker', level: 75, color: 'secondary' },
  ];

  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'BOG Gold Medal',
      description: 'AR Navigation App',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.988 2.988 0 0 0 17.06 6H16c-1.06 0-2.06.27-3 .74v.26h2l2.54 7.63-1.54 1.54L12 14.53V9c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.53l-4 1.64L2.54 16.63 5 15.26V22h2v-6h2v6h2v-5.53l3-1.22 3 1.22V22h2z"/>
        </svg>
      ),
      title: 'Team Leader',
      description: '150+ Members',
      gradient: 'from-blue-400 to-purple-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Performance Guru',
      description: '40% DB Optimization',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: 'Global Impact',
      description: 'International Workshops',
      gradient: 'from-cyan-400 to-blue-500'
    }
  ];

  const floatingElements = [
    { id: 1, delay: 0, x: 10, y: 20 },
    { id: 2, delay: 0.5, x: 80, y: 10 },
    { id: 3, delay: 1, x: 60, y: 70 },
    { id: 4, delay: 1.5, x: 20, y: 80 },
    { id: 5, delay: 2, x: 90, y: 50 },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-4 h-4 bg-primary rounded-full opacity-20"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: element.delay,
          }}
        />
      ))}

      <div className="container">
        <motion.div
          className="grid grid-2 items-center gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Interactive Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="mb-6"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              About Me
            </motion.h2>

            <motion.p className="mb-8 text-lg">
              Senior Software Engineer from <span className="text-primary font-medium">GIKI</span> who turns 
              <span className="text-secondary font-medium"> coffee into code</span> and 
              <span className="text-accent font-medium"> ideas into reality</span>. 
              Specialized in building scalable MERN applications with a passion for optimization.
            </motion.p>

            {/* Interactive Skill Badges */}
            <div className="mb-8">
              <h3 className="text-xl mb-4 text-primary">Tech Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {skillBadges.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className={`relative px-4 py-2 rounded-full border cursor-pointer transition-all duration-300 ${
                      hoveredSkill === skill.name 
                        ? 'bg-surface-light border-primary' 
                        : 'bg-surface border-surface-light'
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                    
                    {/* Skill level indicator */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: hoveredSkill === skill.name ? `${skill.level}%` : '0%'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Animated Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  3+
                </motion.div>
                <div className="text-text-secondary">Years Building</div>
              </motion.div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl font-bold text-accent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                >
                  10+
                </motion.div>
                <div className="text-text-secondary">Projects Shipped</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`relative text-center p-6 cursor-pointer rounded-xl border border-opacity-20 bg-gradient-to-br ${achievement.gradient} bg-opacity-10 backdrop-blur-sm overflow-hidden`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Glowing border effect */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${achievement.gradient} opacity-0`}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                  style={{ filter: 'blur(2px)' }}
                />

                <motion.div
                  className="relative z-10"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`text-white mb-4 mx-auto w-12 h-12 rounded-full bg-gradient-to-br ${achievement.gradient} flex items-center justify-center`}>
                    {achievement.icon}
                  </div>
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {achievement.description}
                  </p>
                </div>

                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Animated Performance Metrics */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-8 text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Performance Impact
          </h3>
          <div className="grid grid-3 gap-6">
            {[
              { metric: '30%', label: 'Faster APIs', color: 'text-primary', gradient: 'from-cyan-400 to-blue-500', borderColor: 'border-cyan-400' },
              { metric: '25%', label: 'Page Load Time', color: 'text-secondary', gradient: 'from-pink-400 to-purple-500', borderColor: 'border-pink-400' },
              { metric: '40%', label: 'DB Performance', color: 'text-accent', gradient: 'from-purple-400 to-indigo-500', borderColor: 'border-purple-400' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`relative p-6 rounded-xl bg-gradient-to-br from-surface to-surface-light border-2 ${item.borderColor} border-opacity-30 backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* Glowing border effect on hover */}
                <motion.div
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.gradient} opacity-0`}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className={`text-5xl font-bold mb-3 ${item.color}`}
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    textShadow: `0 0 20px ${index === 0 ? '#00d4ff' : index === 1 ? '#ff006e' : '#8338ec'}40`
                  }}
                >
                  {item.metric}
                </motion.div>
                <div className="text-text-secondary font-medium">{item.label}</div>
                
                {/* Sparkle effect */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full opacity-0"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.7,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 