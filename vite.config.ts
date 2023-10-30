import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  build: {
    lib: {
      entry: 'index.js',
      name: 'rzimmerdev-storybook',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
}