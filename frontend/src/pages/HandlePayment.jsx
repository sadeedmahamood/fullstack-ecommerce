const handlePayment = async () => {

  try {

    // CREATE ORDER
    const order = await checkoutOrder(formData);

    console.log("ORDER RESPONSE:", order);

    // RAZORPAY OPTIONS
    const options = {

      key: order.key,

      amount: order.amount,

      currency: "INR",

      name: "Modern Store",

      description: "Premium Ecommerce Payment",

      order_id: order.razorpay_order_id,

      handler: async function (response) {

        try {

          // VERIFY PAYMENT
          await verifyPayment({

            razorpay_order_id:
              response.razorpay_order_id,

            razorpay_payment_id:
              response.razorpay_payment_id,

            razorpay_signature:
              response.razorpay_signature,

          });

          alert("Payment Successful");

          navigate("/order-success");

        } catch (err) {

          console.error("VERIFY ERROR:", err);

          console.log("VERIFY RESPONSE:", err.response);

          alert(
            JSON.stringify(
              err.response?.data || err.message,
              null,
              2
            )
          );

        }

      },

      prefill: {
        name: "Customer",
        email: "customer@example.com",
      },

      theme: {
        color: "#ef4444",
      },

    };

    // OPEN RAZORPAY
    const razorpay = new window.Razorpay(options);

    razorpay.open();

  } catch (err) {

    console.error("CHECKOUT ERROR:", err);

    console.log("FULL RESPONSE:", err.response);

    alert(
      JSON.stringify(
        err.response?.data || err.message,
        null,
        2
      )
    );

  }

};