import { defineConfig } from 'tsdown'

export default defineConfig({
  dts: true,
  format: 'esm',
  sourcemap: true,
  clean: true,
})
