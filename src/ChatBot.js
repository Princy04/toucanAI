import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatBot from "react-simple-chatbot";
import styled from "styled-components";
import steps from "./steps";
import { Button } from "@material-ui/core";

const ChatBotComponent = () => {
  const backURL =
    "https://thermelgy-service-4oevwyecva-uc.a.run.app/api/genericApi";
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [rooms, setRooms] = useState();
  const [days, setDays] = useState();
  const [hotel, setHotel] = useState("");

  useEffect(() => {
    if (email) {
      requestServer();
    }
  }, [email]);

  const CustomOptions = ({ triggerNextStep }) => {
    return (
      <>
        <Button
          style={{
            backgroundColor: "#6E48AA",
            color: "#fff",
            height: "18%",
            fontSize: "10px",
            width: "auto",
            marginTop: "15px",
            borderRadius: "20px",
          }}
          variant="contained"
          onClick={() => triggerNextStep({ trigger: "11" })}
          //setHotel("Hyatt Regency")
        >
          Hyatt Regency
        </Button>
        <Button
          style={{
            backgroundColor: "#6E48AA",
            color: "#fff",
            height: "18%",
            width: "auto",
            marginTop: "15px",
            borderRadius: "20px",
            marginLeft: "2%",
            fontSize: "10px",
          }}
          variant="contained"
          onClick={() => triggerNextStep({ trigger: "11" })}
          // setHotel("Park Hyatt"))}
        >
          Park Hyatt
        </Button>
      </>
    );
  };

  const CustomDates = ({ triggerNextStep }) => {
    return (
      <>
        <Button
          style={{
            backgroundColor: "#6E48AA",
            color: "#fff",
            height: "18%",
            fontSize: "10px",
            width: "auto",
            marginTop: "15px",
            borderRadius: "20px",
          }}
          variant="contained"
          onClick={() => triggerNextStep({ trigger: "15" })}
        >
          Sep 30
        </Button>
        <Button
          style={{
            backgroundColor: "#6E48AA",
            color: "#fff",
            height: "18%",
            width: "auto",
            marginTop: "15px",
            borderRadius: "20px",
            marginLeft: "2%",
            fontSize: "10px",
          }}
          variant="contained"
          onClick={() => triggerNextStep({ trigger: "15" })}
        >
          Oct 1
        </Button>

        <Button
          style={{
            backgroundColor: "#6E48AA",
            color: "#fff",
            height: "18%",
            width: "auto",
            marginTop: "15px",
            borderRadius: "20px",
            marginLeft: "2%",
            fontSize: "10px",
          }}
          variant="contained"
          onClick={() => triggerNextStep({ trigger: "15" })}
        >
          Oct 2
        </Button>
      </>
    );
  };

  const requestServer = () => {
    let host = backURL;
    let payload = {
      api_name: "chatbotsendEmail",
      data: {
        hotel_name: "Hyatt Hotels",
        date: "26-08-21",
        stay: days,
        rooms: rooms,
        name: name,
        email: email,
      },
    };
    axios.post(host, JSON.stringify(payload), {
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });
  };

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
      message:
        "Would you like to make a reservation in one of our property?  🤷",
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
          label: "What properties do you have available ?",
          trigger: "6",
        },
      ],
    },
    {
      id: "5",
      message: "Thank you for choosing Hyatt Hotel Group.🏢",
      trigger: "6",
    },
    {
      id: "6",
      message: "Please tell me which hotel would you like to reserve? ✍",
      trigger: "9",
    },
    {
      id: "7",
      message: "We have good news for you.😊",
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
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/96/9e/d1/park-hyatt-chennai.jpg?w=900&h=-1&s=1"
            }
          />
        </div>
      ),
      trigger: "hotel_options",
    },
    {
      id: "hotel_options",
      // options: [
      //   {
      //     value: "Hyatt Regency",
      //     label: "Hyatt Regency",
      //     trigger: "11",
      //   },
      //   {
      //     value: "Park Hyatt",
      //     label: "Park Hyatt",
      //     trigger: "11",
      //   },
      // ],
      component: <CustomOptions />,
    },
    {
      id: "11",
      message: "Thank you for choosing {previousValue} 😊.",
      trigger: "13",
    },
    {
      id: "13",
      message: "To check availability please enter your arrival date. 📆",
      trigger: "14",
    },
    { id: "14", component: <CustomDates /> },
    {
      id: "15",
      message: "And how many nights you'll be staying? 🌜",
      trigger: "16",
    },
    {
      id: "16",
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return "Please enter number";
        }
        setDays(value);
        return true;
      },
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
      validator: (value) => {
        if (isNaN(value)) {
          return "Please enter number";
        }
        setRooms(value);
        return true;
      },
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
      validator: (value) => {
        let re = /^[a-zA-Z]+$/;
        let result = re.test(value);
        if (result) {
          setName(value);
          return true;
        }
        return "Please enter valid name";
      },
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
          setEmail(value);
          return true;
        }
        return "Please enter valid email";
      },
      user: true,
      trigger: "31",
    },
    {
      id: "31",
      message: "Thank you for your time " + `${name}` + "⌚",
      trigger: "32",
    },
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
  console.log("email", email);
  return (
    <>
      <div>Toucan AI ChatBot</div>
      <ChatBot botDelay={1500} steps={steps} floating={true} opened={open} />
    </>
  );
};

export default ChatBotComponent;
