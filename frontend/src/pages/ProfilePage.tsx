import React, { useState } from "react";
import type { RootState } from "../state/store";
import { useSelector } from "react-redux";
import type { User } from "../types/general";
import { LoaderIcon } from "../assets/svg/Icons";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "../services/user.service";
import { toast } from "sonner";
import { handleApiError } from "../lib/errorHandler";
import { uploadFile } from "../lib/uploads";

const ProfilePage = () => {
  const user: User = useSelector((state: RootState) => state.auth.user);

  const [avatar, setAvatar] = useState<string | undefined>(
    user?.avaatar || undefined
  );
  const [avatarPreview, setAvatarPreview] = useState<string | null>( user?.avaatar || null);
  const [name, setName] = useState(user?.name || undefined);
  const [isImgLoading, setIsImgLoading] = useState(false);
  const [email, setEmail] = useState(user?.email || undefined);
  const [showModal, setShowModal] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [updateUser, { isLoading: updateLoading }] = useUpdateUserMutation();
  const [deleteUser, { isLoading: deleteLoading }] = useDeleteUserMutation();

  console.log("User from Redux state:", user);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        setIsImgLoading(true);
        const response = await uploadFile(file);
        if (response?.secure_url) {
          setAvatar(response.secure_url);
          toast.success("Image uploaded successfully!");
          setIsImgLoading(false);
        } else {
          toast.error("Image upload failed, try again!");
          setIsImgLoading(false);
        }
      } catch (err) {
        setIsImgLoading(false);
        console.error("Image upload error:", err);
        toast.error("Image upload failed, try again!");
      }
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await updateUser({
        id: user?.id,
        data: { name, avaatar: avatar },
      }).unwrap();
      if (response.success) {
        toast.success("Profile updated!");
      }
    } catch (err) {
      console.error("Update failed:", err);
      handleApiError(err);
    }
  };

  const handleDelete = async () => {
    if (confirmText !== "delete my account") return;
    try {
      await deleteUser(user.id).unwrap();
      alert("Account deleted.");
      // TODO: logout or redirect to homepage
    } catch (err) {
      console.error("Account deletion failed:", err);
      alert;
    }
  };

  const renderButtonContent = (title: string, loader: boolean) => {
    if (loader) {
      return <LoaderIcon width={20} height={20} className="text-center" />;
    }

    return title;
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col items-center">
        <label htmlFor="avatar-upload" className="cursor-pointer">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src={avatarPreview || "/default-avatar.png"}
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
        <p className="text-gray-500 mt-2 text-sm">
          {isImgLoading ? `Uploading Image...` : "Click image to change"}
        </p>
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
            className="w-full border p-2 rounded text-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
        </div>

        <button
          onClick={handleUpdate}
          // className="w-full bg-blue-600 text-white mt-5 py-2 rounded flex items-center text-center hover:bg-blue-700"
          className="w-full rounded bg-blue-600 p-2 font-semibold text-center items-center justify-center flex text-white hover:bg-blue-700"

        >
          {renderButtonContent("Update Profile", updateLoading)}
        </button>

        <button
          onClick={() => setShowModal(true)}
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 "
        >
          {renderButtonContent("Delete My Account", deleteLoading)}
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
              To delete your account, type <strong>delete my account</strong>{" "}
              below:
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
                disabled={confirmText !== "delete my account"}
                onClick={handleDelete}
                className={`px-4 py-2 text-sm rounded text-white ${
                  confirmText === "delete my account"
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-red-300 cursor-not-allowed"
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