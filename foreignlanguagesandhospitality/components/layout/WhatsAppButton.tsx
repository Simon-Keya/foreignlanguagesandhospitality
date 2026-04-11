// src/components/common/WhatsAppButton.tsx

'use client';

export default function WhatsAppButton() {
  const phoneNumber = "254723104680"; // Replace with actual number if needed

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-3xl">💬</span>
      <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
        2
      </div>
    </button>
  );
}