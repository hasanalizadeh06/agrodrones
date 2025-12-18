import React from "react";
import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import "./homesecondsection-animations.css";

function Homesecondsection() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [repeatCount, setRepeatCount] = useState<number>(1);
  const [speed, setSpeed] = useState<number>(10);
  const [amount, setAmount] = useState<number>(5);
  const [height, setHeight] = useState<number>(2);
  const [taskStarted, setTaskStarted] = useState<Set<number>>(new Set());
  // New: Track selected areas (0-5)
  const [selectedAreas, setSelectedAreas] = useState<number[]>([0,1,2,3,4,5]);
  // Track which box was just checked for checkmark animation
  const [justChecked, setJustChecked] = useState<{ [key: number]: boolean }>({});
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

    // Helper: get next selected area index
    const getNextSelectedArea = (current: number) => {
      const sorted = [...selectedAreas].sort((a, b) => a - b);
      const idx = sorted.indexOf(current);
      return idx !== -1 && idx < sorted.length - 1 ? sorted[idx + 1] : null;
    };

    // Irrigation animation
    if (taskStarted.has(1)) {
      let localIrrigationArea = selectedAreas.length > 0 ? selectedAreas[0] : 0;
      let localIrrigationRepeat = 0;
      const irrigationIntervalTime = 500 / speed;

      irrigationInterval = setInterval(() => {
        if (localIrrigationRepeat < repeatCount && selectedAreas.length > 0) {
          setAnimationProgress(prev => {
            const newProgress = { ...prev };
            const perArea = amount / selectedAreas.length;
            const currentProgress = newProgress[localIrrigationArea] || 0;

            if (currentProgress < perArea) {
              newProgress[localIrrigationArea] = Math.min(currentProgress + 0.1, perArea);
              // Update total progress incrementally
              setTotalProgress(prevTotal => ({
                ...prevTotal,
                [localIrrigationArea]: (prevTotal[localIrrigationArea] || 0) + 0.1
              }));
            } else {
              const nextArea = getNextSelectedArea(localIrrigationArea);
              if (nextArea !== null) {
                localIrrigationArea = nextArea;
              } else {
                // One cycle complete - move to next repeat
                localIrrigationRepeat++;
                if (localIrrigationRepeat < repeatCount) {
                  localIrrigationArea = selectedAreas[0];
                  return {}; // Reset animation progress for next repeat
                } else {
                  // All repeats complete
                  clearInterval(irrigationInterval!);
                  return prev;
                }
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
      let localFertArea = selectedAreas.length > 0 ? selectedAreas[0] : 0;
      let localFertRepeat = 0;
      const fertIntervalTime = 500 / speed;

      fertilizationInterval = setInterval(() => {
        if (localFertRepeat < repeatCount && selectedAreas.length > 0) {
          setFertAnimationProgress(prev => {
            const newProgress = { ...prev };
            const perArea = amount / selectedAreas.length;
            const currentProgress = newProgress[localFertArea] || 0;

            if (currentProgress < perArea) {
              newProgress[localFertArea] = Math.min(currentProgress + 0.1, perArea);
              // Update total progress incrementally
              setFertTotalProgress(prevTotal => ({
                ...prevTotal,
                [localFertArea]: (prevTotal[localFertArea] || 0) + 0.1
              }));
            } else {
              const nextArea = getNextSelectedArea(localFertArea);
              if (nextArea !== null) {
                localFertArea = nextArea;
              } else {
                // One cycle complete - move to next repeat
                localFertRepeat++;
                if (localFertRepeat < repeatCount) {
                  localFertArea = selectedAreas[0];
                  return {}; // Reset animation progress for next repeat
                } else {
                  // All repeats complete
                  clearInterval(fertilizationInterval!);
                  return prev;
                }
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
      let localPestArea = selectedAreas.length > 0 ? selectedAreas[0] : 0;
      let localPestRepeat = 0;
      const pestIntervalTime = 500 / speed;

      pesticideInterval = setInterval(() => {
        if (localPestRepeat < repeatCount && selectedAreas.length > 0) {
          setPestAnimationProgress(prev => {
            const newProgress = { ...prev };
            const perArea = amount / selectedAreas.length;
            const currentProgress = newProgress[localPestArea] || 0;

            if (currentProgress < perArea) {
              newProgress[localPestArea] = Math.min(currentProgress + 0.1, perArea);
              // Update total progress incrementally
              setPestTotalProgress(prevTotal => ({
                ...prevTotal,
                [localPestArea]: (prevTotal[localPestArea] || 0) + 0.1
              }));
            } else {
              const nextArea = getNextSelectedArea(localPestArea);
              if (nextArea !== null) {
                localPestArea = nextArea;
              } else {
                // One cycle complete - move to next repeat
                localPestRepeat++;
                if (localPestRepeat < repeatCount) {
                  localPestArea = selectedAreas[0];
                  return {}; // Reset animation progress for next repeat
                } else {
                  // All repeats complete
                  clearInterval(pesticideInterval!);
                  return prev;
                }
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
  }, [taskStarted, amount, speed, repeatCount, selectedAreas]);

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
    
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="bg-white/20 rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 flex flex-col items-center gap-4 sm:gap-6 w-full max-w-4xl">
        <div className="flex flex-col sm:flex-row gap-2 w-full justify-center">
          <button
            onClick={() => setSelectedAction(selectedAction === 'Suvarma' ? null : 'Suvarma')}
            className={`w-full sm:w-auto px-4 py-2 rounded-xl font-bold transition duration-200 flex items-center gap-2 justify-center ${selectedAction === 'Suvarma' ? 'bg-blue-500 text-white' : 'bg-blue-200 text-blue-800'}`}
          >
            💧 Irrigation
            <FaChevronDown className={`text-lg transition-transform duration-200 ${selectedAction === 'Suvarma' ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={() => setSelectedAction(selectedAction === 'Gübreleme' ? null : 'Gübreleme')}
            className={`w-full sm:w-auto px-4 py-2 rounded-xl font-bold transition duration-200 flex items-center gap-2 justify-center ${selectedAction === 'Gübreleme' ? 'bg-green-500 text-white' : 'bg-green-200 text-green-800'}`}
          >
            🌱 Fertilization
            <FaChevronDown className={`text-lg transition-transform duration-200 ${selectedAction === 'Gübreleme' ? 'rotate-180' : ''}`} />
          </button>
          <button
            onClick={() => setSelectedAction(selectedAction === 'Dermanlama' ? null : 'Dermanlama')}
            className={`w-full sm:w-auto px-4 py-2 rounded-xl font-bold transition duration-200 flex items-center gap-2 justify-center ${selectedAction === 'Dermanlama' ? 'bg-red-500 text-white' : 'bg-red-200 text-red-800'}`}
          >
            🐛 Pesticide
            <FaChevronDown className={`text-lg transition-transform duration-200 ${selectedAction === 'Dermanlama' ? 'rotate-180' : ''}`} />
          </button>
        </div>
        {selectedAction && (
          <>
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2 w-full">
              <div className="flex flex-row items-center justify-between sm:block w-full">
                <span className="font-bold text-white mr-2 sm:mr-0">Speed (x)</span>
                <select
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className="px-2 py-2 rounded-xl bg-white/80 text-black shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-28 sm:w-full"
                >
                  <option value={0.5}>0.5x</option>
                  <option value={1}>1x</option>
                  <option value={1.5}>1.5x</option>
                  <option value={2}>2x</option>
                </select>
              </div>
              <div className="flex flex-row items-center justify-between sm:block w-full">
                <span className="font-bold text-white mr-2 sm:mr-0">Amount ({getAmountUnit()})</span>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="px-2 py-2 rounded-xl bg-white/80 text-black shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-28 sm:w-full"
                  min="0"
                />
              </div>
              <div className="flex flex-row items-center justify-between sm:block w-full">
                <span className="font-bold text-white mr-2 sm:mr-0">Height (m)</span>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="px-2 py-2 rounded-xl bg-white/80 text-black shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 w-28 sm:w-full"
                  min="0"
                />
              </div>
            </div>
            
            {/* Area selection boxes */}
            <div className="flex justify-center gap-3 mb-2 w-[inherit]">
              {Array.from({ length: 6 }, (_, idx) => {
                const isChecked = selectedAreas.includes(idx);
                return (
                  <button
                    key={idx}
                    type="button"
                    className={`w-10 h-10 flex-1 rounded-xl border-2 flex items-center justify-center font-bold text-lg relative overflow-visible
                      ${isChecked ? 'bg-green-500 text-white border-green-700 scale-105' : 'bg-white/80 text-blue-700 border-blue-300 hover:bg-blue-100'}`}
                    style={{ zIndex: 1 }}
                    onClick={() => {
                      setSelectedAreas(prev => {
                        let newArr;
                        if (prev.includes(idx)) {
                          newArr = prev.filter(i => i !== idx);
                        } else {
                          newArr = [...prev, idx].sort((a, b) => a - b);
                          setJustChecked(jc => ({ ...jc, [idx]: true }));
                          setTimeout(() => {
                            setJustChecked(jc => ({ ...jc, [idx]: false }));
                          }, 1000);
                        }
                        return newArr;
                      });
                    }}
                  >
                    {/* Border animation */}
                    <span className={`absolute inset-0 pointer-events-none rounded-lg border-2 border-green-600 ${isChecked ? 'animate-border-draw' : 'border-transparent'}`}></span>
                    <span className="relative z-10">{idx + 1}</span>
                    {/* Checkmark animation */}
                    {justChecked[idx] && (
                      <span className="absolute inset-0 flex items-center justify-center z-20 animate-fade-in-out">
                        <FaCheck className="text-white text-2xl drop-shadow-lg" />
                      </span>
                    )}
                  </button>
                );
              })}
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
                      if (!selectedAreas.includes(idx)) {
                        return (
                          <div key={idx} className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-300 font-medium p-2 bg-white/40 rounded-md shadow-sm relative overflow-hidden opacity-50">
                            <div className="relative z-10 text-lg font-bold">Area {idx + 1}</div>
                            <div className="relative z-10 text-sm">Not selected</div>
                          </div>
                        );
                      }
                      const progress = animationProgress[idx] || 0;
                      const perArea = amount / selectedAreas.length;
                      const displayProgress = Math.min(progress, perArea);
                      const percentage = (displayProgress / perArea) * 100;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-700 font-medium p-2 bg-white/20 rounded-md shadow-sm relative overflow-hidden"
                        >
                          <div
                            className="absolute bottom-0 left-0 w-full bg-linear-to-r from-blue-400 to-blue-600 transition-all duration-500"
                            style={{ height: `${percentage}%` }}
                          ></div>
                          <div className="relative z-10 text-lg font-bold text-green-800">🌱 Area {idx + 1}</div>
                          <div className="relative z-10 text-sm">Operation: Irrigation</div>
                          <div className="relative z-10 text-sm">Progress: {displayProgress.toFixed(1)} L</div>
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
                      if (!selectedAreas.includes(idx)) {
                        return (
                          <div key={idx} className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-300 font-medium p-2 bg-white/40 rounded-md shadow-sm relative overflow-hidden opacity-50">
                            <div className="relative z-10 text-lg font-bold">Area {idx + 1}</div>
                            <div className="relative z-10 text-sm">Not selected</div>
                          </div>
                        );
                      }
                      const progress = fertAnimationProgress[idx] || 0;
                      const perArea = amount / selectedAreas.length;
                      const displayProgress = Math.min(progress, perArea);
                      const percentage = (displayProgress / perArea) * 100;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-700 font-medium p-2 bg-white/20 rounded-md shadow-sm relative overflow-hidden"
                        >
                          <div
                            className="absolute bottom-0 left-0 w-full bg-linear-to-r from-green-400 to-green-600 transition-all duration-500"
                            style={{ height: `${percentage}%` }}
                          ></div>
                          <div className="relative z-10 text-lg font-bold text-green-800">🌱 Area {idx + 1}</div>
                          <div className="relative z-10 text-sm">Operation: Fertilization</div>
                          <div className="relative z-10 text-sm">Progress: {displayProgress.toFixed(1)} kg</div>
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
                      if (!selectedAreas.includes(idx)) {
                        return (
                          <div key={idx} className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-300 font-medium p-2 bg-white/40 rounded-md shadow-sm relative overflow-hidden opacity-50">
                            <div className="relative z-10 text-lg font-bold">Area {idx + 1}</div>
                            <div className="relative z-10 text-sm">Not selected</div>
                          </div>
                        );
                      }
                      const progress = pestAnimationProgress[idx] || 0;
                      const perArea = amount / selectedAreas.length;
                      const displayProgress = Math.min(progress, perArea);
                      const percentage = (displayProgress / perArea) * 100;
                      return (
                        <div
                          key={idx}
                          className="flex flex-col items-center justify-center min-h-35 border border-gray-100 text-gray-700 font-medium p-2 bg-white/20 rounded-md shadow-sm relative overflow-hidden"
                        >
                          <div
                            className="absolute bottom-0 left-0 w-full bg-linear-to-r from-red-400 to-red-600 transition-all duration-500"
                            style={{ height: `${percentage}%` }}
                          ></div>
                          <div className="relative z-10 text-lg font-bold text-white">🐛 Area {idx + 1}</div>
                          <div className="relative z-10 text-white text-sm">Operation: Pesticide</div>
                          <div className="relative z-10 text-white text-sm">Progress: {displayProgress.toFixed(1)} ml</div>
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
