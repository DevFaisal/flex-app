import React from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

const Model = ({ title, children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/20 bg-opacity-50 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal container for centering */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -40 }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300,
            duration: 0.5,
          }}
          className="bg-white rounded-lg shadow-xl p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-auto pointer-events-auto"
        >
          {/* Header with title and close button */}
          <div className="flex justify-between items-center mb-4">
            {title && <h2 className="text-xl font-bold">{title}</h2>}
            <motion.button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close"
            >
              <IoClose size={20} className="text-gray-500" />
            </motion.button>
          </div>

          {/* Modal content */}
          <div className="model-content">{children}</div>
        </motion.div>
      </div>
    </>
  );
};

export default Model;
