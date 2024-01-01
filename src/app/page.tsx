import Image from 'next/image'

export default function Home() {


  fetch('http://www.omdbapi.com/?apikey=c6e006b5&s=kung fu panda 4')
  .then((response: Response) => response.json())
  .then((data: any) => console.log(data));
  return (
    <div className='bg-gradient-to-b from-blue-500 to-blue-900 min-h-screen'>xd</div>
  )
}
