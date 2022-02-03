/** Generates time based base64 uuid  */
export default function uuid(): string {
  const id = Date.now().toString(36) + Math.random().toString(36).substring(2);
  return id;
}
