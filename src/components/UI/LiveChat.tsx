
const LiveChat = () => {
  const whatsappNumbers = [
    { number: "+250793903992" }
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
          aria-label={`WhatsApp}`}
        >
          <img 
            src="/lovable-uploads/f4c6b092-52ea-4af4-92d2-4b96295d22d3.png" 
            alt="WhatsApp" 
            width="35" 
            height="35" 
            className="min-w-[24px]"
          />
        </a>
      ))}
    </div>
  );
};

export default LiveChat;
