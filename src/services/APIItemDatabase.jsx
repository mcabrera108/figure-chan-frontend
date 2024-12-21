import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useItem() {
  const [item, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getItem() {
      try {
        const response = await fetch(`http://localhost:3000/item/1`, {
          mode: "cors",
        });
        const actualData = await response.json();
        console.log("Hello");

        if (!response.ok) {
          throw new Error(
            `This is an HTTP Error: The status is ${response.data}`
          );
        }
        setItems(actualData);
        setError(null);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setItems(null);
      } finally {
        setLoading(false);
      }
    }
    getItem();
  }, [id]);

  return { item, error, loading };
}

function useAllItems() {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getItem() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/`, {
          mode: "cors",
        });
        const actualData = await response.json();

        if (!response.ok) {
          throw new Error(
            `This is an HTTP Error: The status is ${response.data}`
          );
        }
        setItems(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setItems(null);
      } finally {
        setLoading(false);
      }
    }
    getItem();
  }, []);

  return { items, error, loading };
}
export { useAllItems, useItem };
