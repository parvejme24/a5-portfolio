export default function ContactForm() {
  return (
    <div className="bg-white/5 dark:bg-[#140C15]/50 bg-backdrop-blur-lg px-10 py-14 border border-[#9515C1] rounded-3xl shadow-lg">
      <h3 className="text-2xl text-center mb-10 font-bold bg-gradient-to-r from-[#E58FFF] to-[#8A4FFF] text-transparent bg-clip-text">
        Reach Me
      </h3>
      <form className="space-y-5">
        {[
          {
            label: "Full Name",
            type: "text",
            name: "fullName",
            placeholder: "Enter your name",
          },
          {
            label: "Email",
            type: "email",
            name: "email",
            placeholder: "Enter Your Email",
          },
          {
            label: "Phone Number",
            type: "number",
            name: "phoneNumber",
            placeholder: "01xxxxxxxxx",
          },
        ].map((field, index) => (
          <div key={index}>
            <label className="block ml-1 mb-1">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="px-6 py-2 rounded-full border border-gray-300 w-full"
            />
          </div>
        ))}
        <input
          type="button"
          value="Submit"
          className="w-full px-6 py-2 rounded-full bg-gradient-to-b from-[#E58FFF] to-[#8A4FFF] cursor-pointer"
        />
      </form>
    </div>
  );
}
