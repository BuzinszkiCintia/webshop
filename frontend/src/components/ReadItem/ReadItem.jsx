import { useState, useEffect } from "react";
import {
  MainContainer,
  Title,
  GridConatiner,
  GridCard,
  BoxName,
  BoxDescript,
  ButtonContainer,
  ModifyLink,
  BoxQuantity,
  DeleteButton,
  Loader,
} from "./ReadItem.style";
import loaderIMG from "../../images/loader.png";

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
    <MainContainer>
      <Title>Save! Different vegetable and fruit boxes at a good price!</Title>
      {loading ? (
        <Loader src={loaderIMG} alt="loader" />
      ) : (
        <GridConatiner>
          {data?.items.map((item, index) => {
            return (
              <GridCard key={index}>
                <BoxName>{item.name}</BoxName>
                <BoxDescript> Box contains: {item.descript}</BoxDescript>
                <ButtonContainer>
                  <ModifyLink
                    key={index}
                    to={`/${item.name}`}
                    state={{ item: item, index: index }}
                  >
                    <span className="material-symbols-outlined">edit</span>
                  </ModifyLink>

                  <BoxQuantity>Quantity: {item.quantity}</BoxQuantity>
                  <DeleteButton
                    onClick={() => {
                      removeData(index);
                    }}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </DeleteButton>
                </ButtonContainer>
              </GridCard>
            );
          })}
        </GridConatiner>
      )}
    </MainContainer>
  );
};

export default Read;
