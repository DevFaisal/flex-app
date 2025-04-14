import { useNewUserStore } from '../store/global.store';

const useCurrentEnroll = () => {
  const newNumber = useNewUserStore((state) => state.newNumber);
  return newNumber;
};

export default useCurrentEnroll;
