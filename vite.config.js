import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "inject",
      transformIndexHtml(html) {
        return [
          `<script src="/src/lib/raphael.min.js"></script>`,
          `<script src="/src/lib/jtab.js"></script>`,
        ];
      },
    },
  ],
});
