import React, { useEffect, useState}  from "react";
import sanityClient from "../client.js";
import { SocialIcon } from "react-social-icons";

export default function Project() {
    const [projectData, setProjectData] = useState(null);
    useEffect( ()=> {
        sanityClient.fetch(`*[_type == "project"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            github,
            image {
                asset-> {
                    _id,
                    url
                },
                alt
            },
            tags
        }`).then((data) => setProjectData(data)).catch(console.error);
    }, []);
    return (
        <main className="bg-indigo-300 min-h-screen p-12">
            <section className="container mx-auto my-8 min-h-sceen">
                <h1 className="text-5xl flex justify-center cursive text-indigo-900">My Projects</h1>
                <h2 className="text-lg text-indigo-600 flex justify-center mb-12">Welcome to my projects page!</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-indigo-900 p-16">
                        <h3 className="text-green-300 text-3xl font-bold mb-2 hover:text-red-400">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a>
                        </h3>
                        <div className="text-green-300 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>: {" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>: {" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-white leading-relaxed">{project.description}</p>
                            <a 
                            href={project.github}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-300 font-bold hover:underline hover:text-red-400 text-xl"
                            >
                               View on GitHub  {""}
                            <span><SocialIcon url={project.github} className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} /></span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}