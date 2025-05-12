
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "UraniuSpace",
      description: "My very own website honestly just a way to me to learn some webdes",
      tech: [ "Node.js", "JavaScript", "CSS","HTML"],
      github: "https://github.com/InvalidSpace/Portfolio-code",
      live: "https://uraniuspace.com",
      stars: 1,
      forks: 0
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-mono text-2xl md:text-3xl text-green-500 mb-4">
            {'> Featured Projects_'}
          </h2>
          <p className="text-gray-400 font-mono">
            Just one still, but it will grow i can assure you that!
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="retro-card p-6 group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-mono text-green-500">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-500 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-400 mb-4 font-mono text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-mono px-2 py-1 border border-green-500/20 text-green-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {project.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  {project.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-button inline-flex items-center"
          >
            <Github className="mr-2 h-4 w-4" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
