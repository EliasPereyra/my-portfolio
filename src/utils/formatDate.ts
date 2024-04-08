export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "long",
  }).format(date);
};
