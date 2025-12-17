import React from 'react';

const TechnicalDepartment: React.FC = () => {
  // Technical staff data
  const technicalStaff = [
    { name: 'John Smith', role: 'Senior Engineer', status: 'Busy', experience: '5 years', currentAssignment: 'DRONE_0006, DRONE_0038' },
    { name: 'Sarah Johnson', role: 'Drone Technician', status: 'Busy', experience: '3 years', currentAssignment: 'DRONE_0011' },
    { name: 'Michael Brown', role: 'Maintenance Specialist', status: 'Busy', experience: '7 years', currentAssignment: 'DRONE_0013, DRONE_0020, DRONE_0047' },
    { name: 'Emily Davis', role: 'Software Engineer', status: 'Busy', experience: '4 years', currentAssignment: 'DRONE_0029' },
    { name: 'David Wilson', role: 'Field Technician', status: 'Not Working Today', experience: '2 years', currentAssignment: '' },
  ];

  // Drones in repair data (filtered from main drones data)
  const dronesInRepair = [
    { id: 'DRONE_0006', status: 'In Repair', issue: 'Wing replacement (p1, p2, p3)', estimatedRepair: '2 days', assignedStaff: 'John Smith' },
    { id: 'DRONE_0011', status: 'In Repair', issue: 'Battery', estimatedRepair: '1 day', assignedStaff: 'Sarah Johnson' },
    { id: 'DRONE_0013', status: 'In Repair', issue: 'Sensor', estimatedRepair: '3 days', assignedStaff: 'Michael Brown' },
    { id: 'DRONE_0020', status: 'In Repair', issue: 'Body', estimatedRepair: '4 days', assignedStaff: 'David Wilson' },
    { id: 'DRONE_0029', status: 'In Repair', issue: 'Battery', estimatedRepair: '1 day', assignedStaff: 'Emily Davis' },
    { id: 'DRONE_0038', status: 'In Repair', issue: 'Wing replacement (p4, p5)', estimatedRepair: '3 days', assignedStaff: 'John Smith' },
    { id: 'DRONE_0047', status: 'In Repair', issue: 'Sensor', estimatedRepair: '2 days', assignedStaff: 'Sarah Johnson' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Technical Staff Table */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 px-6 py-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              👷 Technical Staff
            </h2>
            <p className="text-green-100 mt-1">Manage and monitor technical department personnel</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">👤 Name</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">🔧 Role</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">📈 Experience</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">⚙️ Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">🚁 Current Assignment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {technicalStaff.map((staff, index) => (
                  <tr key={staff.name} className={`hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{staff.experience}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        staff.status === 'Available' ? 'bg-green-100 text-green-800' :
                        staff.status === 'Busy' ? 'bg-yellow-100 text-yellow-800' :
                        staff.status === 'Not Working Today' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {staff.status === 'Available' ? '✅' :
                         staff.status === 'Busy' ? '⏳' :
                         staff.status === 'Not Working Today' ? '🚫' :
                         '🏖️'} {staff.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {staff.currentAssignment === 'None' || staff.currentAssignment === '' ? 
                        <span className="text-gray-500">🚫 None</span> : 
                        <span className="text-blue-600">{staff.currentAssignment}</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Drones in Repair Table */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 px-6 py-4">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              🔧 Drones in Repair
            </h2>
            <p className="text-red-100 mt-1">Track drones currently undergoing maintenance</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">🛠️ Issue</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">⏱️ Estimated Repair</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">👤 Assigned Staff</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dronesInRepair.map((drone, index) => (
                  <tr key={drone.id} className={`hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{drone.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{drone.issue}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{drone.estimatedRepair}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="text-green-600 font-medium">👷 {drone.assignedStaff}</span>
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

export default TechnicalDepartment;
