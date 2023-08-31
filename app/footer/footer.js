function footer() {
  return (
    <div className="h-[600px] w-screen fixed inset-x-0 bottom-0 bg-black text-white flex justify-center p-[80px]">
      <div>
        <div className="w-full flex justify-between">
          <div>
            <div>Join our Newsletter</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <div>
              <input type="text" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
            <p>
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </div>
        </div>
        <div>middle</div>
        <div>bottom</div>
      </div>
    </div>
  );
}

export default footer;
