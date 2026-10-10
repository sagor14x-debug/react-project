import { FiX } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import type { Technology } from "../assets/types/technology";


interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Your Stack
          </h3>

          <p className="mt-1 text-[10px] text-gray-400">
            {selectedTechnologies.length} technologies selected
          </p>
        </div>

        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-700">
          {selectedTechnologies.length}
        </span>
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-gray-200 p-5 text-center">
          <p className="text-xs text-gray-400">
            Your stack is empty.
          </p>

          <p className="mt-1 text-[10px] text-gray-400">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Items */}
          <div className="mt-5 space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-lg border border-gray-100 p-2"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-7 w-7 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <h4 className="truncate text-xs font-semibold text-gray-800">
                    {technology.name}
                  </h4>

                  <div className="mt-1 flex items-center gap-1 text-[9px] text-gray-400">
                    <FaStar className="text-yellow-400" />
                    {technology.rating}
                  </div>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="cursor-pointer rounded p-1 text-gray-400 transition hover:bg-gray-100 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  <FiX className="text-sm" />
                </button>
              </div>
            ))}
          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-4 w-full cursor-pointer rounded-md border border-red-200 py-2 text-[10px] font-medium text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
};

export default YourStack;