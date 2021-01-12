export default function formatDate(a) {
  const date = new Date(a);
  return date.getMonth() + 1 + "/" + date.getDate();
}

// date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
