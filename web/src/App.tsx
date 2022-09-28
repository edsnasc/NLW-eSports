import * as Dialog from '@radix-ui/react-dialog'
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';

import './styles/main.css';

import logoImage from './assets/logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
  id: string
  title: string
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  async function gameData() {
    const { data } = await axios.get('http://localhost:3333/games')
    setGames(data)
  }

  useEffect(() => {
    gameData()
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay />

          <Dialog.Content>
            <Dialog.Title>Publique um anúncio</Dialog.Title>

            <Dialog.Content>
              
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
