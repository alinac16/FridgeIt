export default function formatDate(date) {
  return date.getMonth() + 1 + "/" + date.getDate();
}

// date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
