import { Flip, toast as reactToast } from 'react-toastify';

const TOAST_DELAY = 6000;

export const { SUCCESS, ERROR, INFO, WARNING, DEFAULT } = reactToast.TYPE;

const execute = (type, message, options = {}) =>
  reactToast(message, {
    type,
    draggable: true,
    autoClose: TOAST_DELAY,
    theme: 'colored',
    pauseOnFocusLoss: false,
    ...options,
  });

const update = (toastId, message, options = {}) => {
  reactToast.update(toastId, {
    render: message,
    type: INFO,
    draggable: true,
    autoClose: TOAST_DELAY,
    pauseOnFocusLoss: false,
    transition: Flip,
    ...options,
  });
};

const promise = (callback, options = {}) => {
  reactToast.promise(callback, options);
};

const toast = {
  default: (message, options) => execute(DEFAULT, message, options),
  success: (message, options) => execute(SUCCESS, message, options),
  error: (message, options) =>
    execute(ERROR, message.message || message, options),
  warning: (message, options) => execute(WARNING, message, options),
  info: (message, options) => execute(INFO, message, options),
  update: (toastId, message, options) => update(toastId, message, options),
  promise: (callback, options) => promise(callback, options),
};

export default toast;
