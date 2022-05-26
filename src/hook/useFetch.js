import { useState, useEffect } from "react";

function useFetch(url, assetType) {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url) {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data.holdings);
          if (assetType !== "all") {
            const tempData = data.holdings.filter(
              (asset) => asset.type === assetType
            );
            setFilteredData(tempData);
          } else {
            setFilteredData(data.holdings);
          }

          setLoading(false);
        })
        .catch((err) => {
          setError("An error occurred. Awkward..");
          setData(null);
        });
    }
  }, [url]);

  const filterData = (assetType) => {
    if (assetType !== "all" && data) {
      const tempData = data.filter((asset) => asset.type === assetType);
      setFilteredData(tempData);
    } else {
      setFilteredData(data);
    }
  };

  return { data, loading, error, filteredData, filterData };
}
export default useFetch;
