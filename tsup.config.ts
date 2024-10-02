import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/cloudflare.ts",
    "src/iis.ts",
    "src/nginx.ts",
    "src/unofficial.ts",
  ],
  outDir: "dist",
  clean: true,
  format: ["esm", "cjs"],
  target: ["esnext", "esnext"],
  dts: true,
  minify: true,
  sourcemap: false,
  splitting: true,
});
