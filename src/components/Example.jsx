import  {useState} from 'react';

function Example() {
    const [cats, setCats] = useState([
        { name: 'Myshka', breed: 'Ragdoll' },
        { name: 'Malta', breed: 'Turkish Angora' },
      ]);

    function addCat(newCat) {
        const newCatArray = [...cats, newCat];
        setCats(newCatArray);
    }

    return (
        <>
          <button onClick={() => addCat({ name: 'Kira', breed: 'Ragamuffin' })}>
            Add Cat
          </button>
          <ul>
            {cats.map((cat, idx) => (
              <li key={idx}> {cat.name} </li>
            ))}
          </ul>
        </>
      );
    }
    

export default Example;
