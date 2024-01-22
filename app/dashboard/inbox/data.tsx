export const mails = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "John Doe",
    email: "johndoe@financialservices.com",
    subject: "Portfolio Review Appointment",
    text: "Dear valued client, I have reviewed your portfolio and would like to schedule a meeting to discuss potential adjustments based on recent market developments. Please let me know a convenient time for you.\n\nBest regards, John Doe",
    date: "2024-01-22T09:00:00",
    read: true,
    labels: ["client", "appointment"],
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Jane Smith",
    email: "janesmith@financialservices.com",
    subject: "Investment Opportunity",
    text: "Dear [Client Name], I've come across an investment opportunity that aligns with your risk profile and investment goals. I would like to discuss it with you at your earliest convenience. Attached is the summary of the opportunity.\n\nBest regards, Jane Smith",
    date: "2024-01-22T10:30:00",
    read: true,
    labels: ["client", "investment"],
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    name: "Edward Johnson",
    email: "edwardjohnson@financialservices.com",
    subject: "Retirement Plan Update",
    text: "Hello [Client Name], I've updated your retirement plan based on the latest changes in your financial situation. Please review the attached document and let me know if you have any questions or concerns.\n\nBest, Edward Johnson",
    date: "2024-01-22T11:45:00",
    read: true,
    labels: ["client", "retirement"],
  },
  {
    id: "61c35085-72d7-42b4-8d62-738f700d4b92",
    name: "Emily Davis",
    email: "emilydavis@financialservices.com",
    subject: "Annual Tax Planning",
    text: "Dear [Client Name], As we approach the end of the fiscal year, it's time to start planning for taxes. I have some strategies in mind that could be beneficial for your situation. Let's schedule a meeting to discuss.\n\nKind regards, Emily Davis",
    date: "2024-01-22T13:15:00",
    read: false,
    labels: ["client", "tax"],
  },
  {
    id: "8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97",
    name: "Michael Wilson",
    email: "michaelwilson@financialservices.com",
    subject: "Quarterly Performance Report",
    text: "Hello [Client Name], Your quarterly performance report is ready for review. I've attached the report along with some notes on the performance of your investments. Please let me know if you would like to discuss in detail.\n\nRegards, Michael Wilson",
    date: "2024-01-22T15:00:00",
    read: false,
    labels: ["client", "report"],
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    name: "Sophia Martinez",
    email: "sophiamartinez@financialservices.com",
    subject: "Re: Investment Portfolio Adjustment",
    text: "Dear [Client Name], Following our recent discussion, I have made the adjustments to your investment portfolio to better align with the changing market conditions. Please find the details attached and let me know if we can go over them together.\n\nBest, Sophia Martinez",
    date: "2024-01-22T17:00:00",
    read: true,
    labels: ["client", "portfolio"],
  },
  {
    id: "c1a0ecb4-2540-49c5-86f8-21e5ce79e4e6",
    name: "Lucas Thompson",
    email: "lucasthompson@financialservices.com",
    subject: "Life Insurance Policy Review",
    text: "Hello [Client Name], It's time for our annual review of your life insurance policy. There have been some updates to our offerings that may interest you. Please reply with a time that works for you to discuss.\n\nRegards, Lucas Thompson",
    date: "2024-01-23T12:00:00",
    read: false,
    labels: ["client", "insurance"],
  },
  {
    id: "ba54eefd-4097-4949-99f2-2a9ae4d1a836",
    name: "Emma Clark",
    email: "emmaclark@financialservices.com",
    subject: "Updated Financial Plan",
    text: "Dear [Client Name], I've updated your financial plan with the new data you provided. I believe these changes will position us well for the upcoming year. Let's discuss the updates in detail during our next meeting.\n\nBest wishes, Emma Clark",
    date: "2024-01-24T13:30:00",
    read: true,
    labels: ["client", "planning"],
  },
  {
    id: "df09b6ed-28bd-4e0c-85a9-9320ec5179aa",
    name: "Oliver Harris",
    email: "oliverharris@financialservices.com",
    subject: "Charitable Giving Strategies",
    text: "Hello [Client Name], I've been exploring tax-efficient strategies for charitable giving that you may find beneficial. I would like to discuss how this can fit into your overall financial strategy. Let's arrange a call next week to go over this.\n\nKind regards, Oliver Harris",
    date: "2024-01-25T15:45:00",
    read: false,
    labels: ["client", "strategy"],
  },
  {
    id: "d67c1842-7f8b-4b4b-9be1-1b3b1ab4611d",
    name: "Ava Taylor",
    email: "avataylor@financialservices.com",
    subject: "Estate Planning Consultation",
    text: "Dear [Client Name], I would like to schedule a consultation to discuss your current estate planning needs. It's important to regularly review and update your plan, and I'm here to assist you with this process.\n\nPlease let me know your availability.\n\nBest, Ava Taylor",
    date: "2024-01-26T16:45:00",
    read: true,
    labels: ["client", "estate"],
  },
  {
    id: "6c9a7f94-8329-4d70-95d3-51f68c186ae1",
    name: "Noah Wilson",
    email: "noahwilson@financialservices.com",
    subject: "Market Volatility and Your Investments",
    text: "Hi [Client Name], In light of the recent market volatility, I would like to review your investment portfolio to ensure it remains aligned with your risk tolerance and investment objectives. Please contact me to schedule a meeting.\n\nWarm regards, Noah Wilson",
    date: "2024-01-27T17:30:00",
    read: false,
    labels: ["client", "market"],
  },
  // Add more email entries as needed
]

export type Mail = (typeof mails)[number]

export const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@gmail.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@me.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export type Account = (typeof accounts)[number]

export const contacts = [
  {
    name: "Emma Johnson",
    email: "emma.johnson@example.com",
  },
  {
    name: "Liam Wilson",
    email: "liam.wilson@example.com",
  },
  {
    name: "Olivia Davis",
    email: "olivia.davis@example.com",
  },
  {
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
  },
  {
    name: "Ava Taylor",
    email: "ava.taylor@example.com",
  },
  {
    name: "Lucas Brown",
    email: "lucas.brown@example.com",
  },
  {
    name: "Sophia Smith",
    email: "sophia.smith@example.com",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
  },
  {
    name: "Isabella Jackson",
    email: "isabella.jackson@example.com",
  },
  {
    name: "Mia Clark",
    email: "mia.clark@example.com",
  },
  {
    name: "Mason Lee",
    email: "mason.lee@example.com",
  },
  {
    name: "Layla Harris",
    email: "layla.harris@example.com",
  },
  {
    name: "William Anderson",
    email: "william.anderson@example.com",
  },
  {
    name: "Ella White",
    email: "ella.white@example.com",
  },
  {
    name: "James Thomas",
    email: "james.thomas@example.com",
  },
  {
    name: "Harper Lewis",
    email: "harper.lewis@example.com",
  },
  {
    name: "Benjamin Moore",
    email: "benjamin.moore@example.com",
  },
  {
    name: "Aria Hall",
    email: "aria.hall@example.com",
  },
  {
    name: "Henry Turner",
    email: "henry.turner@example.com",
  },
  {
    name: "Scarlett Adams",
    email: "scarlett.adams@example.com",
  },
]

export type Contact = (typeof contacts)[number]
