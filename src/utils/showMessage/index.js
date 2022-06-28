import {
  showMessage as showToast,
  hideMessage,
} from 'react-native-flash-message';

export const showMessage = (msg, type) => {
  showToast({
    message: msg,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? '#1abc9c' : '#d74353',
  });
};
