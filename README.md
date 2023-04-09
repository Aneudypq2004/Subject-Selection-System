# Subject Selection System



* React
* Tailwind CSS
* Vite


To visit the project [here](https://selectionsystem.netlify.app)

To use and to practice with the project follow this steps

1. Download the zip
2. Open the folder with Visual Studio Code or your favorite editor
3. Run in the terminal ``` npm install ``` to install the  dependencies
4. Run ``` npm run dev ``` to start the project



```js

 <div className="bg-white w-full shadow-2xl p-4 gap-4">

          <select

            onChange={e => setCuatrimetreActual(e.target.value)}
            value={cuatrimestreActual}
            className='p-4 bg-transparent text-2xl text-indigo-600 font-bold  shadow-lg  cursor-pointer w-full text-center'>

            {data && data.map((cuatrimestre, index) => (

              <option value={index + 1} key={index} >{`Cuatrimestre ${index + 1} `}</option>

            ))};

          </select>
        </div >
```

Made with :heart: by [aneudypq]()