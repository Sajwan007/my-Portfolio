import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, AnimatePresence } from "motion/react";

const Projects = () => {
  const [preview, setPreview] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX + 20, y: e.clientY + 20 });
  };

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      
      {preview && (
        <div
          className="fixed z-50 pointer-events-none transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          <img
            className="w-48 h-32 object-cover rounded-lg shadow-lg border border-white/10"
            src={preview}
            alt="Project preview"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;
