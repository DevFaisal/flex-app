import { create } from 'zustand';
import contactService from '../../../../../../services/contact';

const useTakeQuizStore = create((set) => ({
  currentStep: 0,
  handleNextStep: (num) => {
    window.scrollTo({
      top: document.getElementById('quiz').offsetTop,
      behavior: 'smooth',
    });
    set((state) => ({
      currentStep: state.currentStep + 1 || num,
    }));
  },
  resetQuiz: () => {
    set((state) => ({
      currentStep: (state.currentStep = 0),
    }));
  },
  storeQnAinDB: async (qna) => {
    console.log(qna);
    const ContactObject = {
      properties: {
        firstname: 'Quiz',
        lastname: 'User',
        email: generateRandomEmailAsPerTimestamp(),
        eighteen_and_uk_resident: '',
        employed: '',
        partial_repayments: '',
        traffic_source: '',
        channel: '',
        qna: JSON.stringify(qna),
      },
    };
    try {
      const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
      const response = await contactService.createContact({
        ContactObject,
        Auth: String(accessToken),
      });
      console.log(response);
    } catch (error) {
      console.error('Error Occurred:', error.response?.data || error.message);
    }
  },
}));

export { useTakeQuizStore };

function generateRandomEmailAsPerTimestamp() {
  return `quiz${Date.now()}@flexcard.app`;
}
