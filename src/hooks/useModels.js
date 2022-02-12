import useSubscribe from './useSubscribe';

const useModels = (models, { active = true } = {}) => {
  useSubscribe(models, active);

  return models.map(model => model.getState());
}

export default useModels;
