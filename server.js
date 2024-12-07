import { createServer } from "http";
import { app } from "./app.js";
import { connectToDatabase } from "./config/db.js";
const server = createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, async () => {
  try {
    await connectToDatabase();
    console.log("connection established, port %d is ready", port);
  } catch (error) {
    console.error("failed to connect!.");
    process.exit(1);
  }
});
