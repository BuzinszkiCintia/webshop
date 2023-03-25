import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8080/read");
      setData(await response.json());
      setLoading(false);
    } catch (e) {
      console.log("Error fetching data!");
    }
  };

  const removeData = async (index) => {
    return fetch("http://localhost:8080/delete", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ index }),
    }).then((res) => {
      if (res.ok) {
        getData();
      } else {
        throw new Error("Wrong credentials");
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>
        {data?.items.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.name}</h2>
              <h3>{item.descript}</h3>
              <div>
                <Link
                  key={index}
                  to={`/${item.name}`}
                  state={{ item: item, index: index }}
                >
                  <span className="material-symbols-outlined">edit</span>
                </Link>

                <h3>{item.quantity}</h3>
                <button
                  onClick={() => {
                    removeData(index);
                  }}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Read;
