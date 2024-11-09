const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="p-20">
        <div className="grid grid-cols-4 gap-x-20 w-fit mx-auto">
          <div>
            <p className="text-2xl font-semibold">My Account</p>
            <div className="space-y-2 my-4">
              <p>v 184 Main Rd E, St Albans VIC 3021</p>
              <p>Email Us: yourmail@gmail.com </p>
              <p>Phone: + 00 254 254565 54</p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-semibold">Categories</p>
            <div className="space-y-2 my-4">
              <p>Gym & Training</p>
              <p>Football </p>
              <p>BasketBall</p>
              <p>Nike Shoes</p>
            </div>
          </div>

          <div>
            <p className="text-2xl font-semibold">Information</p>
            <div className="space-y-2 my-4">
              <p>About Sports Commerce</p>
              <p>Careers </p>
              <p>Investors</p>
              <p>Sustainability</p>
            </div>
          </div>
          <div>
            <p className="text-2xl font-semibold">Quick Links</p>
            <div className="space-y-2 my-4">
              <p>Help</p>
              <p>Order Status </p>
              <p>Delivery</p>
              <p>Payment Options</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 bg-gray-400/50">
        <p className="text-center text-lg">
          This microservices e-commerce web app is built by{" "}
          <span className="uppercase font-semibold">md. ibrahim hafeez</span>
          {" "} &#169;2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
