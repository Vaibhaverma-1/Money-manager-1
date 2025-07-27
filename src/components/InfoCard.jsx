const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-6 rounded-md bg-white dark:bg-green-950 p-6 border border-green-200 dark:border-green-700 shadow-md">
      {/* Icon Circle */}
      <div
        className={`w-14 h-14 flex items-center justify-center text-[26px] text-white ${color} rounded-md drop-shadow-xl`}
      >
        {icon}
      </div>

      {/* Info Section */}
      <div>
        <h6 className="text-sm text-gray-500 dark:text-green-300 mb-1">
          {label}
        </h6>
        <span className="text-[22px] text-green-800 dark:text-green-100">
          ₹{value}
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
