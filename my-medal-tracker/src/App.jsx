import { useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryInput, setCountryInput] = useState("");
  const [goldInput, setGoldInput] = useState("");
  const [silverInput, setSilverInput] = useState("");
  const [bronzeInput, setBronzeInput] = useState("");

  const checkExistence = () => {
    return countries.find((country) => {
      if (country.name.toLowerCase() === countryInput.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    });
  };

  const addCountry = (event) => {
    event.preventDefault();

    if (checkExistence()) {
      alert("이미 등록된 국가입니다");
    } else {
      const newCountry = {
        name: countryInput,
        gold: goldInput,
        silver: silverInput,
        bronze: bronzeInput,
      };
      setCountries([...countries, newCountry]);
    }
  };

  const updateCountries = (event) => {
    event.preventDefault();

    if (checkExistence()) {
      setCountries(
        countries.map((country) => {
          if (country.name.toLowerCase() === countryInput.toLowerCase()) {
            return {
              name: country.name,
              gold: goldInput,
              silver: silverInput,
              bronze: bronzeInput,
            };
          } else {
            return country;
          }
        })
      );
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };

  return (
    <div className="main-container">
      <h1>2024 파리 올림픽 메달 대시보드</h1>

      <form className="input-form" onSubmit={addCountry}>
        <div className="input-field">
          <label htmlFor="country">국가명</label>
          <input
            id="country"
            onChange={(e) => {
              setCountryInput(e.target.value);
            }}
          />
        </div>

        <div className="input-field">
          <label htmlFor="gold medal">금메달</label>
          <input
            id="gold medal"
            onChange={(e) => {
              setGoldInput(e.target.value);
            }}
          />
        </div>

        <div className="input-field">
          <label htmlFor="silver medal">은메달</label>
          <input
            id="silver medal"
            onChange={(e) => {
              setSilverInput(e.target.value);
            }}
          />
        </div>

        <div className="input-field">
          <label htmlFor="bronze medal">동메달</label>
          <input
            id="bronze medal"
            onChange={(e) => {
              setBronzeInput(e.target.value);
            }}
          />
        </div>

        <div className="button-group">
          <button type="submit">국가 추가</button>
          <button onClick={updateCountries}>업데이트</button>
        </div>
      </form>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => {
              return (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
