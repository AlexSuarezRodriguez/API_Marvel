export const fetchData = async (url) => {
  const response = await fetch(
    `${url}ts=1000&apikey=${process.env.REACT_APP_API_PUBLIC}&hash=${process.env.REACT_APP_API_HASH}&limit=100`
  );
  const data = await response.json();
  return data;
};
