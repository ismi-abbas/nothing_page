import reactIcon from './assets/react.svg'
import { navigation } from './constant'

function App() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-[#050211] text-center">
      <nav className="text-white p-8 w-screen flex justify-center rounded-full">
        <ul className="flex flex-row gap-7 items-center">
          <li className="hover:cursor-pointer">
            <img src={reactIcon} alt="react" className="text-white" />
          </li>
          {navigation.map((nav: any, idx: number) => (
            <li
              key={idx}
              className="hover:cursor-pointer hover:text-slate-200 text-slate-500"
            >
              {nav}
            </li>
          ))}
        </ul>
      </nav>
      <div className="container-sm mx-auto text-center h-[400px] w-[700px]">
        <div className="pt-20">
          <h1 className="text-white decoration-sky-400 decoration-solid font-medium text-6xl">
            Deploy Serverless Functions at the{' '}
            <span className="bg-clip-text from-green-400 to-purple-400 text-transparent bg-gradient-to-r via-[#5A7ACB] font-bold">
              Edge
            </span>
          </h1>
          <p className="text-lg font-light text-slate-300 mt-2 p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            porro, aperiam ipsum optio incidunt animi, quod voluptates quibusdam
            repellendus nam voluptatem recusandae fuga voluptatibus nulla fugiat
            odit qui soluta debitis?
          </p>
        </div>
      </div>
      <div className="w-80 h-80">
        <img
          src="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="phone"
          className="object-cover"
        />
      </div>

      <footer className="text-slate-700 text-xl font-normal rounded-lg p-4">
        <ul className="flex flex-row gap-4">
          <li className="hover:text-slate-300 hover:cursor-pointer">Contact</li>
          <li className="hover:text-slate-300 hover:cursor-pointer">
            Facebook
          </li>
          <li className="hover:text-slate-300 hover:cursor-pointer">Twitter</li>
          <li className="hover:text-slate-300 hover:cursor-pointer">Github</li>
        </ul>
      </footer>
    </div>
  )
}

export default App
