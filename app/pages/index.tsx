import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <div>
        <h1 className='text-center text-3xl'>PiotrZPLBuilds</h1>
        <h2 className='text-center text-xl'>Select your ROM!</h2>
      </div>

      <Image
        src="/android.png"
        alt="Picture of the author"
        // placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </main>
  )
}
