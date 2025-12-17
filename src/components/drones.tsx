import React from 'react';

const DronesTable: React.FC = () => {
  // Sample data for 47 drones
  const drones = [
    { id: 'DRONE_0001', batarya: 84, su: 67, derman: 0, gubre: 0, status: 'Working', currentTask: 'Irrigation' },
    { id: 'DRONE_0002', batarya: 92, su: 0, derman: 0, gubre: 28, status: 'Working', currentTask: 'Fertilization' },
    { id: 'DRONE_0003', batarya: 15, su: 0, derman: 0, gubre: 15, status: 'Not Working', currentTask: 'Fertilization' },
    { id: 'DRONE_0004', batarya: 37, su: 42, derman: 0, gubre: 0, status: 'Charging', currentTask: 'Irrigation' },
    { id: 'DRONE_0005', batarya: 53, su: 0, derman: 34, gubre: 0, status: 'Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0006', batarya: 24, su: 0, derman: 22, gubre: 0, status: 'In Repair', currentTask: 'Pesticide' },
    { id: 'DRONE_0007', batarya: 100, su: 0, derman: 0, gubre: 31, status: 'Charging', currentTask: 'Fertilization' },
    { id: 'DRONE_0008', batarya: 57, su: 45, derman: 0, gubre: 0, status: 'Working', currentTask: 'Irrigation' },
    { id: 'DRONE_0009', batarya: 0, su: 0, derman: 18, gubre: 0, status: 'Not Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0010', batarya: 94, su: 58, derman: 0, gubre: 0, status: 'Charging', currentTask: 'Irrigation' },
    { id: 'DRONE_0011', batarya: 18, su: 0, derman: 0, gubre: 25, status: 'In Repair', currentTask: 'Fertilization' },
    { id: 'DRONE_0012', batarya: 76, su: 0, derman: 29, gubre: 0, status: 'Not Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0013', batarya: 89, su: 39, derman: 0, gubre: 0, status: 'In Repair', currentTask: 'Irrigation' },
    { id: 'DRONE_0014', batarya: 67, su: 52, derman: 0, gubre: 0, status: 'Working', currentTask: 'Irrigation' },
    { id: 'DRONE_0015', batarya: 43, su: 0, derman: 0, gubre: 19, status: 'Working', currentTask: 'Fertilization' },
    { id: 'DRONE_0016', batarya: 88, su: 0, derman: 27, gubre: 0, status: 'Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0017', batarya: 12, su: 22, derman: 0, gubre: 0, status: 'Not Working', currentTask: 'None' },
    { id: 'DRONE_0018', batarya: 95, su: 0, derman: 0, gubre: 23, status: 'Charging', currentTask: 'None' },
    { id: 'DRONE_0019', batarya: 61, su: 0, derman: 0, gubre: 22, status: 'Working', currentTask: 'Fertilization' },
    { id: 'DRONE_0020', batarya: 29, su: 35, derman: 0, gubre: 0, status: 'In Repair', currentTask: 'Irrigation' },
    { id: 'DRONE_0021', batarya: 78, su: 0, derman: 31, gubre: 0, status: 'Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0022', batarya: 5, su: 22, derman: 0, gubre: 0, status: 'Not Working', currentTask: 'None' },
    { id: 'DRONE_0023', batarya: 82, su: 48, derman: 0, gubre: 0, status: 'Working', currentTask: 'Irrigation' },
    { id: 'DRONE_0024', batarya: 34, su: 0, derman: 0, gubre: 16, status: 'Charging', currentTask: 'Fertilization' },
    { id: 'DRONE_0025', batarya: 71, su: 0, derman: 24, gubre: 0, status: 'Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0026', batarya: 46, su: 12, derman: 0, gubre: 0, status: 'Not Working', currentTask: 'None' },
    { id: 'DRONE_0027', batarya: 99, su: 0, derman: 11, gubre: 0, status: 'Charging', currentTask: 'None' },
    { id: 'DRONE_0028', batarya: 63, su: 41, derman: 0, gubre: 0, status: 'Working', currentTask: 'Irrigation' },
    { id: 'DRONE_0029', batarya: 17, su: 0, derman: 0, gubre: 12, status: 'In Repair', currentTask: 'Fertilization' },
    { id: 'DRONE_0030', batarya: 85, su: 0, derman: 33, gubre: 0, status: 'Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0031', batarya: 8, su: 41, derman: 0, gubre: 0, status: 'Not Working', currentTask: 'None' },
    { id: 'DRONE_0032', batarya: 91, su: 55, derman: 0, gubre: 0, status: 'Working', currentTask: 'Irrigation' },
    { id: 'DRONE_0033', batarya: 52, su: 0, derman: 0, gubre: 26, status: 'Charging', currentTask: 'Fertilization' },
    { id: 'DRONE_0034', batarya: 74, su: 0, derman: 28, gubre: 0, status: 'Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0035', batarya: 21, su: 23, derman: 0, gubre: 0, status: 'Not Working', currentTask: 'None' },
    { id: 'DRONE_0036', batarya: 96, su: 42, derman: 0, gubre: 0, status: 'Charging', currentTask: 'None' },
    { id: 'DRONE_0037', batarya: 59, su: 47, derman: 0, gubre: 0, status: 'Working', currentTask: 'Irrigation' },
    { id: 'DRONE_0038', batarya: 33, su: 0, derman: 0, gubre: 18, status: 'In Repair', currentTask: 'Fertilization' },
    { id: 'DRONE_0039', batarya: 87, su: 0, derman: 30, gubre: 0, status: 'Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0040', batarya: 4, su: 0, derman: 44, gubre: 0, status: 'Not Working', currentTask: 'None' },
    { id: 'DRONE_0041', batarya: 93, su: 50, derman: 0, gubre: 0, status: 'Working', currentTask: 'Irrigation' },
    { id: 'DRONE_0042', batarya: 48, su: 0, derman: 0, gubre: 21, status: 'Charging', currentTask: 'Fertilization' },
    { id: 'DRONE_0043', batarya: 69, su: 0, derman: 25, gubre: 0, status: 'Working', currentTask: 'Pesticide' },
    { id: 'DRONE_0044', batarya: 26, su: 0, derman: 21, gubre: 0, status: 'Not Working', currentTask: 'None' },
    { id: 'DRONE_0045', batarya: 97, su: 0, derman: 0, gubre: 32, status: 'Charging', currentTask: 'None' },
    { id: 'DRONE_0046', batarya: 55, su: 43, derman: 0, gubre: 0, status: 'Working', currentTask: 'Irrigation' },
    { id: 'DRONE_0047', batarya: 38, su: 0, derman: 0, gubre: 14, status: 'In Repair', currentTask: 'Fertilization' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              🚁 Drones Table
            </h2>
            <p className="text-blue-100 mt-1">Monitor and manage your agricultural drones</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">🔋 Battery (%)</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">💧 Water (L)</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">🐛 Pesticide (L)</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">🌱 Fertilizer (kg)</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">⚙️ Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {drones.map((drone, index) => (
                  <tr key={drone.id} className={`hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{drone.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        <div className="w-8 h-2 bg-gray-200 rounded-full mr-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${
                              drone.batarya <= 20 ? 'bg-red-500' :
                              drone.batarya <= 40 ? 'bg-orange-500' :
                              drone.batarya <= 60 ? 'bg-yellow-500' :
                              drone.batarya <= 80 ? 'bg-lime-500' :
                              drone.batarya < 100 ? 'bg-green-500' :
                              'bg-green-600'
                            }`} 
                            style={{ width: `${drone.batarya}%` }}
                          ></div>
                        </div>
                        🔋 {drone.batarya}%
                      </div>
                    </td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${drone.su === 0 ? 'bg-red-50' : 'bg-green-50'}`}>{drone.su}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${drone.derman === 0 ? 'bg-red-50' : 'bg-green-50'}`}>{drone.derman}</td>
                    <td className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${drone.gubre === 0 ? 'bg-red-50' : 'bg-green-50'}`}>{drone.gubre}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        drone.status === 'Working' ? 'bg-green-100 text-green-800' :
                        drone.status === 'Charging' ? 'bg-blue-100 text-blue-800' :
                        drone.status === 'In Repair' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {drone.status === 'Working' ? '⚡' :
                         drone.status === 'Charging' ? '🔌' :
                         drone.status === 'In Repair' ? '🔧' :
                         '❌'} {drone.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DronesTable;
