export const getData = async (): Promise<any> => {
  return fetch("http://localhost:5000/v1/dashboard/summary")
    .then(response => response.json())
    .then(json => console.log(json));
};
