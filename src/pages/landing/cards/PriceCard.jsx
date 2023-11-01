import React, { useState } from "react";
import { Card, List, Button } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";


// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     // We don't want to let default form submission happen here,
//     // which would refresh the page.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js hasn't yet loaded.
//       // Make sure to disable form submission until Stripe.js has loaded.
//       return;
//     }

//     const result = await stripe.confirmPayment({
//       //`Elements` instance that was used to create the Payment Element
//       elements,
//       confirmParams: {
//         return_url: "https://example.com/order/123/complete",
//       },
//     });

//     if (result.error) {
//       // Show error to your customer (for example, payment details incomplete)
//       console.log(result.error.message);
//     } else {
//       // Your customer will be redirected to your `return_url`. For some payment
//       // methods like iDEAL, your customer will be redirected to an intermediate
//       // site first to authorize the payment, then redirected to the `return_url`.
//     }
//   };

// const onToken = (token) => {
//   console.log(token); 
// }


const PriceCard = () => {


  const features1 = [
    { feature: "Registration", available: true },
    { feature: "Post advertisement (2 per month)", available: true },
    { feature: "Recommend Candidates", available: false },
    { feature: "Manage Assignments", available: false },
    { feature: "Post Events", available: false },
  ];

  const features2 = [
    { feature: "Registration", available: true },
    { feature: "Post advertisement (5 per month)", available: true },
    { feature: "Recommend Candidates", available: true },
    { feature: "Manage Assignments", available: true },
    { feature: "Post Events", available: true },
  ];

  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);

  const handleHover1 = () => {
    setHovered1(true);
  };

  const handleHover2 = () => {
    setHovered2(true);
  };

  const handleLeave1 = () => {
    setHovered1(false);
  };

  const handleLeave2 = () => {
    setHovered2(false);
  };
  const onToken = (token) =>{
    console.log(token);}

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>Choose the plan that fits your needs.</h1>
      <div style={cardsContainerStyles}>
        <Card
          title="Free Plan"
          style={{
            ...cardStyles,
            boxShadow: isHovered1
              ? "0 8px 16px rgba(0, 0, 0, 0.2)"
              : "0 4px 8px rgba(0, 0, 0, 0.1)",
            transform: isHovered1 ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={handleHover1}
          onMouseLeave={handleLeave1}
        >
          <p>Price: $0/month</p>
          <h3>Key Features</h3>
          <List
            dataSource={features1}
            renderItem={(item) => (
              <List.Item style={itemStyles}>
                {item.available ? (
                  <CheckCircleOutlined
                    style={{ color: "green", marginRight: 8 }}
                  />
                ) : (
                  <CloseCircleOutlined
                    style={{ color: "red", marginRight: 8 }}
                  />
                )}
                <span>{item.feature}</span>
              </List.Item>
            )}
          />
        </Card>

        <Card
          title="Premium Plan"
          style={{
            ...cardStyles,
            boxShadow: isHovered2
              ? "0 8px 16px rgba(0, 0, 0, 0.2)"
              : "0 4px 8px rgba(0, 0, 0, 0.1)",
            transform: isHovered2 ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={handleHover2}
          onMouseLeave={handleLeave2}
        >
          <p>Price: $5/month</p>
          <h3>Key Features</h3>
          <List
            dataSource={features2}
            renderItem={(item) => (
              <List.Item style={itemStyles}>
                {item.available ? (
                  <CheckCircleOutlined
                    style={{ color: "green", marginRight: 8 }}
                  />
                ) : (
                  <CloseCircleOutlined
                    style={{ color: "red", marginRight: 8 }}
                  />
                )}
                <span>{item.feature}</span>
              </List.Item>
            )}
          />
          <div style={buttonsContainerStyles}>

            <Button type="primary">Subcribe now</Button>                  
          </div>
        </Card>
      </div>
    </div>
  );
};

const containerStyles = {
  textAlign: "center",
  fontFamily: "Helvetica",
  color: "#111019",
};

const headingStyles = {
  fontSize: "50px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "65.104px",
  letterSpacing: "-2.955px",
};

const cardsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const cardStyles = {
  width: 300,
  margin: "0 16px",
  textAlign: "left",
  borderRadius: "8px",
  padding: "16px",
  transition: "box-shadow 0.3s ease, transform 0.3s ease", // Add transition for smoother hover effect
  cursor: "pointer", // Change cursor on hover
};

const itemStyles = {
  display: "flex",
  alignItems: "center",
  marginBottom: "8px", // Add some spacing between list items
  justifyContent: "flex-start", // Align list items to the left
};

const buttonsContainerStyles = {
  marginTop: "16px", // Add some spacing between features and buttons
  display: "flex",
  justifyContent: "center",
};

export default PriceCard;
