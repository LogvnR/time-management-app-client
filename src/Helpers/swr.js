import mainApi from './axios';
import useSWR from 'swr';

const fetcher = (url) => mainApi.get(url).then((res) => res.data);

const useUsers = () => {
  const { data, error } = useSWR('getUsers', fetcher);

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUsers;
