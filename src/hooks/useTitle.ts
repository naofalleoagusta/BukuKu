import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | BukuKu`;
  }, []);
};

export default useTitle;
