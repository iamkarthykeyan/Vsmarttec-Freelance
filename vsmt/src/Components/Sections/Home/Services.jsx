import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "The AID Studio",
        description: "AID Studio, based in Romania, operates as an interior design and architecture studio. They specialize in creating unique and practical living and working spaces.",
        tags: ["Interior Design", "Architecture"],
        image: "https://images.unsplash.com/photo-1723195286412-1bca804844da?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hoverImage: "https://images.unsplash.com/photo-1722260613137-f8f5ac432d69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        heightClass: "h-auto",
        containerClass: "row-span-1",
        collaborator: "The AID Studio",
    },
    {
        id: 2,
        title: "The Bang",
        description: "The product design & branding studio. Founded by designers, The Bang is an award-winning design studio housing unmatched talent producing the best work for the best companies.",
        tags: ["Collaboration", "The Bang"],
        image: "https://images.unsplash.com/photo-1722929220740-f42b8c0ca019?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hoverImage: "https://images.unsplash.com/photo-1722925541914-ae7cf154d606?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        heightClass: "h-auto",
        containerClass: "row-span-2",
        collaborator: "The Bang",
    },
    {
        id: 3,
        title: "SGW Designworks",
        description: "SGW Designworks is all about helping businesses bring their product ideas to life faster. With a proven track record in enterprise electronics, industrial equipment, and automation.",
        tags: ["Web Design", "Webflow Development", "Branding"],
        image: "https://images.unsplash.com/photo-1722929220740-f42b8c0ca019?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hoverImage: "https://images.unsplash.com/photo-1722925541914-ae7cf154d606?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        heightClass: "h-auto",
        containerClass: "row-span-2",
        collaborator: "SGW Designworks",
    },
    {
        id: 4,
        title: "Imvizar",
        description: "Immersive storytelling experiences utilizing augmented reality. Blending technology with storytelling for unforgettable journeys that redefine engagement in locations around the world.",
        tags: ["Technology", "AR"],
        image: "https://images.unsplash.com/photo-1723195286412-1bca804844da?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        hoverImage: "https://images.unsplash.com/photo-1722260613137-f8f5ac432d69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        heightClass: "h-auto",
        containerClass: "col-span-1",
        collaborator: "Imvizar",
    },
];

const Services = () => {
    const projectRefs = useRef([]);

    useEffect(() => {
        projectRefs.current.forEach((ref) => {
            gsap.fromTo(
                ref,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: ref,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    return (
        <div className="px-4 py-10 md:px-8 lg:px-16 cursor-pointer font-poppins">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
                See our projects that impress both clients and customers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`border border-gray-300 rounded-lg p-4 group ${project.containerClass}`}
                        ref={el => projectRefs.current[index] = el}
                    >
                        <div className="relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full ${project.heightClass} object-contain rounded-md transition-opacity duration-300 ease-in-out group-hover:opacity-0`}
                            />
                            <img
                                src={project.hoverImage}
                                alt={project.title}
                                className={`absolute inset-0 w-full ${project.heightClass} object-contain rounded-md transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100`}
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-4 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-4xl font-normal mb-2">{project.title}</h3>
                            <p className="text-gray-600 text-base mb-4">{project.description}</p>
                            <div className="text-right">
                                <button className="bg-black text-white px-4 py-2 rounded-md border-2 border-transparent group-hover:border-black group-hover:bg-white group-hover:text-black transition">
                                    View live site
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
