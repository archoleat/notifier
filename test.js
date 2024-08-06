import { error, warning, success, info } from './dist/index.js';

error({ message: 'Uhhh...', notificationMode: 'multiple' });
warning({ message: 'Uhhh!!!', notificationMode: 'multiple' });
success({ message: 'YooHoo!!!', notificationMode: 'multiple' });
info({ message: 'Yo!', notificationMode: 'multiple' });
