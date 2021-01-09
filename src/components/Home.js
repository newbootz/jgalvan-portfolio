import react from "react";
import image from "../octocatzz.jpg"

export default function Home() {
    return (
        <main>
            <img src={image} alt="Night Sky" 
            className="absolute object-cover w-full h-full opacity-100" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-indigo-900 font-bold cursive leading-none lg:leading-snug home-name">Hi. I'm Jesus.</h1>
            </section>
        </main>
    )
}