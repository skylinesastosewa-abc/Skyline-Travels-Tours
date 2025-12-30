import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { Inbox, Trash2 } from "lucide-react";
import axios from "axios";

interface Inquiry {
  _id: string;
  name: string;
  inquiryType: string;
  departureCity: string;
  destinationCity: string;
  departureDate: string;
  returnDate?: string;
  passengers: number;
  email: string;
  phone: string;
  leadSource: string;
  message?: string;
  createdAt: string;
}

const API_URL = "http://localhost:5005/api/contact";

const InquiryPage: React.FC = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken") || localStorage.getItem("staffToken");

  const fetchInquiries = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setInquiries(res.data);
    } catch (err: any) {
      console.error("Failed to fetch inquiries", err);
      setError(err.response?.data?.message || "Failed to load inquiries.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchInquiries();
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete inquiry.");
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Inbox className="w-6 h-6 text-blue-500" />
            Customer Inquiries
          </h1>
        </div>

        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading inquiries...</div>
        ) : error ? (
          <div className="text-center text-red-600 py-10 text-lg">{error}</div>
        ) : inquiries.length === 0 ? (
          <div className="text-center text-gray-600 py-10 text-lg">No inquiries found.</div>
        ) : (
          <>
            <div className="mb-4 text-gray-700 font-medium">
              Total inquiries: {inquiries.length}
            </div>
            <div className="overflow-x-auto bg-white shadow rounded-md">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">#</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Inquiry Type</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Departure → Destination</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Dates</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Passengers</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Contact</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Lead Source</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Message</th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {inquiries.map((inq, index) => (
                    <tr key={inq._id} className="hover:bg-gray-50">
                      <td className="px-4 py-2">{index + 1}</td>
                      <td className="px-4 py-2">{inq.name}</td>
                      <td className="px-4 py-2">{inq.inquiryType}</td>
                      <td className="px-4 py-2">{inq.departureCity} → {inq.destinationCity}</td>
                      <td className="px-4 py-2">
                        {inq.departureDate} {inq.returnDate ? `→ ${inq.returnDate}` : ""}
                      </td>
                      <td className="px-4 py-2">{inq.passengers}</td>
                      <td className="px-4 py-2">
                        {inq.email} <br /> {inq.phone}
                      </td>
                      <td className="px-4 py-2">{inq.leadSource}</td>
                      <td className="px-4 py-2">{inq.message || "-"}</td>
                      <td className="px-4 py-2 flex justify-center gap-2">
                        <button
                          onClick={() => handleDelete(inq._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InquiryPage;
