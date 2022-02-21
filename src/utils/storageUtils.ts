export const storageUtils = {
  setLocalJsonItem: (key: string, valueObj: any) => {
    if (valueObj != null) {
      localStorage.setItem(key, JSON.stringify(valueObj));
    } else {
      localStorage.setItem(key, '');
    }
  },
  getLocalJsonItem: (key: string) => {
    return JSON.parse(localStorage.getItem(key) ?? '');
  },
  setLocalItem: (key: string, valueObj: any) => {
    if (valueObj != null) {
      localStorage.setItem(key, JSON.stringify(valueObj));
    } else {
      localStorage.setItem(key, '');
    }
  },
  getLocalItem: (key: string) => {
    return localStorage.getItem(key);
  },
};
