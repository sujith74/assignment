import React, { useState, useEffect } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    userId: '',
  });
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [unsavedChanges]);

  const handleBeforeUnload = (e) => {
    if (unsavedChanges) {
      e.preventDefault();
      e.returnValue = '';
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUnsavedChanges(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, userId: `user-${Date.now()}` });
    localStorage.setItem('userData', JSON.stringify(formData));
    setUnsavedChanges(false);
    alert('Data saved!');
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <br/>
      <input name="address" placeholder="Address" onChange={handleChange}
       />
      <br/>

      <input name="email" placeholder="Email" onChange={handleChange} />
      <br/>

      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <br/>

      <button type="submit">Save</button>
      <br/>

    </form>
  );
};

export default UserForm;
