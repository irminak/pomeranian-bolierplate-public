import './styles.css';

export function ExerciseJsArrayBasics() {
  //arrays of objects
  const peopleData = [
    { id: 11, name: 'Maciej', age: 65, adress: 'Gdansk' },
    { id: 13, name: 'Jasmine', age: 25, adress: 'Warszawa' },
    { id: 14, name: 'Lilian', age: 3, adress: 'Gdansk' },
    { id: 15, name: 'Adrian', age: 17, adress: 'Gdansk' },
  ];

  const peopleNames = peopleData.map((person) => person.name); // ["Maciej", "Jasmine","Lilian"] --> flat array
  console.log('peopleNames', peopleNames); // ["Maciej", "Jasmine","Lilian"] --> flat array

  const peopleFromGdansk = peopleData.filter(
    (personBlaBla) => personBlaBla.adress === 'Gdansk'
  );
  console.log('peopleFromGdansk', peopleFromGdansk); // [{ id: 11, name: "Maciej", age: 65, adress: "Gdansk" }, { id: 14, name: "Lilian", age: 3, adress: "Gdansk" }] --> flat array

  return (
    <div className="container--array-objects-basics">
      <p>Działania na tablicach: 2023-10-09</p>
      <ul>
        {
          // React require uniq id for listed items (iteration thrue array of objects)
          peopleData.map((personData, index) => (
            <li key={personData.id}>
              Imie: {personData.name}, Wiek: {personData.age}
            </li>
          ))
        }
      </ul>
      <br />
      <br />
      <ul>
        {
          // React require uniq id for listed items (iteration thrue flat array )
          peopleNames.map((peopleName, index) => (
            <li key={index}>Imie: {peopleName}</li>
          ))
        }
      </ul>
      Imie pierwszej osoby:{' '}
      {
        peopleNames[0] //Maciej
      }
      <br />
      <br />
      <div className="container--people-from-gdansk">
        {peopleFromGdansk.map((peopleDataFromGdansk) => (
          <div className="container--people-data" key={peopleDataFromGdansk.id}>
            <div>Imie: {peopleDataFromGdansk.name}</div>
            <div>Wiek: {peopleDataFromGdansk.age}</div>
            <div>Adres: {peopleDataFromGdansk.adress}</div>
            <div>Id: {peopleDataFromGdansk.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


/*
1. continue - pomija iteracje, ale pętla wykonuje się dalej
2. break - przerywa pętlę
3. find - zwraca na pierwsza wartość, która spełnia warunek
4. sort, toSorted - sortuje tablice (sort mutuje oryginalna tablice, a toSorted nie mutuje)
*/

const NUMBERS = [1, 3, 66, 9, 155, 2];

export const ArrayBasics = () => {
  console.log('-----');
  // Continue
  //   for (let i = 5; i > 0; i--) {
  //     if (i > 3) {
  //       continue;
  //     }
  //     console.log(i);
  //   }

  // Break
  //   for (let i = 0; i <= 5; i++) {
  //     if (i === 3) {
  //       break;
  //     }
  //     console.log(i);
  //   }

  //   for (let i = 0; i < NUMBERS.length; i++) {
  //     const num = NUMBERS[i];
  //     if (num % 3 === 0) {
  //       console.log(num);
  //       continue;
  //     }
  //   }

  //   const firstEven = NUMBERS.find((num) => num % 2 === 0);
  //   console.log(firstEven);

  const sortedArray = [...NUMBERS].sort((a, b) => a - b);
  console.log(sortedArray);
  console.log(NUMBERS);

  return <div>ArrayBasics</div>;
};

// const sum = NUMBERS.reduce((accumulator, currentValue) => {
//   if (currentValue % 2 === 0) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);

