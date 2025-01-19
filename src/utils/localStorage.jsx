import { data } from "autoprefixer";

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    firstname: "Aarav",
    taskSummary: { active: 2, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Monthly Report",
        description: "Compile and summarize monthly sales data.",
        taskDate: "2025-01-12",
        category: "Reporting",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Client Follow-up",
        description: "Contact 5 clients regarding project updates.",
        taskDate: "2025-01-13",
        category: "Client Relations",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Team Meeting Preparation",
        description: "Prepare agenda for weekly team meeting.",
        taskDate: "2025-01-10",
        category: "Meetings",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    firstname: "Isha",
    taskSummary: { active: 2, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Website Maintenance",
        description: "Fix bugs on the company website.",
        taskDate: "2025-01-12",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Documentation",
        description: "Revise product documentation with the latest changes.",
        taskDate: "2025-01-09",
        category: "Documentation",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Mockups",
        description: "Create new UI mockups for the upcoming feature.",
        taskDate: "2025-01-13",
        category: "Design",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    firstname: "Kabir",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Inventory Check",
        description: "Audit inventory levels and report discrepancies.",
        taskDate: "2025-01-10",
        category: "Inventory",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Market Research",
        description: "Analyze competitors and report trends.",
        taskDate: "2025-01-13",
        category: "Research",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Customer Survey",
        description: "Design and distribute customer satisfaction surveys.",
        taskDate: "2025-01-12",
        category: "Customer Feedback",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    firstname: "Nisha",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Software Update",
        description: "Install and configure the latest software updates.",
        taskDate: "2025-01-11",
        category: "IT Support",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Training Session",
        description: "Organize a training session on new tools.",
        taskDate: "2025-01-14",
        category: "Training",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Backup Data",
        description: "Ensure all critical data is backed up.",
        taskDate: "2025-01-10",
        category: "Data Management",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    firstname: "Arjun",
    taskSummary: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Social Media Campaign",
        description: "Plan and execute a social media marketing campaign.",
        taskDate: "2025-01-15",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Budget Review",
        description: "Review departmental budget and suggest optimizations.",
        taskDate: "2025-01-10",
        category: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Internal Audit",
        description: "Perform an internal compliance audit.",
        taskDate: "2025-01-13",
        category: "Audit",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}    

export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    return{employees,admin}
}

  
  