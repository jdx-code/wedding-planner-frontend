export default function getClassnames(...classes) {
  return classes.filter(Boolean).join(" ");
}
