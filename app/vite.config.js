import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

export default ({ mode }) => {
  dotenv.config();

  return defineConfig({
    plugins: [react()],
    define: {
      "process.env": process.env,
    },
  });
};
