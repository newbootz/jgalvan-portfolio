import React, {useState, useEffect} from "react";
import sanityClient from "../client.js"
import { Link } from "react-router-dom";

export default function Post() {
    //49
    const [postData, setPost] = useState(null);
    useEffect( () => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage {
                    asset-> {
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);
    return (
        <main className="bg-indigo-200 min-h-sceen p-12">
            <section className="container mx-auto my-auto my-8 min-h-sceen">
                <h1 className="text-5xl flex justify-center cursive">Blog Post Page</h1>
                <h2 className="text-lg text-indigo-600 flex justify-center mb-12">Welcome to my Blog Posts Page</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    { postData && postData.map((post, index) => (
                    <article>
                        <Link to={ "/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-indigo-800" key={index}>
                            <img src={post.mainImage.asset.url}
                            alt={post.mainImage.alt}
                            className="w-full h-full rounded-r object-cover absolute"/>
                            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-blue-400 text-lg font-blog px-3 py-4 bg-indigo-700 bg-opacity-90 rounded-full hover:bg-red-400 hover:text-indigo-900 shadow-2xl ring-4 ring-indigo-300">
                                {post.title}
                                </h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                        ))}
                </div>
            </section>
        </main>
    )
}