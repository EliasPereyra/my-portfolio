export const formatDate = (date: Date) => {
  date = new Date(date);

  return new Intl.DateTimeFormat("es", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
