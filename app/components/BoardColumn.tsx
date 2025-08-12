import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Edit, Trash } from "lucide-react";
import Modal from "./DeatilModal";
import { useState } from "react";

export default function BoardColumn({ column, deleteCard, editCard }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-3 h-[75vh] flex flex-col border-t-4 border-blue-400">
      <h2 className="font-semibold mb-3 flex items-center justify-between text-blue-700">
        <span>{column.title}</span>
        <span className="text-xs text-slate-500">{column.items.length}</span>
      </h2>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex-1 overflow-auto p-1 rounded transition-all ${
              snapshot.isDraggingOver ? "bg-blue-50" : ""
            }`}
          >
            {column.items.map((item, idx) => (
              <Draggable key={item.id} draggableId={item.id} index={idx}>
                {(prov, snap) => (
                  <div
                    ref={prov.innerRef}
                    {...prov.draggableProps}
                    {...prov.dragHandleProps}
                    onClick={() => handleCardClick(item)}
                    className={`${
                      column.title == "Backlog"
                        ? "bg-slate-100"
                        : column.title == "In Progress"
                        ? "bg-amber-50"
                        : "bg-emerald-50"
                    } border rounded-lg p-3 mb-2 shadow-sm flex items-start gap-3 cursor-grab ${
                      snap.isDragging ? "scale-105 shadow-lg bg-blue-100" : ""
                    }`}
                  >
                    <div className="flex-1">
                      <div className="font-medium text-slate-800">
                        {item.title}
                      </div>
                      <div className="font-sm text-slate-500">{item.desc}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => editCard(column.id, item.id)}
                        className="text-xs px-2 py-1 border rounded hover:bg-blue-50 flex items-center gap-1"
                      >
                        <Edit size={14} />
                      </button>
                      <button
                        onClick={() => deleteCard(column.id, item.id)}
                        className="text-xs px-2 py-1 border rounded text-red-600 hover:bg-red-50 flex items-center gap-1"
                      >
                        <Trash size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {isModalOpen && (
        <Modal item={selectedItem} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
