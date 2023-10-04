export function checkHealth(object) {
  if (object > 50) {
    return 'healthy';
  } if (object < 50 && object > 15) {
    return 'wounded';
  }
  return 'critical';
}
