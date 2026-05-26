import { build } from 'vite';

build({
  plugins: [{
    name: 'debug-plugin',
    resolveId(source, importer) {
      return null;
    },
    load(id) {
      return null;
    },
    transform(code, id) {
      return null;
    }
  }]
}).catch(err => {
  console.log('--- BUILD EXCEPTION DETAILS ---');
  console.dir(err, { depth: null });
  if (err.errors) {
    console.log('--- INNER ERRORS ---');
    console.dir(err.errors, { depth: null });
  }
  process.exit(1); // Exit with failure code so that bisect script knows it failed!
});
