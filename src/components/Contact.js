const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl m-4 p-4">Contact Us</h1>
      <form action="">
        <input
          className="border border-black p-2 m-2 "
          type="text"
          placeholder="Name"
        />
        <input
          className="border border-black p-2 m-2 "
          type="text"
          placeholder="Message"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lgs ">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
