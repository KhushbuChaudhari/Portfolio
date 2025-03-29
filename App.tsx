import React from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, Globe, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-emerald-700 to-emerald-500 text-white min-h-screen flex items-center relative">
        <div className="container mx-auto px-4 py-16 text-center">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-xl object-cover"
          />
          <h1 className="text-5xl font-bold mb-4">Alex Thompson</h1>
          <p className="text-xl mb-8 text-emerald-100">Full Stack Developer</p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="hover:text-emerald-200 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-emerald-200 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-emerald-200 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">About Me</h2>
          <p className="text-lg text-gray-600 mb-8 text-center">
            I'm a passionate full-stack developer with 5 years of experience building modern web applications.
            I specialize in React, Node.js, and cloud technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-emerald-50 rounded-lg text-center">
              <Code2 className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">React, TypeScript, Tailwind CSS</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-lg text-center">
              <Globe className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">Node.js, Python, PostgreSQL</p>
            </div>
            <div className="p-6 bg-emerald-50 rounded-lg text-center">
              <Briefcase className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Tools</h3>
              <p className="text-gray-600">Git, Docker, AWS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">Analytics Dashboard</h3>
                <p className="text-gray-600 mb-4">A real-time analytics dashboard built with React and D3.js</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">D3.js</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Firebase</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-emerald-800">Task Manager Pro</h3>
                <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Next.js</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-emerald-800">Get In Touch</h2>
          <div className="bg-emerald-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-emerald-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-emerald-200 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-emerald-200 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-emerald-200 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-emerald-200">© 2024 Alex Thompson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;