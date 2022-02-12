const usePublish = storm => {
  const publisher = nextValue => {
    storm.publish(nextValue);
  }
  return publisher;
}

export default usePublish;
