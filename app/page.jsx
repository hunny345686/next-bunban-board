"use client";
import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Target,
  User,
  Code,
  Cloud,
  Brain,
  BookOpen,
  CheckCircle,
  AlertCircle,
  Star,
  Filter,
  Search,
  Plus,
  MoreHorizontal,
  Tag,
  Zap,
  TrendingUp,
} from "lucide-react";

const AdvancedKanbanBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWeek, setSelectedWeek] = useState("all");
  const [draggedTask, setDraggedTask] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [selectedTaskDetails, setSelectedTaskDetails] = useState(null);

  // Initialize tasks
  useEffect(() => {
    const initialTasks = [
      // Week 1 Tasks
      {
        id: "react-w1-1",
        title: "Next.js 14 Project Setup",
        description: "Initialize AI Task Manager with App Router",
        category: "react",
        week: 1,
        priority: "high",
        difficulty: "medium",
        estimatedHours: 3,
        actualHours: 0,
        status: "todo",
        subtasks: [
          "Create Next.js 14 project with App Router",
          "Setup Tailwind CSS and basic styling",
          "Configure TypeScript and ESLint",
          "Create basic folder structure",
        ],
        resources: ["Next.js Documentation", "Tailwind CSS Guide"],
        dueDate: "2025-08-21",
        tags: ["setup", "foundation"],
      },
      {
        id: "dsa-w1-1",
        title: "Arrays & Two Pointers",
        description:
          "Master basic array manipulation and two-pointer technique",
        category: "dsa",
        week: 1,
        priority: "critical",
        difficulty: "easy",
        estimatedHours: 8,
        actualHours: 0,
        status: "todo",
        subtasks: [
          "Solve Two Sum problem",
          "Container With Most Water",
          "Remove Duplicates from Sorted Array",
          "Valid Palindrome",
          "Document patterns and solutions",
        ],
        resources: ["LeetCode Premium", "NeetCode YouTube"],
        dueDate: "2025-08-23",
        tags: ["fundamentals", "practice"],
      },
      {
        id: "aws-w1-1",
        title: "AWS Account & S3 Setup",
        description: "Create AWS account and deploy first static site",
        category: "aws",
        week: 1,
        priority: "medium",
        difficulty: "easy",
        estimatedHours: 2,
        actualHours: 0,
        status: "todo",
        subtasks: [
          "Create AWS Free Tier account",
          "Setup S3 bucket for static hosting",
          "Configure bucket policies",
          "Deploy a simple HTML page",
        ],
        resources: ["AWS Documentation", "AWS Free Tier Guide"],
        dueDate: "2025-08-22",
        tags: ["setup", "deployment"],
      },
      {
        id: "genai-w1-1",
        title: "OpenAI API Integration",
        description: "First AI integration in Task Manager",
        category: "genai",
        week: 1,
        priority: "high",
        difficulty: "medium",
        estimatedHours: 4,
        actualHours: 0,
        status: "todo",
        subtasks: [
          "Get OpenAI API key",
          "Create basic chat interface",
          "Implement task categorization with AI",
          "Handle API responses and errors",
        ],
        resources: ["OpenAI API Docs", "React Query Documentation"],
        dueDate: "2025-08-24",
        tags: ["ai", "integration"],
      },

      // Week 2 Tasks
      {
        id: "react-w2-1",
        title: "Server Components & Data Fetching",
        description: "Implement server-side rendering patterns",
        category: "react",
        week: 2,
        priority: "high",
        difficulty: "hard",
        estimatedHours: 6,
        actualHours: 0,
        status: "todo",
        subtasks: [
          "Convert components to Server Components",
          "Implement data fetching patterns",
          "Setup loading and error states",
          "Optimize bundle size",
        ],
        resources: ["Next.js App Router Guide", "React 18 Features"],
        dueDate: "2025-08-31",
        tags: ["ssr", "performance"],
      },
      {
        id: "dsa-w2-1",
        title: "String Manipulation & Sliding Window",
        description: "Master string problems and sliding window technique",
        category: "dsa",
        week: 2,
        priority: "critical",
        difficulty: "medium",
        estimatedHours: 10,
        actualHours: 0,
        status: "todo",
        subtasks: [
          "Longest Substring Without Repeating Characters",
          "Minimum Window Substring",
          "Group Anagrams",
          "Valid Anagram",
          "Longest Palindromic Substring",
        ],
        resources: ["LeetCode String Problems", "Algorithm Patterns Guide"],
        dueDate: "2025-08-30",
        tags: ["algorithms", "patterns"],
      },

      // Week 3-6 Tasks (abbreviated for space)
      {
        id: "project-w3-1",
        title: "Document Chat Platform - Backend Setup",
        description: "Build document processing backend with Lambda",
        category: "aws",
        week: 3,
        priority: "high",
        difficulty: "hard",
        estimatedHours: 12,
        actualHours: 0,
        status: "todo",
        subtasks: [
          "Create Lambda functions for document processing",
          "Setup API Gateway endpoints",
          "Implement file upload to S3",
          "Configure database connections",
        ],
        resources: ["AWS Lambda Guide", "Serverless Architecture"],
        dueDate: "2025-09-07",
        tags: ["backend", "serverless"],
      },
      {
        id: "genai-w4-1",
        title: "RAG Implementation",
        description: "Implement Retrieval-Augmented Generation",
        category: "genai",
        week: 4,
        priority: "high",
        difficulty: "hard",
        estimatedHours: 8,
        actualHours: 0,
        status: "todo",
        subtasks: [
          "Setup vector database (Pinecone)",
          "Implement document embeddings",
          "Create context retrieval system",
          "Build chat interface with context",
        ],
        resources: ["LangChain Documentation", "Vector Database Guide"],
        dueDate: "2025-09-14",
        tags: ["ai", "advanced"],
      },

      // Some completed examples
      {
        id: "setup-1",
        title: "Development Environment Setup",
        description: "Configure VS Code, Git, and essential tools",
        category: "setup",
        week: 0,
        priority: "high",
        difficulty: "easy",
        estimatedHours: 2,
        actualHours: 2,
        status: "done",
        subtasks: [
          "Install VS Code extensions",
          "Configure Git and GitHub",
          "Setup development tools",
        ],
        resources: ["VS Code Documentation"],
        dueDate: "2025-08-15",
        tags: ["setup"],
        completedDate: "2025-08-15",
      },
    ];

    setTasks(initialTasks);
  }, []);

  const columns = [
    {
      id: "todo",
      title: "To Do",
      color: "bg-gray-100",
      headerColor: "bg-gray-500",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      id: "in-progress",
      title: "In Progress",
      color: "bg-blue-100",
      headerColor: "bg-blue-500",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      id: "review",
      title: "Review",
      color: "bg-yellow-100",
      headerColor: "bg-yellow-500",
      icon: <AlertCircle className="h-4 w-4" />,
    },
    {
      id: "done",
      title: "Done",
      color: "bg-green-100",
      headerColor: "bg-green-500",
      icon: <CheckCircle className="h-4 w-4" />,
    },
  ];

  const categories = {
    react: {
      name: "React/Next.js",
      color: "bg-blue-500",
      icon: <Code className="h-3 w-3" />,
    },
    dsa: {
      name: "DSA",
      color: "bg-green-500",
      icon: <Target className="h-3 w-3" />,
    },
    aws: {
      name: "AWS",
      color: "bg-orange-500",
      icon: <Cloud className="h-3 w-3" />,
    },
    genai: {
      name: "Gen AI",
      color: "bg-purple-500",
      icon: <Brain className="h-3 w-3" />,
    },
    setup: {
      name: "Setup",
      color: "bg-gray-500",
      icon: <Star className="h-3 w-3" />,
    },
  };

  const priorityColors = {
    critical: "border-l-4 border-red-500 bg-red-50",
    high: "border-l-4 border-orange-500 bg-orange-50",
    medium: "border-l-4 border-yellow-500 bg-yellow-50",
    low: "border-l-4 border-green-500 bg-green-50",
  };

  const difficultyIcons = {
    easy: "🟢",
    medium: "🟡",
    hard: "🔴",
  };

  // Filter and search tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filter === "all" || task.category === filter;
    const matchesWeek =
      selectedWeek === "all" || task.week.toString() === selectedWeek;

    return matchesSearch && matchesCategory && matchesWeek;
  });

  // Calculate statistics
  const stats = {
    total: tasks.length,
    todo: tasks.filter((t) => t.status === "todo").length,
    inProgress: tasks.filter((t) => t.status === "in-progress").length,
    review: tasks.filter((t) => t.status === "review").length,
    done: tasks.filter((t) => t.status === "done").length,
    totalHours: tasks.reduce((sum, t) => sum + t.estimatedHours, 0),
    completedHours: tasks
      .filter((t) => t.status === "done")
      .reduce((sum, t) => sum + t.actualHours, 0),
  };

  // Drag and drop handlers
  const handleDragStart = (e, task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    if (draggedTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === draggedTask.id ? { ...task, status: newStatus } : task
        )
      );
      setDraggedTask(null);
    }
  };

  const TaskCard = ({ task }) => (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, task)}
      onClick={() => setSelectedTaskDetails(task)}
      className={`p-3 mb-3 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-all ${
        priorityColors[task.priority]
      } bg-white`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span
            className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white ${
              categories[task.category].color
            }`}
          >
            {categories[task.category].icon}
            <span className="ml-1">{categories[task.category].name}</span>
          </span>
          <span className="text-xs">W{task.week}</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>{difficultyIcons[task.difficulty]}</span>
          <MoreHorizontal className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Title and Description */}
      <h3 className="font-semibold text-sm text-gray-800 mb-1">{task.title}</h3>
      <p className="text-xs text-gray-600 mb-2 line-clamp-2">
        {task.description}
      </p>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Progress</span>
          <span>
            {task.subtasks.filter((st) => st.completed).length}/
            {task.subtasks.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-blue-500 h-1 rounded-full"
            style={{
              width: `${
                (task.subtasks.filter((st) => st.completed).length /
                  task.subtasks.length) *
                100
              }%`,
            }}
          ></div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-2">
        {task.tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 bg-gray-100 text-xs rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-2">
          <Clock className="h-3 w-3" />
          <span>{task.estimatedHours}h</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="h-3 w-3" />
          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Learning Progress Board
            </h1>
            <p className="text-gray-600">
              Track your multi-domain learning journey
            </p>
          </div>
          <button
            onClick={() => setShowAddTask(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Task
          </button>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="bg-gray-100 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-gray-800">
              {stats.total}
            </div>
            <div className="text-sm text-gray-600">Total Tasks</div>
          </div>
          <div className="bg-blue-100 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-800">
              {stats.inProgress}
            </div>
            <div className="text-sm text-blue-600">In Progress</div>
          </div>
          <div className="bg-green-100 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-800">
              {stats.done}
            </div>
            <div className="text-sm text-green-600">Completed</div>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-800">
              {stats.totalHours}
            </div>
            <div className="text-sm text-purple-600">Total Hours</div>
          </div>
          <div className="bg-orange-100 p-3 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-800">
              {Math.round((stats.done / stats.total) * 100)}%
            </div>
            <div className="text-sm text-orange-600">Completion</div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm"
          >
            <option value="all">All Categories</option>
            <option value="react">React/Next.js</option>
            <option value="dsa">DSA</option>
            <option value="aws">AWS</option>
            <option value="genai">Gen AI</option>
          </select>

          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(e.target.value)}
            className="px-3 py-2 border rounded-lg text-sm"
          >
            <option value="all">All Weeks</option>
            {[1, 2, 3, 4, 5, 6].map((week) => (
              <option key={week} value={week}>
                Week {week}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-4 gap-6">
        {columns.map((column) => (
          <div
            key={column.id}
            className="bg-white rounded-lg shadow-sm"
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, column.id)}
          >
            {/* Column Header */}
            <div
              className={`${column.headerColor} text-white p-4 rounded-t-lg`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {column.icon}
                  <h2 className="font-semibold">{column.title}</h2>
                </div>
                <span className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm">
                  {
                    filteredTasks.filter((task) => task.status === column.id)
                      .length
                  }
                </span>
              </div>
            </div>

            {/* Tasks */}
            <div className="p-4 min-h-96 max-h-96 overflow-y-auto">
              {filteredTasks
                .filter((task) => task.status === column.id)
                .map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Task Details Modal */}
      {selectedTaskDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {selectedTaskDetails.title}
                </h2>
                <p className="text-gray-600 mt-1">
                  {selectedTaskDetails.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedTaskDetails(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Category:
                </span>
                <div className="mt-1">
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white ${
                      categories[selectedTaskDetails.category].color
                    }`}
                  >
                    {categories[selectedTaskDetails.category].icon}
                    <span className="ml-1">
                      {categories[selectedTaskDetails.category].name}
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Priority:
                </span>
                <div className="mt-1 text-sm capitalize">
                  {selectedTaskDetails.priority}
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Estimated Hours:
                </span>
                <div className="mt-1 text-sm">
                  {selectedTaskDetails.estimatedHours}h
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Due Date:
                </span>
                <div className="mt-1 text-sm">
                  {new Date(selectedTaskDetails.dueDate).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700 mb-2 block">
                Subtasks:
              </span>
              <div className="space-y-2">
                {selectedTaskDetails.subtasks.map((subtask, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      defaultChecked={subtask.completed}
                    />
                    <span className="text-sm text-gray-700">{subtask}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="text-sm font-medium text-gray-700 mb-2 block">
                Resources:
              </span>
              <div className="space-y-1">
                {selectedTaskDetails.resources.map((resource, idx) => (
                  <div key={idx} className="text-sm text-blue-600">
                    • {resource}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedKanbanBoard;
