# Subject Selection System



* React
* Tailwind CSS
* Vite


To visit the project [here](https://selectionsystem.netlify.app)

To use and practice with the project follow these steps

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

![image](https://user-images.githubusercontent.com/114118969/231546281-3ad9c750-a5d7-4cf3-87c9-f385ffc7b582.png)


Made with :heart: by [aneudypq]()
