const steps = [
  {
    id: "1",
    message: "Welcome to Hyatt hotels Group 😊",
    trigger: "2",
  },
  {
    id: "2",
    message:
      "Where we put our full effort to make your stay comfortable, convenient and enjoyable. 👌",
    trigger: "3",
  },
  {
    id: "3",
    message: "Would you like to make a reservation in one of our property?  🤷",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      {
        value: 1,
        label: "Yes, I would like to make a reservation",
        trigger: "5",
      },
      {
        value: 2,
        label: "What all properties does your group have?",
        trigger: "6",
      },
    ],
  },
  {
    id: "5",
    message: "Thank you for choosing Transway Hotel Group. 🏢",
    trigger: "6",
  },
  {
    id: "6",
    message: "Please tell me which hotel would you like to reserve? ✍",
    trigger: "9",
  },
  {
    id: "7",
    message: "We have good news for you. 😊",
    trigger: "8",
  },
  {
    id: "8",
    message:
      "From budget-friendly to luxury properties we have everything that can suit your balance and requirement. 👑 💰 ",
    trigger: "9",
  },
  {
    id: "9",
    component: (
      <div>
        {" "}
        <img
          style={{ width: "200px", height: "200px" }}
          src={
            "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/07/02/1033/Grand-Hyatt-Kochi-Bolgatty-P058-Hotel-Facade.jpg/Grand-Hyatt-Kochi-Bolgatty-P058-Hotel-Facade.16x9.jpg"
          }
        />
      </div>
    ),
    trigger: "10",
  },
  {
    id: "10",
    options: [
      {
        value: 1,
        label: "Hyatt Regency",
        trigger: "11",
      },
      {
        value: 2,
        label: "Park Hyatt",
        trigger: "11",
      },
    ],
  },
  {
    id: "11",
    message: "Excellent choice. 👌",
    trigger: "12",
  },
  {
    id: "12",
    message: "Thank you for choosing.",
    trigger: "13",
  },
  {
    id: "13",
    message: "To check availability please enter your arrival date. 📆",
    trigger: "14",
  },
  { id: "14", user: true, trigger: "15" },
  {
    id: "15",
    message: "And how many nights you'll be staying? 🌜",
    trigger: "16",
  },
  {
    id: "16",
    user: true,
    trigger: "17",
  },
  {
    id: "17",
    message: "That's nice. 😊",
    trigger: "18",
  },
  {
    id: "18",
    message: "How many rooms would you like to book? ✍",
    trigger: "19",
  },
  {
    id: "19",
    user: true,
    trigger: "20",
  },
  {
    id: "20",
    message: "Thank you for sharing the information with me.",
    trigger: "21",
  },
  {
    id: "21",
    message: "May I know on which name would you like to have this booking?",
    trigger: "22",
  },
  {
    id: "22",
    user: true,
    trigger: "23",
  },
  {
    id: "23",
    message: "Thank you for your prompt response {previousValue}. ",
    trigger: "24",
  },
  {
    id: "24",
    message:
      "Is there any special request that you would like to add in your package? ⭐",
    trigger: "25",
  },
  {
    id: "25",
    options: [
      {
        value: 1,
        label: "Early Check-In",
        trigger: "26",
      },
      {
        value: 2,
        label: "Late Check-In",
        trigger: "26",
      },
      {
        value: 3,
        label: "Late Check-Out",
        trigger: "26",
      },
    ],
  },
  {
    id: "26",
    message:
      "Our executive will contact you for sharing an exclusive offer that is applicable for your booking.",
    trigger: "27",
  },
  {
    id: "27",
    message: "Which is the best phone number to reach you? ☎",
    trigger: "28",
  },
  {
    id: "28",
    user: true,
    validator: (value) => {
      if (isNaN(value)) {
        return "Please enter valid phone number";
      }
      return true;
    },
    trigger: "29",
  },
  {
    id: "29",
    message:
      "On which email address would you like to receive the billing details? 📧",
    trigger: "30",
  },
  {
    id: "30",
    validator: (value) => {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let result = re.test(String(value).toLowerCase());
      if (result) {
        return true;
      }
      return "Please enter valid email";
    },
    user: true,
    trigger: "31",
  },
  { id: "31", message: "Thank you for your time ⌚", trigger: "32" },
  {
    id: "32",
    message: "Hope you have a nice and pleasant stay at our hotel. 🙏",
    trigger: "33",
  },
  {
    id: "33",
    message: "See you soon. 👋",
    end: true,
  },
];

export default steps;
