export function formattedDate(datetime: Date) {
  return datetime.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })
}
