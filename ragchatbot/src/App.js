import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  
  // Sample team data
  const teamMembers = [
    { id: 1, name: 'Team Member 1', role: 'AI Engineer', bio: 'Expert in natural language processing and conversational AI.' },
    { id: 2, name: 'Team Member 2', role: 'Front-end Developer', bio: 'Specializes in creating intuitive and responsive user interfaces.' },
    { id: 3, name: 'Team Member 3', role: 'Data Scientist', bio: 'Works with large language models and information retrieval systems.' },
    { id: 4, name: 'Team Member 4', role: 'UX Designer', bio: 'Focuses on creating seamless user experiences for AI applications.' },
    { id: 5, name: 'Team Member 5', role: 'Product Manager', bio: 'Oversees the development and improvement of our RAG system.' },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#EEEBDD' }}>
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ color: '#630000' }}>RAGchatbot</div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => setActiveTab('home')} 
                  className="px-2 py-1"
                  style={{ color: activeTab === 'home' ? '#630000' : 'inherit', borderBottom: activeTab === 'home' ? '2px solid #630000' : 'none' }}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('chatbot')} 
                  className="px-2 py-1"
                  style={{ color: activeTab === 'chatbot' ? '#630000' : 'inherit', borderBottom: activeTab === 'chatbot' ? '2px solid #630000' : 'none' }}
                >
                  Chatbot
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('about')} 
                  className="px-2 py-1"
                  style={{ color: activeTab === 'about' ? '#630000' : 'inherit', borderBottom: activeTab === 'about' ? '2px solid #630000' : 'none' }}
                >
                  About Us
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-12" style={{ color: '#630000' }}>About Us</h1>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-gray-800 mb-4">
            RAGchatbot combines the power of Retrieval-Augmented Generation to deliver accurate, 
            context-aware responses. Our team of experts is dedicated to creating AI solutions 
            that provide reliable information while maintaining a natural conversational flow.
          </p>
          <p className="text-gray-800">
            We specialize in developing customized RAG solutions that can be integrated with 
            your existing knowledge base, allowing your users to access information efficiently.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: '#630000' }}>Meet Our Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full mb-4" style={{ backgroundColor: '#630000' }}></div>
                <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                <p className="font-medium mb-2" style={{ color: '#630000' }}>{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 mt-12" style={{ backgroundColor: '#630000' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2 text-white">RAGchatbot</h3>
              <p className="text-white opacity-80">Advanced retrieval-augmented chatbot solutions</p>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:underline">Contact</a></li>
                <li><a href="#" className="text-white hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="text-white hover:underline">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white border-opacity-20 text-center text-white opacity-80">
            <p>&copy; 2025 RAGchatbot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;