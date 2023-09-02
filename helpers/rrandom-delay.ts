// Helper function to introduce a random delay between 0.2 to 1 second
export async function randomDelay(): Promise<void> {
  const min = 500; // 0.5 seconds
  const max = 4000; // 4 seconds
  const delay = Math.random() * (max - min) + min;
  return new Promise((resolve) => setTimeout(resolve, delay));
}
