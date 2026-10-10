import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";


import type { Technology as TechnologyType } from "../assets/types/technology";

const Technology = () => {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    TechnologyType[]
  >([]);

  const [loading, setLoading] = useState(true);

  // Load technology data
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);

        timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(() => {
        toast.error("Failed to load technologies.");
        setLoading(false);
      });

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, []);

  // Add technology
  const handleAdd = (technology: TechnologyType) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack.`);
  };

  // Remove one technology
  const handleRemove = (id: number) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies(
      selectedTechnologies.filter(
        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info(
      "All technologies removed from your stack."
    );
  };

  return (
    <section
      id="technologies"
      className="mx-auto w-full max-w-[1600px] px-5 py-16 md:px-15 md:py-20"
    >
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Explore the{" "}
          <span className="text-[#DB4BA9]">
            Technologies
          </span>
        </h2>

        <p className="mt-3 text-base text-gray-500 md:text-lg">
          Pick a tech stack that fits your next project.
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex min-h-75 items-center justify-center">
          <p className="text-sm text-gray-500">
            Loading technologies...
          </p>
        </div>
      ) : (
        /* Cards + Your Stack */
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={selectedTechnologies.some(
                  (item) => item.id === technology.id
                )}
                onAdd={handleAdd}
              />
            ))}
          </div>

          {/* Your Stack */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <YourStack
              selectedTechnologies={selectedTechnologies}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>

        </div>
      )}
    </section>
  );
};

export default Technology;