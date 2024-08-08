import React, { useState, useEffect, useCallback } from "react";

interface DataItem {
  id: number;
  title: string;
}

const ListComponent: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
      );
      const result = await response.json();

      if (result.length < 10) {
        setHasMore(false);
      }

      setData((prevData) => [...prevData, ...result]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [page, hasMore, loading]);

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.scrollHeight ||
      loading ||
      !hasMore
    ) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#ddd",
          padding: "10px",
          zIndex: 1000,
          width: "100%",
        }}
      >
        <h2>Task 1 Sticky Header</h2>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {loading && (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default ListComponent;
