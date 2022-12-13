import storage from 'redux-persist/lib/storage';


const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'primary',
    storage: storage,
    blacklist: [],
    // whitelist: [],
  }
}

export default REDUX_PERSIST
