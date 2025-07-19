import React, { useState } from 'react';

const ProfilePage = () => {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [showModal, setShowModal] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    if (avatar) formData.append('avatar', avatar);

    try {
      await fetch('/api/user/update', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Profile updated!');
    } catch (err) {
      alert('Update failed.');
    }
  };

  const handleDelete = async () => {
    if (confirmText !== 'delete my account') return;
    try {
      await fetch('/api/user/delete', {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      alert('Account deleted.');
      // logout / redirect
    } catch (err) {
      alert('Account deletion failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        <label htmlFor="avatar-upload" className="cursor-pointer">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src={avatarPreview || '/default-avatar.png'}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <input
            type="file"
            id="avatar-upload"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
        <p className="text-gray-500 mt-2 text-sm">Click image to change</p>
      </div>

      <div className="mt-6 space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          onClick={handleUpdate}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>

        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 mt-4"
        >
          Delete My Account
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-2 text-red-600">
              Confirm Account Deletion
            </h2>
            <p className="text-sm mb-4">
              To delete your account, type <strong>delete my account</strong> below:
            </p>
            <input
              type="text"
              className="w-full border p-2 rounded mb-4"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-sm bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                disabled={confirmText !== 'delete my account'}
                onClick={handleDelete}
                className={`px-4 py-2 text-sm rounded text-white ${
                  confirmText === 'delete my account'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-red-300 cursor-not-allowed'
                }`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;