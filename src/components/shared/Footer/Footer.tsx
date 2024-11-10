const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="p-5 md:p-20">
        <div className="mx-auto grid w-fit md:grid-cols-4 md:gap-x-20">
          <div>
            <p className="text-2xl font-semibold">My Account</p>
            <div className="my-4 space-y-2">
              <p>v 184 Main Rd E, St Albans VIC 3021</p>
              <p>Email Us: yourmail@gmail.com </p>
              <p>Phone: + 00 254 254565 54</p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-semibold">Categories</p>
            <div className="my-4 space-y-2">
              <p>Gym & Training</p>
              <p>Football </p>
              <p>BasketBall</p>
              <p>Nike Shoes</p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-semibold">Information</p>
            <div className="my-4 space-y-2">
              <p>About Sports Commerce</p>
              <p>Careers </p>
              <p>Investors</p>
              <p>Sustainability</p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">Quick Links</p>
            <div className="my-4 space-y-2">
              <p>Help</p>
              <p>Order Status </p>
              <p>Delivery</p>
              <p>Payment Options</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-400/50 p-3">
        <p className="text-center text-lg">
          This microservices e-commerce web app is built by{" "}
          <span className="font-semibold uppercase">md. ibrahim hafeez</span>{" "}
          &#169;2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
