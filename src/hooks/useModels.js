import useSubscribe from './useSubscribe';

const useModels = (...models) => {
  useSubscribe(models);

  return models.map(model => model.getState());
}

export default useModels;
