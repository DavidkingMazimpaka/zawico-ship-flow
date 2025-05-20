
const LiveChat = () => {
  const whatsappNumbers = [
    { number: "971527629909", label: "UAE" },
    { number: "250789837250", label: "Rwanda" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {whatsappNumbers.map((contact, index) => (
        <a
          key={index}
          href={`https://wa.me/${contact.number}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-all group"
          aria-label={`WhatsApp ${contact.label}`}
        >
          <img 
            src="/lovable-uploads/f4c6b092-52ea-4af4-92d2-4b96295d22d3.png" 
            alt="WhatsApp" 
            width="24" 
            height="24" 
            className="min-w-[24px]"
          />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out whitespace-nowrap">
            {contact.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default LiveChat;
