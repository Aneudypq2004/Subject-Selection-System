# Subject-Selection-System



```js

 <div className="bg-white w-full shadow-2xl p-4 gap-4 ">

          <select
          
            onChange={e => setCuatrimetreActual(e.target.value)}
            value={cuatrimestreActual}
            className='p-4 bg-transparent text-2xl text-indigo-600 font-bold  shadow-lg  cursor-pointer w-full text-center' >

            {data && data.map((cuatrimestre, index) => (

              <option value={index + 1} key={index}>{`Cuatrimestre ${index + 1} `}</option>

            ))};

          </select>

        </div >
```