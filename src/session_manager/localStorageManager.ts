const setItem = () => ({
  set: (key: string, item: string) => localStorage.setItem(key, item)
});

const getItem = () => ({
  get: (key: string) => localStorage.getItem(key)
});

const deleteItem = () => ({
  delete: (key: string) => localStorage.removeItem(key)
});

const LocalStorage = () => ({
  ...setItem(),
  ...getItem(),
  ...deleteItem()
});

export const LocalStorageManager = LocalStorage();
