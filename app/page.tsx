"use client";
import React, { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { PlusCircle } from "lucide-react";
import { defaultTemplates } from "./data";
import BoardColumn from "./components/BoardColumn";

export default function KanbanPage() {
  type BoardKey = keyof typeof defaultTemplates;
  const [currentBoardKey, setCurrentBoardKey] = useState<BoardKey>("AWS");
  const [board, setBoard] = useState(defaultTemplates[currentBoardKey]);
  useEffect(() => {
    const saved = localStorage.getItem("kanban-board");
    if (saved) {
      setBoard(JSON.parse(saved));
    }
  }, [currentBoardKey]);

  console.log("Current Board:", board);

  const [newCardTitle, setNewCardTitle] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("backlog");

  useEffect(() => {
    localStorage.setItem("kanban-board", JSON.stringify(board));
  }, [board]);

  function switchBoard(key) {
    setCurrentBoardKey(key);
    setBoard(defaultTemplates[key]);
    setSelectedColumn("backlog");
  }

  function onDragEnd(result) {
    const { destination, source } = result;
    if (!destination) return;
    const sourceCol = { ...board[source.droppableId] };
    const destCol = { ...board[destination.droppableId] };
    const [moved] = sourceCol.items.splice(source.index, 1);
    destCol.items.splice(destination.index, 0, moved);
    setBoard({
      ...board,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol,
    });
  }

  function addCard() {
    if (!newCardTitle.trim()) return;
    const id = `${currentBoardKey.toLowerCase()}-task-${Date.now()}`;
    const item = { id, title: newCardTitle.trim() };
    const col = {
      ...board[selectedColumn],
      items: [item, ...board[selectedColumn].items],
    };
    setBoard({ ...board, [selectedColumn]: col });
    setNewCardTitle("");
  }

  function deleteCard(colId: number, itemId: number) {
    const col = {
      ...board[colId],
      items: board[colId].items.filter((i: number) => i.id !== itemId),
    };
    setBoard({ ...board, [colId]: col });
  }

  function editCard(colId, itemId) {
    const newTitle = prompt("Edit task title");
    if (newTitle === null) return;
    const col = {
      ...board[colId],
      items: board[colId].items.map((i) =>
        i.id === itemId ? { ...i, title: newTitle } : i
      ),
    };
    setBoard({ ...board, [colId]: col });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <h1 className="text-3xl font-bold text-blue-800">
            Learning Kanban Tracker
          </h1>
          <div className="flex flex-wrap gap-2">
            {Object.keys(defaultTemplates).map((key) => (
              <button
                key={key}
                onClick={() => switchBoard(key)}
                className={`px-4 py-1 rounded-full border ${
                  currentBoardKey === key
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </header>

        <div className="flex flex-wrap gap-2 mb-4">
          <select
            className="border rounded px-2 py-1"
            value={selectedColumn}
            onChange={(e) => setSelectedColumn(e.target.value)}
          >
            {Object.values(board).map((col) => (
              <option key={col.id} value={col.id}>
                {col.title}
              </option>
            ))}
          </select>
          <input
            value={newCardTitle}
            onChange={(e) => setNewCardTitle(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addCard()}
            placeholder="New task title"
            className="border rounded px-3 py-1 w-64"
          />
          <button
            onClick={addCard}
            className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            <PlusCircle size={16} /> Add
          </button>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(board).map((col) => (
              <BoardColumn
                key={col.id}
                column={col}
                deleteCard={deleteCard}
                editCard={editCard}
              />
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
