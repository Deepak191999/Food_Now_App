import styled from "styled-components"
import './App.css'
import { useEffect, useState } from "react"
import { SearchResult } from "./components/SearchResult/SearchResult";

export const Base_URL = "http://localhost:9000";

const App = () => {
  const[data,setdata] = useState(null);
  const[filterData,setFilterData] = useState(null);
  const[loading,setLoading] = useState(false);
  const[error, setError] = useState(null);
  const[selectedbtn, setSelectedbtn] = useState("all");

  useEffect(()=> {
    const fetchFoodData  =async () => {
      
      try {
        const response= await fetch(Base_URL);
       const JSON = await response.json();
  
      setdata(JSON);
      setFilterData(JSON);
      setLoading(false);
      } catch (error) {
        setError("unable to fetch data")
      }
      // console.log(json);
    };
    fetchFoodData();
  },[]);

  const filterFood = (type) => {
    if (type == "all") {
        setFilterData(data);
        setSelectedbtn("all");
        return;
    }
    const filter =  data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase()));
    setFilterData(filter);
    setSelectedbtn(type)
  };

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue== "") {
      setFilterData(null);
    }
    const filter =  data?.filter((food)=> food.name.toLowerCase().includes(searchValue.toLowerCase()));

    setFilterData(filter)
  };

  const filterBtn = [
    {
      name: "All",
      type: "all"
    },
    {
      name: "Breakfast",
      type: "breakfast"
    },
    {
      name: "Lunch",
      type: "lunch"
    },
    {
      name: "Dinner",
      type: "dinner"
    },
  ]

  if(error){  return<div>
      {error}
    </div>
  }
  if(loading){ return<div>
      Loading...
    </div>
  }

  return(<> <Container>

      <TopContainer>
        <div className="logo">
         <img src="/zomato.png" alt="logo" />
        </div>
        <div className="search">
         <input onChange={searchFood} placeholder="Search food"/>
        </div>
      </TopContainer>

      <FilterContainer>
        {filterBtn.map((value) => (
           <Button isSelected={selectedbtn == value.type} key={value.name} onClick={() => filterFood(value.type)}>{value.name}</Button>))}
       
      </FilterContainer>

     
      
  </Container>
   <SearchResult data={filterData}/>
   </>
   )
}

export default App


export const Container = styled.div`
max-width: 1200px;
margin: 0 auto;
`;

const TopContainer = styled.section`
height: 140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

.logo{
  img{
    height: 40px;
    width:185px ;
  }
}
.search{
  input{
    padding: 5px 9px;
    background-color: transparent;
    border: white 1px solid;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    height: 40px;
  }
}
@media (0 < width < 600px){
  flex-direction: column;
  height: 120px;
}
`;

const FilterContainer = styled.section`
display:flex;
justify-content:center;
padding-bottom: 40px;
gap: 12px;

`;

export const Button = styled.button`
background:${({isSelected})=>(isSelected) ? "#fb0f13": "#ff4343"};
outline: 1px solid ${({isSelected})=>(isSelected) ? "white": "#ff4343"};
border-radius: 5px;
color: white;
border: none;
font-size: 18px;
padding: 6px 12px;
cursor: pointer;
&:hover{
  background-color: #fb0f13;
}
`;
