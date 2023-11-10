export function removeMask(value) {
  value = value.replace(/\s/g, "");
  return value.replace(/[^\w\s]/g, "");
}
