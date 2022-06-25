export const fetchData = async (url,page) => {
  const response = await fetch(
    `${url}ts=1000&apikey=${process.env.REACT_APP_API_PUBLIC}&hash=${process.env.REACT_APP_API_HASH}&limit=20&offset=${page*20}`
  );
  const data = await response.json();
  return data;
};
