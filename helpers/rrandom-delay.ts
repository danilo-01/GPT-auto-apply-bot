// Helper function to introduce a random delay between 0.2 to 1 second
export async function randomDelay(): Promise<void> {
  const min = 200; // 0.2 seconds
  const max = 1000; // 1 second
  const delay = Math.random() * (max - min) + min;
  return new Promise((resolve) => setTimeout(resolve, delay));
}
