import React,  { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useAuth } from "../helper/AuthProvider";
import { useParams } from "react-router-dom";


function Contact() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { token } = useAuth();

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/accounts/get-contacts/', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }

      const data = await response.json();
      setContacts(data.contacts);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (contactId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/accounts/delete-contact/${contactId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete contact');
      }

      // Update contacts state after deletion
      const updatedContacts = contacts.filter(contact => contact.id !== contactId);
      setContacts(updatedContacts);
      fetchContacts();
    } catch (error) {
      console.error('Error deleting contact:', error.message);
    }
  };


  return (
    <div>
      <Navbar />
      <h2 class="text text-6xl text-center mt-20 font-staatliches mt-10 text-white">CONTACTS</h2>
      <div className="w-full max-w-md mb-7 p-4 mx-auto mt-32 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h5 className="font-staatliches text-4xl font-bold leading-none text-black">CONTACTS</h5>
          <Link to="/addcontact" className="font-staatliches text text-xl font-medium text-red-600 hover:underline">
              ADD CONTACT
          </Link>
        </div>
        <div className='flow-root'>
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          {contacts.map((contact, index) => (
              <li key={index} className="py-3 sm:py-4">
                  <div className="flex items-center">
                      <div className="flex-1 min-w-0 ms-4">
                          <p className="font-staatliches text-2xl font-medium text-black truncate">
                              {contact.contact_user_username}
                          </p>
                          <p className="font-staatliches text-xl text-gray-500 truncate ">
                              {contact.contact_user_email}
                          </p>
                          <a
                              className="font-staatliches text-xl font-medium text-red-600 hover:underline"
                              onClick={() => handleDelete(contact.contact_user)}
                          >
                              Delete
                          </a>
                      </div>
                  </div>
              </li>
          ))}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Contact