import React, { useState } from "react";

const data = [
  { name: "벨라", species: "고양이", age: "5", id: 111 },
  { name: "루시", species: "강아지", age: "3", id: 112 },
  { name: "데이지", species: "토끼", age: "2", id: 113 },
  { name: "몰리", species: "고양이", age: "1", id: 114 },
  { name: "매기", species: "강아지", age: "6", id: 115 },
];

const App = () => {
  const [pets, setPets] = useState(data);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  const handleAddPet = () => {
    if (name && species && age) {
      const newPet = { name, species, age, id: Date.now() };
      setPets(pets.concat(newPet)); 
      setName("");
      setSpecies("");
      setAge("");
    }
  };

  return (
    <form>
      <h1>애완동물 정보 리스트</h1>
      <fieldset>
        <legend>새로운 애완동물을 추가하세요!</legend>
        <input
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="종"
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
        />
        <input
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleAddPet}>추가하기</button>
      </fieldset>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            {pet.name}는 {pet.species}이고, {pet.age}살 입니다.
          </li>
        ))}
      </ul>
    </form>
  );
};

export default App;
