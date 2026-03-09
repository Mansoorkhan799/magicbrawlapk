export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-[#FFC107] rounded-full animate-spin border-t-transparent"></div>
        <div className="w-12 h-12 border-4 border-[#0ea5e9] rounded-full animate-ping absolute top-0 opacity-30"></div>
      </div>
    </div>
  );
} 