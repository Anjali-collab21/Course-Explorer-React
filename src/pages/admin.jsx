import React from "react";
import { useEffect, useState } from "react";
import usersData from "../data/users.json";


export default function Admin() {

  const [isLoading, setIsLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);
  const [loadError, setLoadError] = useState(null);

  useEffect(function () {
  
    setIsLoading(true);
    setLoadError(null);

    try {
      setTimeout(function () {
        if (!Array.isArray(usersData)) {
          throw new Error("Users data is not an array");
        }

        setUsersList(usersData); //if everything is fine , then
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      console.error("Error loading users:", err);
      setLoadError(err.message || "Unknown error");
      setIsLoading(false);
    }
  }, []);

//loading UI
  if (isLoading) {
    return (
      <section
        aria-labelledby="admin-heading"
        className="p-6 bg-white rounded-lg shadow"
      >
        <h2 id="admin-heading" className="sr-only">
          Admin — Users
        </h2>
        <div className="flex items-center gap-3">
          <svg
            className="w-6 h-6 animate-spin text-indigo-600"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              strokeOpacity="0.15"
            />
            <path
              d="M4 12a8 8 0 018-8"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
          <div className="text-gray-700">Loading users…</div>
        </div>
      </section>
    );
  }

//Error handling
  if (loadError) {
    return (
      <section
        aria-labelledby="admin-heading"
        className="p-6 bg-white rounded-lg shadow text-center"
      >
        <h2 id="admin-heading" className="text-lg font-semibold text-gray-900">
          Users
        </h2>
        <div className="text-red-600 font-medium mt-2">
          Could not load users
        </div>
        <div className="text-sm text-gray-600 mt-1">{loadError}</div>
      </section>
    );
  }

//if no user found
  if (!usersList || usersList.length === 0) {
    return (
      <section
        aria-labelledby="admin-heading"
        className="p-6 bg-white rounded-lg shadow text-center"
      >
        <h2 id="admin-heading" className="text-lg font-semibold text-gray-900">
          Users
        </h2>
        <div className="text-gray-700 font-medium mt-2">No users found</div>
        <div className="text-sm text-gray-500 mt-1">
          There are no users in the data source right now.
        </div>
      </section>
    );
  }


  return (
    <section
      aria-labelledby="admin-heading"
      className="p-6 bg-white rounded-lg shadow"
    >
      <h2 id="admin-heading" className="text-lg font-semibold text-gray-900">
        Users
      </h2>

      <div className="mt-4" role="region" aria-label="Users table">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead className="text-left text-xs text-gray-500 bg-gray-50 border-b">
            <tr>
              <th className="py-2 px-3 border-b">Name</th>
              <th className="py-2 px-3 border-b">Email</th>
              <th className="py-2 px-3 border-b">Role</th>
              <th className="py-2 px-3 border-b">Joined</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map(function (u) {
              return (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="py-3 px-3 border-b">{u.name}</td>
                  <td className="py-3 px-3 border-b text-sm text-gray-600">
                    {u.email}
                  </td>
                  <td className="py-3 px-3 border-b text-sm text-gray-700">
                    {u.role}
                  </td>
                  <td className="py-3 px-3 border-b text-sm text-gray-600">
                    {u.joinedAt ? u.joinedAt : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
