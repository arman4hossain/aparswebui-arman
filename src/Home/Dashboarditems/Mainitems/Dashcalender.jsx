import React from 'react';

const events = [
  {
    id: 1,
    title: 'পদার্থব গঠন ১',
    time: '12:00 PM - 20:30 PM',
    desc: 'Marks: 100',
    category: 'Exam',
  },
  {
    id: 2,
    title: 'পদার্থব গঠন ১',
    time: '09:00 AM',
    desc: 'সৃজনশীল প্রশ্ন উত্তর',
    category: 'Live Class',
  },
];

const categoryColors = {
  'Live Class': 'bg-red-100 border-red-500 text-red-700',
  'Recorded Class': 'bg-blue-100 border-blue-500 text-blue-700',
  'Exam': 'bg-gray-100 border-gray-500 text-gray-700',
};

const Dashcalnder = () => {
  return (
    <div className="p-6  min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Custom Day View Calendar</h2>
      
      {/* Calendar Container */}
      <div className="border border-gray-300 rounded-md bg-white shadow-md">
        <div className="grid grid-cols-12 gap-0">
          {/* Time Slots */}
          <div className="col-span-2 border-r border-gray-200">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-24 flex items-center justify-center text-gray-600 border-b border-gray-200"
              >
                {`${9 + i}:00`}
              </div>
            ))}
          </div>

          {/* Event Slots */}
          <div className="col-span-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-16 border-b border-gray-200 relative">
                {events.map(
                  (event) =>
                    parseInt(event.time.split(':')[0], 10) === 9 + i && (
                      <div
                        key={event.id}
                        className={`absolute top-1 left-2 w-11/12 p-2 rounded-md border ${categoryColors[event.category]}`}
                      >
                        <h3 className="font-semibold">{event.title}</h3>
                        <p className="text-sm">{event.desc}</p>
                        <p className="text-xs">{event.time}</p>
                      </div>
                    )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex justify-center space-x-6">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-red-100 border border-red-500 rounded-full mr-2"></span>
          <span className="text-sm">Live Class</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-blue-100 border border-blue-500 rounded-full mr-2"></span>
          <span className="text-sm">Recorded Class</span>
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-gray-100 border border-gray-500 rounded-full mr-2"></span>
          <span className="text-sm">Exam</span>
        </div>
      </div>
    </div>
  );
};

export default Dashcalnder;
