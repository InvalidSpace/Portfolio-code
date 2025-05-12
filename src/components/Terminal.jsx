
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';

const Terminal = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const commands = {
    help: 'Available commands: help, about, skills, contact',
    about: 'A minimalist development studio focused on creating unique digital experiences.',
    skills: 'Expertise in: React, Node.js, Python, Cloud Architecture, UI/UX Design',
    contact: 'Email: hello@studio.dev | Twitter: @studioDev',
    clear: 'clear',
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === 'clear') {
      setCommandHistory([]);
      return;
    }
    
    const response = commands[trimmedCmd] || 'Command not found. Type "help" for available commands.';
    setCommandHistory([...commandHistory, { cmd, response }]);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="retro-card p-6 font-mono"
        >
          <div className="flex items-center gap-2 mb-4 text-green-500">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-sm opacity-50">studio.dev -- /home/user</span>
          </div>

          <div className="space-y-2">
            <TypewriterComponent
              options={{
                strings: ['Welcome to the terminal.', 'Type "help" to begin.'],
                autoStart: true,
                loop: false,
                wrapperClassName: "text-green-500",
                cursorClassName: "text-green-500 animate-blink",
              }}
            />

            {commandHistory.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center">
                  <span className="text-green-500">$ </span>
                  <span className="ml-2">{item.cmd}</span>
                </div>
                <div className="text-gray-400 pl-4">{item.response}</div>
              </div>
            ))}

            <div className="flex items-center">
              <span className="text-green-500">$ </span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleCommand(currentCommand);
                    setCurrentCommand('');
                  }
                }}
                className="ml-2 bg-transparent border-none outline-none flex-1 text-green-500 caret-green-500"
                spellCheck="false"
                autoFocus
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
