import { create } from 'zustand';
import lambdaService from '../../../../../../services/lamda';

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
      const ContactObject = {
          data: [
            {
              First_Name: 'Quiz',
              Last_Name: 'User',
              Email: generateRandomEmailAsPerTimestamp(),
              Qna: JSON.stringify(qna),
            },
          ],
        };

    try {
      await lambdaService.createZohoAccount(ContactObject);
    } catch (error) {
      console.error('Error Occurred:', error.response?.data || error.message);
    }
  },
}));

export { useTakeQuizStore };

function generateRandomEmailAsPerTimestamp() {
  return `quiz${Date.now()}@flexcard.app`;
}
