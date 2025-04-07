import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiChevronDown,
  FiSearch,
  FiMessageCircle,
  FiMail,
  FiPlus,
  FiExternalLink,
} from 'react-icons/fi';
import { faqData } from '../../../utils/constants';
import Modal from '../../../components/ui/Model';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract unique categories from FAQ data
  const categories = ['All', ...new Set(faqData.map((item) => item.category || 'General'))];

  // Filter FAQs based on search and category
  const filteredFAQs = faqData.filter((item) => {
    const matchesSearch =
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleFaqClick = (faq) => {
    setSelectedFaq(faq);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Find answers to the most common questions about our services
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto mb-12">
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300"
              size={20}
            />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-gray-300 py-3 pl-10 pr-4 rounded-full border-none shadow-lg focus:outline-none ring-1 ring-white focus:ring-3 focus:ring-white duration-300 focus:ring-opacity-50"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-white text-[#0569E8]'
                    : 'bg-white bg-opacity-20 text-gray-700 hover:bg-opacity-30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => handleFaqClick(item)}
                >
                  {item.category && (
                    <div className="bg-[#0569E8] bg-opacity-10 px-5 py-2">
                      <span className="text-xs font-medium text-[#0569E8] uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg text-gray-900">{item.question}</h3>
                      <div className="ml-4 mt-1 flex-shrink-0 text-[#0569E8]">
                        <FiExternalLink size={18} />
                      </div>
                    </div>
                    <p className="mt-2 text-gray-600 line-clamp-3">{item.answer}</p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-sm text-[#0569E8] font-medium flex items-center">
                        View Details
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-16 bg-white bg-opacity-80 rounded-xl">
                <p className="text-gray-700 text-lg">
                  No matching questions found. Try a different search term.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-slate-800 bg-opacity-10 backdrop-filter backdrop-blur-sm text-white py-12 px-4 rounded-t-3xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-3 bg-white bg-opacity-20 rounded-full">
              <FiMessageCircle size={28} />
            </div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-white text-opacity-90 mb-8 max-w-xl mx-auto">
            If you couldn't find the answer to your question, don't hesitate to reach out. Our
            support team is ready to help you with any inquiries.
          </p>
          <a
            href="mailto:support@example.com"
            className="inline-flex items-center px-6 py-3 bg-white text-[#0569E8] font-medium rounded-lg shadow-lg hover:bg-opacity-90 transition-colors"
          >
            <FiMail className="mr-2" size={18} />
            Contact Support
          </a>
        </div>
      </section>

      {/* Modal */}
      {selectedFaq && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedFaq.question}>
          <div className="space-y-4">
            {selectedFaq.category && (
              <div className="inline-block px-3 py-1 bg-[#0569E8] bg-opacity-10 rounded-full">
                <span className="text-xs font-medium text-[#0569E8] uppercase tracking-wider">
                  {selectedFaq.category}
                </span>
              </div>
            )}
            <p className="text-gray-700">{selectedFaq.answer}</p>

            {selectedFaq.relatedLinks && (
              <div className="pt-4 mt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Related Resources</h4>
                <ul className="space-y-2">
                  {selectedFaq.relatedLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        className="text-[#0569E8] hover:underline flex items-center"
                      >
                        <FiExternalLink size={14} className="mr-1" />
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default FAQ;
