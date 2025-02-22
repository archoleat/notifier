import { success, warning, error } from './dist/index.js';

await success({ message: 'All system working' });
await warning({ message: 'Something wrong with system' });
await error({ message: 'System not working' });
