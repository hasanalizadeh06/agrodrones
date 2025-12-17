import React from "react";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

function Homesecondsection() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [repeatCount, setRepeatCount] = useState<number>(1);
  const [speed, setSpeed] = useState<number>(10);
  const [amount, setAmount] = useState<number>(5);
  const [height, setHeight] = useState<number>(2);
  const [taskStarted, setTaskStarted] = useState<Set<number>>(new Set());
  // Irrigation states
  const [animationProgress, setAnimationProgress] = useState<{ [key: number]: number }>({});
  const [totalProgress, setTotalProgress] = useState<{ [key: number]: number }>({});
  const [currentArea, setCurrentArea] = useState<number>(0);
  const [currentRepeat, setCurrentRepeat] = useState<number>(0);
  // Fertilization states
  const [fertAnimationProgress, setFertAnimationProgress] = useState<{ [key: number]: number }>({});
  const [fertTotalProgress, setFertTotalProgress] = useState<{ [key: number]: number }>({});
  const [fertCurrentArea, setFertCurrentArea] = useState<number>(0);
  const [fertCurrentRepeat, setFertCurrentRepeat] = useState<number>(0);
  // Pesticide states
  const [pestAnimationProgress, setPestAnimationProgress] = useState<{ [key: number]: number }>({});
  const [pestTotalProgress, setPestTotalProgress] = useState<{ [key: number]: number }>({});
  const [pestCurrentArea, setPestCurrentArea] = useState<number>(0);
  const [pestCurrentRepeat, setPestCurrentRepeat] = useState<number>(0);

  useEffect(() => {
    let irrigationInterval: NodeJS.Timeout | null = null;
    let fertilizationInterval: NodeJS.Timeout | null = null;
    let pesticideInterval: NodeJS.Timeout | null = null;

    // Irrigation animation
    if (taskStarted.has(1)) {
      let localIrrigationArea = 0;
      let localIrrigationRepeat = 0;
      const irrigationIntervalTime = 500 / speed;

      irrigationInterval = setInterval(() => {
        if (localIrrigationRepeat < repeatCount) {
          setAnimationProgress(prev => {
            const newProgress = { ...prev };
            const perArea = amount / 6;
            const currentProgress = newProgress[localIrrigationArea] || 0;

            if (currentProgress < perArea) {
              newProgress[localIrrigationArea] = Math.min(currentProgress + 0.5, perArea);
              // Update total progress incrementally
              setTotalProgress(prevTotal => ({
                ...prevTotal,
                [localIrrigationArea]: (prevTotal[localIrrigationArea] || 0) + 0.5
              }));
            } else if (localIrrigationArea < 5) {
              localIrrigationArea++;
            } else {
              // One cycle complete - move to next repeat
              localIrrigationRepeat++;
              if (localIrrigationRepeat < repeatCount) {
                localIrrigationArea = 0;
                setTotalProgress(prevTotal => {
                  const newTotal = { ...prevTotal };
                  for (let i = 0; i < 6; i++) {
                    newTotal[i] = (newTotal[i] || 0) + perArea;
                  }
                  return newTotal;
                });
                return {}; // Reset animation progress for next repeat
              } else {
                // All repeats complete
                clearInterval(irrigationInterval!);
                return prev;
              }
            }
            return newProgress;
          });
        }
      }, irrigationIntervalTime);
    } else {
      setAnimationProgress({});
      setTotalProgress({});
      setCurrentArea(0);
      setCurrentRepeat(0);
    }

    // Fertilization animation
    if (taskStarted.has(2)) {
      let localFertArea = 0;
      let localFertRepeat = 0;
      const fertIntervalTime = 500 / speed;

      fertilizationInterval = setInterval(() => {
        if (localFertRepeat < repeatCount) {
          setFertAnimationProgress(prev => {
            const newProgress = { ...prev };
            const perArea = amount / 6;
            const currentProgress = newProgress[localFertArea] || 0;

            if (currentProgress < perArea) {
              newProgress[localFertArea] = Math.min(currentProgress + 0.5, perArea);
            } else if (localFertArea < 5) {
              localFertArea++;
            } else {
              // One cycle complete - move to next repeat
              localFertRepeat++;
              if (localFertRepeat < repeatCount) {
                localFertArea = 0;
                setFertTotalProgress(prevTotal => {
                  const newTotal = { ...prevTotal };
                  for (let i = 0; i < 6; i++) {
                    newTotal[i] = (newTotal[i] || 0) + perArea;
                  }
                  return newTotal;
                });
                return {}; // Reset animation progress for next repeat
              } else {
                // All repeats complete
                clearInterval(fertilizationInterval!);
                return prev;
              }
            }
            return newProgress;
          });
        }
      }, fertIntervalTime);
    } else {
      setFertAnimationProgress({});
      setFertTotalProgress({});
      setFertCurrentArea(0);
      setFertCurrentRepeat(0);
    }

    // Pesticide animation
    if (taskStarted.has(3)) {
      let localPestArea = 0;
      let localPestRepeat = 0;
      const pestIntervalTime = 500 / speed;

      pesticideInterval = setInterval(() => {
        if (localPestRepeat < repeatCount) {
          setPestAnimationProgress(prev => {
            const newProgress = { ...prev };
            const perArea = amount / 6;
            const currentProgress = newProgress[localPestArea] || 0;

            if (currentProgress < perArea) {
              newProgress[localPestArea] = Math.min(currentProgress + 0.5, perArea);
            } else if (localPestArea < 5) {
              localPestArea++;
            } else {
              // One cycle complete - move to next repeat
              localPestRepeat++;
              if (localPestRepeat < repeatCount) {
                localPestArea = 0;
                setPestTotalProgress(prevTotal => {
                  const newTotal = { ...prevTotal };
                  for (let i = 0; i < 6; i++) {
                    newTotal[i] = (newTotal[i] || 0) + perArea;
                  }
                  return newTotal;
                });
                return {}; // Reset animation progress for next repeat
              } else {
                // All repeats complete
                clearInterval(pesticideInterval!);
                return prev;
              }
            }
            return newProgress;
          });
        }
      }, pestIntervalTime);
    } else {
      setPestAnimationProgress({});
      setPestTotalProgress({});
      setPestCurrentArea(0);
      setPestCurrentRepeat(0);
    }

    return () => {
      if (irrigationInterval) clearInterval(irrigationInterval);
      if (fertilizationInterval) clearInterval(fertilizationInterval);
      if (pesticideInterval) clearInterval(pesticideInterval);
    };
  }, [taskStarted, amount, speed, repeatCount]);

  const getActionNumber = (action: string) => {
    switch (action) {
      case 'Suvarma': return 1;
      case 'Gübreleme': return 2;
      case 'Dermanlama': return 3;
      default: return null;
    }
  };

  const getAmountUnit = () => {
    switch (selectedAction) {
      case 'Suvarma': return 'L';
      case 'Gübreleme': return 'kg';
      case 'Dermanlama': return 'ml';
      default: return 'kg';
    }
  };

  const startTask = (number: number) => {
    const wasRunning = taskStarted.has(number);
    setTaskStarted(prev => {
      const newSet = new Set(prev);
      if (newSet.has(number)) {
        newSet.delete(number);
      } else {
        newSet.add(number);
      }
      return newSet;
    });
    
    // Reset states
    setAnimationProgress({});
    setTotalProgress({});
    setCurrentArea(0);
    setCurrentRepeat(0);
    setFertAnimationProgress({});
    setFertTotalProgress({});
    setFertCurrentArea(0);
    setFertCurrentRepeat(0);
    setPestAnimationProgress({});
    setPestTotalProgress({});
    setPestCurrentArea(0);
    setPestCurrentRepeat(0);
    
    // Show alert after state update
    setTimeout(() => {
      if (wasRunning) {
        alert(`Task Stopped for ${number === 1 ? 'Irrigation' : number === 2 ? 'Fertilization' : 'Pesticide'}`);
      } else {
        alert(`Task Started for ${number === 1 ? 'Irrigation' : number === 2 ? 'Fertilization' : 'Pesticide'}!\nRepeat: ${repeatCount}\nSpeed: ${speed}x\nAmount: ${amount} ${getAmountUnit()}\nHeight: ${height} m`);
      }
    }, 0);
  };

  return (
    <section className="w-full flex justify-center items-center min-h-[40vh]">
      <div className="bg-white/20 rounded-2xl shadow-xl p-6 flex flex-col items-center gap-6 max-w-4xl">
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedAction(selectedAction === 'Suvarma' ? null : 'Suvarma')}
            className={`px-4 py-2 rounded-xl font-bold transition duration-200 flex items-center gap-2 ${selectedAction === 'Suvarma' ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-800'}`}
          >
            💧 Irrigation
            <FaChevronDown className={`text-lg transition-transform duration-200 ${selectedAction === 'Suvarma' ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={() => setSelectedAction(selectedAction === 'Gübreleme' ? null : 'Gübreleme')}
            className={`px-4 py-2 rounded-xl font-bold transition duration-200 flex items-center gap-2 ${selectedAction === 'Gübreleme' ? 'bg-green-500 text-white' : 'bg-green-200 text-green-800'}`}
          >
            🌱 Fertilization
            <FaChevronDown className={`text-lg transition-transform duration-200 ${selectedAction === 'Gübreleme' ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={() => setSelectedAction(selectedAction === 'Dermanlama' ? null : 'Dermanlama')}
            className={`px-4 py-2 rounded-xl font-bold transition duration-200 flex items-center gap-2 ${selectedAction === 'Dermanlama' ? 'bg-red-500 text-white' : 'bg-red-200 text-red-800'}`}
          >
            🐛 Pesticide
            <FaChevronDown className={`text-lg transition-transform duration-200 ${selectedAction === 'Dermanlama' ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {selectedAction && (
          <>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center font-bold text-white">Speed (x)</div>
              <div className="text-center font-bold text-white">Amount ({getAmountUnit()})</div>
              <div className="text-center font-bold text-white">Height (m)</div>
              <select
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="px-2 py-2 rounded-xl bg-white/80 text-black shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value={0.5}>0.5x</option>
                <option value={1}>1x</option>
                <option value={1.5}>1.5x</option>
                <option value={2}>2x</option>
              </select>
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
              onClick={() => startTask(getActionNumber(selectedAction!)!)}
              className={`text-white font-bold py-2 px-7 w-full rounded-xl shadow-lg transition duration-200 ${taskStarted.has(getActionNumber(selectedAction!)!) ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}`}
            >
              {taskStarted.has(getActionNumber(selectedAction!)!) ? "Stop" : "Start"}
            </button>
            {(taskStarted.has(1) && selectedAction == "Suvarma" ) && (
                <div className="w-full">
                  <div className="grid grid-cols-3 grid-rows-2 gap-3 rounded-lg overflow-hidden min-h-50">
                    {Array.from({ length: 6 }, (_, idx) => {
                      const progress = animationProgress[idx] || 0;
                      const totalLiters = totalProgress[idx] || 0;
                      const perArea = amount / 6;
                      const percentage = (progress / perArea) * 100;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-700 font-medium p-2 bg-white/20 rounded-md shadow-sm relative overflow-hidden"
                        >
                          <div
                            className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-500"
                            style={{ height: `${percentage}%` }}
                          ></div>
                          <div className="relative z-10 text-lg font-bold text-green-800">🌱 Area {idx + 1}</div>
                          <div className="relative z-10 text-sm">Operation: Irrigation</div>
                          <div className="relative z-10 text-sm">Progress: {totalLiters.toFixed(1)} L</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
            )}
            
            
            
            {taskStarted.has(2) && selectedAction === "Gübreleme" && (
                <div className="w-full">
                  <div className="grid grid-cols-3 grid-rows-2 gap-3 rounded-lg overflow-hidden min-h-50">
                    {Array.from({ length: 6 }, (_, idx) => {
                      const progress = fertAnimationProgress[idx] || 0;
                      const totalLiters = fertTotalProgress[idx] || 0;
                      const perArea = amount / 6;
                      const percentage = (progress / perArea) * 100;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-700 font-medium p-2 bg-white/20 rounded-md shadow-sm relative overflow-hidden"
                        >
                          <div
                            className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
                            style={{ height: `${percentage}%` }}
                          ></div>
                          <div className="relative z-10 text-lg font-bold text-green-800">🌱 Area {idx + 1}</div>
                          <div className="relative z-10 text-sm">Operation: Fertilization</div>
                          <div className="relative z-10 text-sm">Progress: {totalLiters.toFixed(1)} kg</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
            )}
            {taskStarted.has(3) && selectedAction === "Dermanlama" && (
                <div className="w-full">
                  <div className="grid grid-cols-3 grid-rows-2 gap-3 rounded-lg overflow-hidden min-h-50">
                    {Array.from({ length: 6 }, (_, idx) => {
                      const progress = pestAnimationProgress[idx] || 0;
                      const totalLiters = pestTotalProgress[idx] || 0;
                      const perArea = amount / 6;
                      const percentage = (progress / perArea) * 100;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-700 font-medium p-2 bg-white/20 rounded-md shadow-sm relative overflow-hidden"
                        >
                          <div
                            className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-red-400 to-red-600 transition-all duration-500"
                            style={{ height: `${percentage}%` }}
                          ></div>
                          <div className="relative z-10 text-lg font-bold text-white">🐛 Area {idx + 1}</div>
                          <div className="relative z-10 text-white text-sm">Operation: Pesticide</div>
                          <div className="relative z-10 text-white text-sm">Progress: {totalLiters.toFixed(1)} ml</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
            )}
            </>
        )}
      </div>
    </section>
  );
}

export default Homesecondsection;
