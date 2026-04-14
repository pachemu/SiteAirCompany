import { createClient } from "redis";

let redisClient: ReturnType<typeof createClient> | null = null;

export async function getRedisClient() {
  if (!redisClient) {
    redisClient = createClient({
      url: process.env.UPSTASH_REDIS_REST_URL || "redis://localhost:6379",
    });
    await redisClient.connect();

    redisClient.on("error", (err) => {
      console.error("Redis Client Error:", err);
    });
  }

  return redisClient;
}
