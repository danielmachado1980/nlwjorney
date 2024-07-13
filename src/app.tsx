import {MapPin, Calendar} from 'lucide-react'

export function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl px-6 text-center space-y-10">
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
          <div className="h-16 bg-zinc-900 px-4 rouded-xl flex items-center">
            <MapPin className="size-5 text-zinc-400"></MapPin>
            <input type="text" placeholder="para onde você vai" className="bg-transparent text-lg placeholder-zinc-400"></input>
            <Calendar className="size-5 text-zinc-400"></Calendar>
            <input type="text" placeholder="quando" className="bg-transparent text-lg placeholder-zinc-400"></input>
            <button>Continuar</button>
          </div>
          <p className="text-sm text-zinc-500">
            Ao planejar sua viagem pela plann.er você automaticamente concorda <br/>
            com nossos <a className="text-sm text-zinc-300 underline" href="#">termos de uso</a> e <a href="#">políticas de privacidade.</a>
          </p>
        </div>
      </div>
    </>
  )
}