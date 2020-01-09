var store=window.localStorage;

export function setToken(val){
  store.token=val;
}

export function deleteKey(key){
  store.removeItem(key)
}

export function getToken(){
  return store.token;
}
