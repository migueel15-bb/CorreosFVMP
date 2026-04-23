import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //la ruta base se establece en './' para que el proyecto pueda ser desplegado correctamente en cualquier servidor, ya que esto indica que los recursos se cargarán desde la raíz del proyecto añadiendo /dist.
  base: './',
})
