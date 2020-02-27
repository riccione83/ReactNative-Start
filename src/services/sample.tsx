export const getData = async (): Promise<any> => {
  return fetch("https://jsonplaceholder.typicode.com/todos/1", { mode: "cors" })
    .then(response => response)
    .then(json => console.log(json));
};
