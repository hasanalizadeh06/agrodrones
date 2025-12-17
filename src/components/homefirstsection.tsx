import React from 'react'
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from 'next/image';
import bgbox from '@/../public/bgbox.jpg';

interface ClimateDetail {
  area: string;
  value: string;
  unit: string;
}

interface ChemicalDetail {
  area: string;
  nitrogen: string;
  potassium: string;
  phosphorus: string;
  magnesium: string;
}

function Homefirstsection() {
      const [openedSection, setOpenedSection] = useState<number | null>(null);
      const [openedAction, setOpenedAction] = useState<string | null>(null);
    
      const temperatureDetailsSchema = [
        { area: "Area 1", value: 35 },
        { area: "Area 2", value: 37 },
        { area: "Area 3", value: 36 },
        { area: "Area 4", value: 38 },
        { area: "Area 5", value: 34 },
        { area: "Area 6", value: 39 },
      ];
      const humidityDetailsSchema = [
        { area: "Area 1", value: 40 },
        { area: "Area 2", value: 45 },
        { area: "Area 3", value: 42 },
        { area: "Area 4", value: 46 },
        { area: "Area 5", value: 41 },
        { area: "Area 6", value: 44 },
      ];
      const chemicalDetailsSchema = [
        { area: "Area 1", nitrogen: 10, potassium: 12, phosphorus: 8, magnesium: 6 },
        { area: "Area 2", nitrogen: 15, potassium: 18, phosphorus: 12, magnesium: 9 },
        { area: "Area 3", nitrogen: 12, potassium: 14, phosphorus: 9, magnesium: 7 },
        { area: "Area 4", nitrogen: 14, potassium: 16, phosphorus: 11, magnesium: 8 },
        { area: "Area 5", nitrogen: 11, potassium: 13, phosphorus: 7, magnesium: 5 },
        { area: "Area 6", nitrogen: 13, potassium: 17, phosphorus: 10, magnesium: 7 },
      ];
      const irrigationDetailsSchema = [
        { area: "Area 1", value: 20 },
        { area: "Area 2", value: 25 },
        { area: "Area 3", value: 22 },
        { area: "Area 4", value: 28 },
        { area: "Area 5", value: 19 },
        { area: "Area 6", value: 26 },
      ];
      const fertilizationDetailsSchema = [
        { area: "Area 1", value: 5 },
        { area: "Area 2", value: 7 },
        { area: "Area 3", value: 6 },
        { area: "Area 4", value: 8 },
        { area: "Area 5", value: 4 },
        { area: "Area 6", value: 9 },
      ];
      const pesticideDetailsSchema = [
        { area: "Area 1", value: 2 },
        { area: "Area 2", value: 3 },
        { area: "Area 3", value: 2.5 },
        { area: "Area 4", value: 3.5 },
        { area: "Area 5", value: 1.5 },
        { area: "Area 6", value: 4 },
      ];
      const [chemicalDetails, setChemicalDetails] = useState([
        ...chemicalDetailsSchema
      ]);
      const [temperatureDetails, setTemperatureDetails] = useState([
        ...temperatureDetailsSchema
      ]);
      const [humidityDetails, setHumidityDetails] = useState([
        ...humidityDetailsSchema
      ]);
      const [irrigationDetails, setIrrigationDetails] = useState([
        ...irrigationDetailsSchema
      ]);
      const [fertilizationDetails, setFertilizationDetails] = useState([
        ...fertilizationDetailsSchema
      ]);
      const [pesticideDetails, setPesticideDetails] = useState([
        ...pesticideDetailsSchema
      ]);
      const calculateAverage = (details: { [key: string]: number | string }[], key: string) => {
        const values = details.map(d => Number(d[key]));
        const sum = values.reduce((a, b) => a + b, 0);
        return Math.round(sum / values.length);
      };
      const [updatedDatas, setUpdatedDatas] = useState({
        climate: calculateAverage(temperatureDetails, 'value'),
        humidity: calculateAverage(humidityDetails, 'value'),
        chemical: {
          nitrogen: calculateAverage(chemicalDetails, 'nitrogen'),
          potassium: calculateAverage(chemicalDetails, 'potassium'),
          phosphorus: calculateAverage(chemicalDetails, 'phosphorus'),
          magnesium: calculateAverage(chemicalDetails, 'magnesium'),
        }
      });
      useEffect(() => {
        const interval = setInterval(() => {
          setUpdatedDatas(prev => ({
            climate: prev.climate + (Math.random() > 0.5 ? 1 : -1),
            humidity: prev.humidity + (Math.random() > 0.5 ? 1 : -1),
            chemical: {
              nitrogen: prev.chemical.nitrogen + (Math.random() > 0.5 ? 1 : -1),
              potassium: prev.chemical.potassium + (Math.random() > 0.5 ? 1 : -1),
              phosphorus: prev.chemical.phosphorus + (Math.random() > 0.5 ? 1 : -1),
              magnesium: prev.chemical.magnesium + (Math.random() > 0.5 ? 1 : -1),
            }
          }));
          setTemperatureDetails(prev => prev.map(d => ({
            ...d,
            value: d.value + (Math.random() > 0.5 ? 1 : -1)
          })));
          setHumidityDetails(prev => prev.map(d => ({
            ...d,
            value: d.value + (Math.random() > 0.5 ? 1 : -1)
          })));
          setChemicalDetails(prev => prev.map(d => ({
            ...d,
            nitrogen: d.nitrogen + (Math.random() > 0.5 ? 1 : -1),
            potassium: d.potassium + (Math.random() > 0.5 ? 1 : -1),
            phosphorus: d.phosphorus + (Math.random() > 0.5 ? 1 : -1),
            magnesium: d.magnesium + (Math.random() > 0.5 ? 1 : -1),
          })));
          setIrrigationDetails(prev => prev.map(d => ({
            ...d,
            value: d.value + (Math.random() > 0.5 ? 1 : -1)
          })));
          setFertilizationDetails(prev => prev.map(d => ({
            ...d,
            value: d.value + (Math.random() > 0.5 ? 1 : -1)
          })));
          setPesticideDetails(prev => prev.map(d => ({
            ...d,
            value: d.value + (Math.random() > 0.5 ? 1 : -1)
          })));
        }, 2000);
        return () => clearInterval(interval);
      }, [])
      const data = [
        {
          label: "🌡️ Climate",
          value: `${updatedDatas.climate}°C`,
          unit: "Celsius",
          details: temperatureDetails.map(d => ({ ...d, value: `${d.value}°C`, unit: "Celsius" })),
        },
        {
          label: "💧 Humidity",
          value: `${updatedDatas.humidity}%`,
          unit: "Percent",
          details: humidityDetails.map(d => ({ ...d, value: `${d.value}%`, unit: "Percent" })),
        },
        {
          label: "🧪 Chemical Property",
          value: {
            nitrogen: `${updatedDatas.chemical.nitrogen}%`,
            potassium: `${updatedDatas.chemical.potassium}%`,
            phosphorus: `${updatedDatas.chemical.phosphorus}%`,
            magnesium: `${updatedDatas.chemical.magnesium}%`,
          },
          unit: "Percent",
          details: chemicalDetails.map(d => ({
            ...d,
            nitrogen: `${d.nitrogen}%`,
            potassium: `${d.potassium}%`,
            phosphorus: `${d.phosphorus}%`,
            magnesium: `${d.magnesium}%`,
          })),
        },
      ];
      const actions = [
        {
          label: "Suvarma",
          details: irrigationDetails.map(d => ({ ...d, value: `${d.value} L`, unit: "Liters" })),
        },
        {
          label: "Gübrələmə",
          details: fertilizationDetails.map(d => ({ ...d, value: `${d.value} kg`, unit: "Kilograms" })),
        },
        {
          label: "Dərmanlama",
          details: pesticideDetails.map(d => ({ ...d, value: `${d.value} ml`, unit: "Milliliters" })),
        },
      ];
    
  return (
    <section className="w-full flex justify-center items-center">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-2xl shadow-xl p-3 sm:p-4 md:p-5 w-full max-w-4xl relative"
        style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(24px)" }}
      >
        {data.map((item, idx) => (
          <div
            key={item.label}
            className="flex flex-col items-stretch min-w-0 max-w-full sm:min-w-50 sm:max-w-65 relative"
          >
            <div className="flex items-center justify-between bg-linear-to-br from-blue-200/80 to-blue-400/80 rounded-xl px-3 sm:px-5 py-2 sm:py-3 mb-2 shadow-md h-14 sm:h-16">
              <span className="text-base sm:text-lg font-bold flex items-center gap-2 w-full justify-center">{item.label}</span>
            </div>
            <div className="flex items-center bg-white/90 justify-between px-3 sm:px-5 py-3 sm:py-4 rounded-xl shadow-inner h-auto"
            >
              <div className="flex flex-col">
                {typeof item.value === 'string' ? (
                  <span className="text-xl sm:text-2xl font-extrabold text-blue-700 drop-shadow-sm">{item.value}</span>
                ) : (
                  <div className="grid grid-cols-2 gap-1">
                    <span className="text-xs text-blue-700">N: {item.value.nitrogen}</span>
                    <span className="text-xs text-blue-700">K: {item.value.potassium}</span>
                    <span className="text-xs text-blue-700">P: {item.value.phosphorus}</span>
                    <span className="text-xs text-blue-700">Mg: {item.value.magnesium}</span>
                  </div>
                )}
                <span className="text-xs sm:text-sm text-gray-500 font-medium">{item.unit}</span>
              </div>
              <button
                className={
                  "ml-2 p-2 rounded-full hover:bg-blue-100/70 transition flex items-center justify-center " +
                  (openedSection === idx ? "rotate-180 bg-blue-200/80" : "")
                }
                aria-label="Toggle details"
                onClick={() => setOpenedSection(openedSection === idx ? null : idx)}
              >
                <FaChevronDown className="text-blue-700 text-lg transition-transform duration-200" />
              </button>
            </div>
          </div>
        ))}
        {/* Dropdown panel spanning full row */}
        {openedSection !== null && (
          <div className="col-span-1 sm:col-span-2 md:col-span-3 transition-all duration-300">
            <div className="bg-white/20 rounded-xl p-2 sm:p-3 flex flex-col items-center w-full min-h-55">
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 grid-rows-6 sm:grid-rows-2 gap-2 sm:gap-3 rounded-lg overflow-hidden min-h-50">
                  {[...Array(6)].map((_, cellIdx) => {
                    const rowIdx = Math.floor(cellIdx / 3);
                    const colIdx = cellIdx % 3;
                    return (
                      <div
                        key={`cell-${rowIdx}-${colIdx}`}
                        className="flex flex-col items-center justify-center min-h-28 sm:min-h-35 border border-gray-100 text-gray-700 font-medium p-2 bg-white/20 rounded-md shadow-sm relative"
                      >
                        <Image src={bgbox} alt="" fill className="object-cover opacity-60 z-[-1] rounded-md blur-sm" />
                        <div className="text-base sm:text-lg font-bold text-blue-800">🌱 {data[openedSection!].details[cellIdx].area}</div>
                        {openedSection === 2 ? (
                          (() => {
                            const detail = data[openedSection].details[cellIdx] as ChemicalDetail;
                            return (
                              <>
                                <div className="text-xs">Nitrogen (N): {detail.nitrogen}</div>
                                <div className="text-xs">Potassium (K): {detail.potassium}</div>
                                <div className="text-xs">Phosphorus (P): {detail.phosphorus}</div>
                                <div className="text-xs">Magnesium (Mg): {detail.magnesium}</div>
                              </>
                            );
                          })()
                        ) : (
                          (() => {
                            const detail = data[openedSection!].details[cellIdx] as ClimateDetail;
                            return (
                              <>
                                <div className="text-lg font-bold text-blue-900">{detail.value}</div>
                                <div className="text-xs text-gray-500">{detail.unit}</div>
                              </>
                            );
                          })()
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Homefirstsection