import Button from '../../../../../../components/ui/Button';
import { useTakeQuizStore } from '../store/quizStore';

function Init() {
  const { handleNextStep } = useTakeQuizStore((state) => state);

  return (
    <Button
      type="secondary"
      className="text-sm md:text-ms"
      label={'Start Quiz'}
      onClick={() => {
        handleNextStep();
      }}
    />
  );
}

export default Init;
