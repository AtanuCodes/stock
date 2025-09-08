// vite.config.js
import { defineConfig, loadEnv } from "file:///D:/Mutual-Fund-APP/AMLCustomerPortal_WApp/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Mutual-Fund-APP/AMLCustomerPortal_WApp/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\Mutual-Fund-APP\\AMLCustomerPortal_WApp";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH + "/",
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src"),
        "react-virtualized/List": "react-virtualized/dist/es/List"
      }
    },
    optimizeDeps: {
      exclude: ["js-big-decimal"]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxNdXR1YWwtRnVuZC1BUFBcXFxcQU1MQ3VzdG9tZXJQb3J0YWxfV0FwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTXV0dWFsLUZ1bmQtQVBQXFxcXEFNTEN1c3RvbWVyUG9ydGFsX1dBcHBcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L011dHVhbC1GdW5kLUFQUC9BTUxDdXN0b21lclBvcnRhbF9XQXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtkZWZpbmVDb25maWcsIGxvYWRFbnZ9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7bW9kZX0pID0+IHtcclxuXHJcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBsdWdpbnM6IFtyZWFjdCgpXSxcclxuICAgIGJhc2U6IGVudi5WSVRFX0JBU0VfUEFUSCArICcvJyxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgICAgICAncmVhY3QtdmlydHVhbGl6ZWQvTGlzdCc6ICdyZWFjdC12aXJ0dWFsaXplZC9kaXN0L2VzL0xpc3QnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICBleGNsdWRlOiBbJ2pzLWJpZy1kZWNpbWFsJ11cclxuICAgIH1cclxuICB9XHJcblxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1ULFNBQVEsY0FBYyxlQUFjO0FBQ3ZWLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFGakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBQyxLQUFJLE1BQU07QUFFdEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUV2QyxTQUFPO0FBQUEsSUFDTCxTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsSUFDakIsTUFBTSxJQUFJLGlCQUFpQjtBQUFBLElBQzNCLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxRQUNwQywwQkFBMEI7QUFBQSxNQUM1QjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxJQUM1QjtBQUFBLEVBQ0Y7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
