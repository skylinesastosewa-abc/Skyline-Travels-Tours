import { CheckCircle2, Mail, FileText, User, Plus } from "lucide-react";

type SudipFlightDeal = {
  id: number;
  deal: string;
  phone: string;
  departureCity: string;
  destinationCity: string;
  travellingDate: string;
  returnDate?: string;
  assigned: { name: string; avatar: string };
  qualityEmail: boolean;
  noOfPax: number;
  sellingPrice: number;
  purchasePrice: number;
  margin: number;
  totalSales: number;
  totalPurchase: number;
  profit: number;
  allPassengersName: string[];
  email: string;
  customerTypes: string;
  createInvoice: boolean;
  visaTypes: string;
  creationLog: { date: string; creator: string; avatar: string };
};

const DEALS: SudipFlightDeal[] = [
  {
    id: 1,
    deal: "Sailung",
    phone: "+977 985 1120717",
    departureCity: "Kathmandu, Nepal",
    destinationCity: "Kuching International Airport",
    travellingDate: "Nov 6, 2025",
    returnDate: "Nov 10, 2025",
    assigned: { name: "Sudip Khanal", avatar: "https://i.pravatar.cc/150?u=sudip" },
    qualityEmail: true,
    noOfPax: 2,
    sellingPrice: 850,
    purchasePrice: 720,
    margin: 15.3,
    totalSales: 1700,
    totalPurchase: 1440,
    profit: 260,
    allPassengersName: ["John Doe", "Jane Doe"],
    email: "john.doe@example.com",
    customerTypes: "Individual",
    createInvoice: false,
    visaTypes: "Tourist Visa",
    creationLog: { date: "Oct 25, 2025", creator: "System", avatar: "https://i.pravatar.cc/150?u=creator" },
  },
];

