export const  jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    assessment: [
      {
        id: 1,
        type: "mcq",
        question: "Which frontend frameworks have you worked with?",
        options: ["React", "Vue", "Angular", "Svelte"],
      },
      {
        id: 2,
        type: "single",
        question: "How many years of React experience do you have?",
        options: ["0-1 years", "1-3 years", "3-5 years", "5+ years"],
      },
      {
        id: 3,
        type: "subjective",
        question: "Describe a project where you implemented a complex frontend feature.",
      },
    ],
  },
  {
    id: 2,
    title: "Backend Developer",
    assessment: [
      {
        id: 1,
        type: "single",
        question: "Which backend language are you strongest in?",
        options: ["Node.js", "Python", "Java", "Go"],
      },
      {
        id: 2,
        type: "mcq",
        question: "Which databases have you used?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      },
      {
        id: 3,
        type: "subjective",
        question: "Explain how you would optimize a slow API.",
      },
    ],
  },
  {
    id: 4,
    title: "SDE 1",
    assessment: [
      {
        id: 1,
        type: "mcq",
        question: "Which programming languages are you most comfortable with?",
        options: ["Java", "Python", "C++", "JavaScript"],
      },
      {
        id: 2,
        type: "single",
        question: "What is the time complexity of binary search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      },
      {
        id: 3,
        type: "subjective",
        question: "Explain how you would detect and fix a memory leak in a program.",
      },
    ],
  },
  {
    id: 5,
    title: "SDE 2",
    assessment: [
      {
        id: 1,
        type: "mcq",
        question: "Which system design concepts are you familiar with?",
        options: ["Load Balancing", "Caching", "Database Sharding", "Microservices"],
      },
      {
        id: 2,
        type: "single",
        question: "Which of these is a distributed consensus algorithm?",
        options: ["DFS", "Raft", "Greedy", "Binary Search"],
      },
      {
        id: 3,
        type: "subjective",
        question: "Design a URL shortener (like bit.ly). Explain the architecture and trade-offs.",
      },
    ],
  },
  {
    id: 6,
    title: "Aptitude Test",
    assessment: [
      {
        id: 1,
        type: "mcq",
        question: "Find the missing number in the series: 2, 4, 8, 16, ?",
        options: ["18", "24", "32", "64"],
      },
      {
        id: 2,
        type: "single",
        question:
          "If a train runs at 60 km/h and crosses a pole in 30 seconds, what is its length?",
        options: ["250 m", "300 m", "500 m", "600 m"],
      },
      {
        id: 3,
        type: "subjective",
        question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
      },
    ],
  },
  {
    id: 7,
    title: "Communication Skills",
    assessment: [
      {
        id: 1,
        type: "subjective",
        question: "Introduce yourself in 2-3 sentences highlighting your strengths.",
      },
      {
        id: 2,
        type: "mcq",
        question: "Which of the following improves professional communication?",
        options: [
          "Active listening",
          "Interrupting often",
          "Using jargon",
          "Avoiding eye contact",
        ],
      },
      {
        id: 3,
        type: "single",
        question: "How would you rate your public speaking skills?",
        options: ["Beginner", "Intermediate", "Advanced"],
      },
    ],
  },
  {
    id: 9,
    title: "Group Discussion",
    assessment: [
      {
        id: 1,
        type: "subjective",
        question: "How would you ensure that everyone’s opinion is heard in a group?",
      },
      {
        id: 2,
        type: "mcq",
        question: "What qualities are important in a group discussion?",
        options: [
          "Listening skills",
          "Dominating the conversation",
          "Respecting others' views",
          "Clear communication",
        ],
      },
      {
        id: 3,
        type: "single",
        question: "In a heated debate, your first action should be?",
        options: [
          "Stay calm and listen",
          "Raise your voice",
          "Ignore others",
          "Walk away",
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Final HR",
    assessment: [
      {
        id: 1,
        type: "subjective",
        question: "Why do you want to join our company?",
      },
      {
        id: 2,
        type: "mcq",
        question: "What motivates you at work?",
        options: [
          "Challenging problems",
          "Growth opportunities",
          "Work-life balance",
          "Team culture",
        ],
      },
      {
        id: 3,
        type: "single",
        question: "Are you comfortable relocating if required?",
        options: ["Yes", "No"],
      },
    ],
  },
];