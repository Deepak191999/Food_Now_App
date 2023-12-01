import styled from "styled-components";
import { Base_URL, Button, Container } from "../../App";

export const SearchResult = ({data}) => {
  return (
    <FoodContainer>
      <Container>
        <FoodCards>
          {data?.map(({name,image,text,price})=>
            <FoodCard key={name}>
              <div className="food_img">
                <img src={Base_URL+image} alt="" />
              </div>
              <div className="food_info">
                <div className="info">
               <h3>{name}</h3>
               <p>{text}</p>
                 </div>

              <Button>${price.toFixed(2)}</Button>
              </div>
           </FoodCard>)}
        </FoodCards>
        </Container>
      </FoodContainer>
  )
};


const FoodContainer = styled.section`
min-height: calc(100vh - 210px);
background-image:url('/bg.jpg');
background-size:cover
`;
const FoodCards = styled.div`
display: flex;
flex-wrap: wrap;
row-gap: 20px;
column-gap: 32px;
align-items: center;
justify-content: center;
padding-top: 80px;
`;

const FoodCard = styled.div`
width: 340px;
  height: 167px;
  border: 0.66px solid;
  /* align-items: center; */

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;
  display: flex;
  padding: 8px;

  .food_info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3{
      margin-top: 8px;
      font-size: 20px;
      font-weight: 500;
    }
    p{
      margin-top: 4px;
      font-size: 15px;
    }
  };
  img{
    margin-right: 10px;
    height: 130px;
    width: 130px;
    border-radius: 100%;
  };
`;