const SudipFlights = () => {
  return (<>
    <div className="min-h-screen bg-gray-50 p-6 ">
      <div className="max-w-full mx-auto mt-30">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-green-600" />
          <h1 className="text-2xl font-semibold text-gray-900">Sudip Flights</h1>
        </div>

        {/* Won Deal Table */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2 group">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <h2 className="text-lg font-medium text-green-600">✓ Won Deal</h2>
            <span className="text-gray-400 text-sm opacity-0 group-hover:opacity-100">{DEALS.length} items</span>
          </div>

          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-x-auto">
            <div className="min-w-[2000px]">
              {/* Header */}
              <div className="flex border-b border-gray-200 bg-gray-50 sticky top-0 z-20">
                <div className="w-12 border-r border-gray-200 flex items-center justify-center p-2 sticky left-0 bg-gray-50 z-30">
                  <div className="w-4 h-4 border border-gray-300 rounded bg-white"></div>
                </div>
                <div className="w-[150px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Deal</div>
                <div className="w-[130px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Phone</div>
                <div className="w-[150px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Departure City</div>
                <div className="w-[150px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Destination City</div>
                <div className="w-[120px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Travelling Date</div>
                <div className="w-[120px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Return Date</div>
                <div className="w-[120px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Assigned</div>
                <div className="w-[100px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Quality Email</div>
                <div className="w-[90px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">No. of Pax</div>
                <div className="w-[110px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Selling Price</div>
                <div className="w-[120px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Purchase Price</div>
                <div className="w-[90px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Margin %</div>
                <div className="w-[110px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Total Sales</div>
                <div className="w-[120px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Total Purchase</div>
                <div className="w-[100px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Profit</div>
                <div className="w-[180px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">All Passengers Name</div>
                <div className="w-[150px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Email</div>
                <div className="w-[120px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Customer Types</div>
                <div className="w-[110px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Create Invoice</div>
                <div className="w-[100px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Assign</div>
                <div className="w-[120px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Visa Types</div>
                <div className="w-[150px] border-r border-gray-200 p-2 text-xs font-semibold text-gray-700">Creation Log</div>
              </div>

              {/* Rows */}
              {DEALS.map((deal) => (
                <div key={deal.id} className="flex border-b border-gray-200 hover:bg-gray-50 group">
                  <div className="w-12 border-r border-gray-200 flex items-center justify-center p-2 sticky left-0 bg-white z-20">
                    <div className="w-4 h-4 border border-gray-300 rounded hover:border-blue-500 cursor-pointer"></div>
                  </div>
                  <div className="w-[150px] border-r border-gray-200 p-2 text-xs text-gray-800">{deal.deal}</div>
                  <div className="w-[130px] border-r border-gray-200 p-2 text-xs text-gray-800">{deal.phone}</div>
                  <div className="w-[150px] border-r border-gray-200 p-2 text-xs text-gray-800">{deal.departureCity}</div>
                  <div className="w-[150px] border-r border-gray-200 p-2 text-xs text-gray-800">{deal.destinationCity}</div>
                  <div className="w-[120px] border-r border-gray-200 p-2 text-xs text-gray-800">{deal.travellingDate}</div>
                  <div className="w-[120px] border-r border-gray-200 p-2 text-xs text-gray-800">{deal.returnDate || "-"}</div>
                  <div className="w-[120px] border-r border-gray-200 p-2 flex items-center gap-2">
                    <img src={deal.assigned.avatar} alt={deal.assigned.name} className="w-6 h-6 rounded-full" />
                    <span className="text-xs text-gray-800">{deal.assigned.name}</span>
                  </div>
                  <div className="w-[100px] border-r border-gray-200 p-2">
                    {deal.qualityEmail ? (
                      <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <Mail className="w-3 h-3" />
                        Send
                      </button>
                    ) : (
                      <span className="text-xs text-gray-400">-</span>
                    )}
                  </div>
                  <div className="w-[90px] border-r border-gray-200 p-2 text-xs text-gray-800 text-center">{deal.noOfPax}</div>
                  <div className="w-[110px] border-r border-gray-200 p-2 text-xs text-gray-800">${deal.sellingPrice}</div>
                  <div className="w-[120px] border-r border-gray-200 p-2 text-xs text-gray-800">${deal.purchasePrice}</div>
                  <div className="w-[90px] border-r border-gray-200 p-2 text-xs text-green-600 font-medium">{deal.margin}%</div>
                  <div className="w-[110px] border-r border-gray-200 p-2 text-xs text-gray-800 font-medium">${deal.totalSales}</div>
                  <div className="w-[120px] border-r border-gray-200 p-2 text-xs text-gray-800">${deal.totalPurchase}</div>
                  <div className="w-[100px] border-r border-gray-200 p-2 text-xs text-green-600 font-semibold">${deal.profit}</div>
                  <div className="w-[180px] border-r border-gray-200 p-2 text-xs text-gray-800">
                    {deal.allPassengersName.join(", ")}
                  </div>
                  <div className="w-[150px] border-r border-gray-200 p-2 text-xs text-blue-600">{deal.email}</div>
                  <div className="w-[120px] border-r border-gray-200 p-2">
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">{deal.customerTypes}</span>
                  </div>
                  <div className="w-[110px] border-r border-gray-200 p-2">
                    {deal.createInvoice ? (
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        Invoice
                      </button>
                    ) : (
                      <button className="text-xs text-gray-400 hover:text-blue-600">Create</button>
                    )}
                  </div>
                  <div className="w-[100px] border-r border-gray-200 p-2">
                    <button className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <User className="w-3 h-3" />
                      Assign
                    </button>
                  </div>
                  <div className="w-[120px] border-r border-gray-200 p-2">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">{deal.visaTypes}</span>
                  </div>
                  <div className="w-[150px] border-r border-gray-200 p-2 flex items-center gap-2">
                    <img src={deal.creationLog.avatar} alt={deal.creationLog.creator} className="w-5 h-5 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-xs text-gray-800">{deal.creationLog.creator}</span>
                      <span className="text-xs text-gray-500">{deal.creationLog.date}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Add Row */}
              <div className="flex h-9 border-t border-gray-200 hover:bg-gray-50 cursor-pointer">
                <div className="w-12 border-r border-gray-200 bg-white sticky left-0 z-10"></div>
                <div className="w-full flex items-center px-3 text-sm text-gray-500">
                  <Plus className="w-4 h-4 mr-2" /> Add deal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </>
  );
};

export default SudipFlights;

