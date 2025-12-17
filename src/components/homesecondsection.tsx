"use client"
import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function Homesecondsection() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [repeatCount, setRepeatCount] = useState<number>(1);
  const [speed, setSpeed] = useState<number>(10);
  const [amount, setAmount] = useState<number>(5);
  const [height, setHeight] = useState<number>(2);
  const [taskStarted, setTaskStarted] = useState<boolean>(false);

  const getAmountUnit = () => {
    switch (selectedAction) {
      case 'Suvarma': return 'L';
      case 'Gübreleme': return 'kg';
      case 'Dermanlama': return 'ml';
      default: return 'kg';
    }
  };

  const startTask = () => {
    setTaskStarted(true);
  };

  return (
    <section className="w-full flex justify-center items-center min-h-[40vh]">
      <div className="bg-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center gap-6 max-w-4xl">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedAction(selectedAction === 'Suvarma' ? null : 'Suvarma')}
            className={`px-4 py-2 rounded-xl font-bold transition duration-200 flex items-center gap-2 ${selectedAction === 'Suvarma' ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-800'}`}
          >
            💧 Suvarma
            <FaChevronDown className={`text-lg transition-transform duration-200 ${selectedAction === 'Suvarma' ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={() => setSelectedAction(selectedAction === 'Gübreleme' ? null : 'Gübreleme')}
            className={`px-4 py-2 rounded-xl font-bold transition duration-200 flex items-center gap-2 ${selectedAction === 'Gübreleme' ? 'bg-green-500 text-white' : 'bg-green-200 text-green-800'}`}
          >
            🌱 Gübreleme
            <FaChevronDown className={`text-lg transition-transform duration-200 ${selectedAction === 'Gübreleme' ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={() => setSelectedAction(selectedAction === 'Dermanlama' ? null : 'Dermanlama')}
            className={`px-4 py-2 rounded-xl font-bold transition duration-200 flex items-center gap-2 ${selectedAction === 'Dermanlama' ? 'bg-red-500 text-white' : 'bg-red-200 text-red-800'}`}
          >
            🐛 Dermanlama
            <FaChevronDown className={`text-lg transition-transform duration-200 ${selectedAction === 'Dermanlama' ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {selectedAction && (
          <>
            <div className="grid grid-cols-4 gap-2">
              <div className="text-center font-bold text-white">Tekrar</div>
              <div className="text-center font-bold text-white">Hız (km/h)</div>
              <div className="text-center font-bold text-white">Miktar ({getAmountUnit()})</div>
              <div className="text-center font-bold text-white">Yükseklik (m)</div>
              <input
                type="number"
                value={repeatCount}
                onChange={(e) => setRepeatCount(Number(e.target.value))}
                className="px-2 py-2 rounded-xl bg-white/80 text-black shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                min="1"
              />
              <input
                type="number"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="px-2 py-2 rounded-xl bg-white/80 text-black shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                min="0"
              />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="px-2 py-2 rounded-xl bg-white/80 text-black shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                min="0"
              />
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="px-2 py-2 rounded-xl bg-white/80 text-black shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                min="0"
              />
            </div>
            <button
              onClick={startTask}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-7 w-full rounded-xl shadow-lg transition duration-200"
            >
              Başlat
            </button>
            </>
        )}
        {(taskStarted && selectedAction) && (
            <div className="w-full">
              <div className="grid grid-cols-3 grid-rows-2 gap-3 rounded-lg overflow-hidden min-h-50">
                {Array.from({ length: 6 }, (_, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-700 font-medium p-2 bg-white/20 rounded-md shadow-sm relative"
                  >
                    <div className="text-lg font-bold text-green-800">🌱 Area {idx + 1}</div>
                    <div className="text-sm">İşlem: {selectedAction}</div>
                    <div className="text-sm">Toplam: {amount} {getAmountUnit()}</div>
                  </div>
                ))}
              </div>
            </div>
        )}
      </div>
    </section>
  );
}

export default Homesecondsection;
